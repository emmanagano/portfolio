#!/usr/bin/env node
// Checks WCAG contrast for every theme in the NEONCORE sign-up page.
//   node scripts/check-theme-contrast.mjs            all themes
//   node scripts/check-theme-contrast.mjs bond       one theme
// Reads public/challenges/gamer-sign-up/themes.css. Exits 1 if any pair fails.
import { readFileSync } from "node:fs";

// THEMES_CSS overrides the file (used to test the checker itself).
const FILE = process.env.THEMES_CSS ?? new URL("../public/challenges/gamer-sign-up/themes.css", import.meta.url);
const only = process.argv[2];

const css = readFileSync(FILE, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");

// ---- parse blocks into { themeId: { "--token": "value" } }
const rootDefaults = {};
const themes = {};
for (const [, selector, body] of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
	const decls = {};
	for (const [, name, value] of body.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) decls[name] = value.trim();
	const id = selector.match(/\[data-theme="([^"]+)"\]/)?.[1];
	if (id) themes[id] = { ...(themes[id] ?? {}), ...decls };
	else if (selector.trim() === ":root") Object.assign(rootDefaults, decls);
}

// ---- color helpers
function hslToRgb(h, s, l) {
	s /= 100; l /= 100;
	const k = (n) => (n + h / 30) % 12;
	const a = s * Math.min(l, 1 - l);
	const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
	return [f(0), f(8), f(4)];
}
function parseColor(value, vars, depth = 0) {
	if (depth > 8 || !value) return null;
	value = value.trim();
	const v = value.match(/^var\((--[\w-]+)\)$/);
	if (v) return parseColor(vars[v[1]], vars, depth + 1);
	let m = value.match(/^hsl\(\s*([\d.]+)\s+([\d.]+)%\s+([\d.]+)%\s*(?:\/\s*([\d.]+))?\s*\)$/);
	if (m) return m[4] !== undefined && Number(m[4]) < 1 ? null : hslToRgb(+m[1], +m[2], +m[3]);
	m = value.match(/^#([0-9a-f]{6})$/i);
	if (m) return [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16) / 255);
	return null; // transparent, color-mix, etc: not a solid color
}
const lum = (rgb) => {
	const c = (x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
	return 0.2126 * c(rgb[0]) + 0.7152 * c(rgb[1]) + 0.0722 * c(rgb[2]);
};
const ratio = (a, b) => {
	const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
	return (hi + 0.05) / (lo + 0.05);
};

// ---- the pairs (foreground, background, minimum ratio, what it is)
const TEXT = 4.5;
const UI = 3;
const pairs = [
	["--text", "--surface", TEXT, "body text on panel"],
	["--text-hi", "--surface", TEXT, "link hover on panel"],
	["--text-2", "--surface", TEXT, "labels, terms text"],
	["--text-3", "--surface", TEXT, "hints"],
	["--text-4", "--surface", TEXT, "muted text on panel"],
	["--accent", "--surface", TEXT, "links, accent text on panel"],
	["--success", "--surface", TEXT, "valid / success"],
	["--error", "--surface", TEXT, "error text"],
	["--warn", "--surface", TEXT, "Fair strength"],
	["--text", "--field", TEXT, "typed text in inputs"],
	["--text-4", "--field", TEXT, "placeholder text"],
	["--accent-ink", "--accent", TEXT, "button text"],
	["--accent-ink", "--btn-hover-bg", TEXT, "button text on hover"],
	["#08010a", "--accent", UI, "dark tick on checked checkbox"],
	["--text-3", "--surface", UI, "input border"],
	["--text-2", "--field", UI, "checkbox border"],
	["--on-bg", "--bg", TEXT, "page text (brand column)"],
	["--on-bg-2", "--bg", TEXT, "page tagline"],
	["--on-bg-3", "--bg", TEXT, "page footer, dock"],
	["--on-bg-4", "--bg", TEXT, "page muted labels"],
	["--on-bg-accent", "--bg", TEXT, "page accent text"],
	["--on-bg-success", "--bg", TEXT, "page success status"],
	["--on-bg-error", "--bg", TEXT, "page error status"],
];

let failures = 0;
const ids = Object.keys(themes).filter((id) => !only || id === only);
if (!ids.length) {
	console.error(only ? `No theme "${only}" in themes.css` : "No themes found in themes.css");
	process.exit(1);
}

for (const id of ids) {
	const vars = { ...rootDefaults, ...themes[id] };
	console.log(`\n${id}`);
	for (const [fg, bg, min, label] of pairs) {
		const f = parseColor(fg.startsWith("#") ? fg : `var(${fg})`, vars);
		const b = parseColor(`var(${bg})`, vars);
		if (!f || !b) {
			failures++;
			console.log(`  FAIL  ${"?".padStart(5)}  ${label} (${fg} on ${bg}): could not read as a solid hsl()/#hex color`);
			continue;
		}
		const r = ratio(f, b);
		const ok = r >= min;
		if (!ok) failures++;
		console.log(`  ${ok ? "PASS" : "FAIL"}  ${r.toFixed(2).padStart(5)}  >= ${min}  ${label} (${fg} on ${bg})`);
	}
}
console.log(failures ? `\n${failures} check(s) below target.` : "\nAll contrast targets met.");
process.exit(failures ? 1 : 0);
