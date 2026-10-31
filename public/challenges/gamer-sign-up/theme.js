// Theme boot, dock, and switching. Needs themes.js loaded first.
// Loaded synchronously in <head> so the saved theme applies before first paint.
(() => {
	"use strict";

	const themes = window.NEON_THEMES || [];
	if (!themes.length) return;

	const KEY = "neoncore-theme";
	const root = document.documentElement;
	const byId = (id) => themes.find((t) => t.id === id);
	const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	/* ---------- Which theme? ?theme=id, then saved choice, then the first entry ---------- */

	function initialTheme() {
		try {
			const q = new URLSearchParams(location.search).get("theme");
			if (q && byId(q)) return byId(q);
		} catch {}
		try {
			const saved = localStorage.getItem(KEY);
			if (saved && byId(saved)) return byId(saved);
		} catch {}
		return themes[0];
	}

	/* ---------- Applying a theme ---------- */

	function faviconFor(t) {
		const [bg, accent] = t.swatch;
		const mark = t.id === "cyberpunk-yellow" ? "#ffd500" : accent;
		const tile = t.id === "cyberpunk-yellow" ? "#0d0d0d" : bg;
		const svg =
			`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">` +
			`<rect width="32" height="32" fill="${tile}"/>` +
			`<path stroke="${mark}" stroke-width="1.5" d="m30 16-7 12.12H9L2 16 9 3.88h14z"/>` +
			`<path fill="${mark}" d="m21 16-2.5 4.33h-5L11 16l2.5-4.33h5z"/></svg>`;
		return "data:image/svg+xml," + encodeURIComponent(svg);
	}

	function apply(t) {
		root.dataset.theme = t.id;
		root.dataset.fx = t.fx.join(" ");
		root.dataset.backdrop = t.backdrop || "hex";

		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta) meta.setAttribute("content", t.themeColor);
		const icon = document.querySelector('link[rel="icon"]');
		if (icon) icon.setAttribute("href", faviconFor(t));

		if (document.readyState !== "loading") writeCopy(t);
	}

	// Decorative text only. Built with textContent, never innerHTML.
	function writeCopy(t) {
		const kana = document.querySelector(".brand__kana");
		if (kana) kana.textContent = t.copy.kana || "";
		const stamp = document.querySelector(".success__stamp");
		if (stamp) stamp.textContent = t.copy.stamp || "";
		const log = document.querySelector(".success__log");
		if (log) {
			log.replaceChildren();
			t.copy.log.forEach((line, i) => {
				const li = document.createElement("li");
				li.style.setProperty("--i", String(i));
				const gt = document.createElement("span");
				gt.className = "gt";
				gt.textContent = ">";
				li.append(gt, " " + line.t);
				if (line.ok) {
					const ok = document.createElement("span");
					ok.className = "ok";
					ok.textContent = line.ok;
					li.append(" ", ok);
				}
				log.append(li);
			});
		}
	}

	let current = initialTheme();
	apply(current);

	/* ---------- Dock + switching (runs once the DOM exists) ---------- */

	function announce(message) {
		const status = document.getElementById("status");
		if (!status) return;
		status.textContent = "";
		setTimeout(() => {
			status.textContent = message;
		}, 50);
	}

	function save(id) {
		try {
			localStorage.setItem(KEY, id);
		} catch {}
	}

	let wiping = false;

	function switchTo(next) {
		if (next.id === current.id) return;
		current = next;
		save(next.id);

		// Always report the LATEST choice: a second click can land while a wipe is running.
		const finish = () => {
			announce(`Theme: ${current.label}`);
			const name = document.querySelector(".dock__name");
			if (name) name.textContent = current.label;
		};

		if (reduceMotion() || wiping) {
			apply(next);
			finish();
			return;
		}

		// Cover the screen, swap the tokens while it is covered, then uncover.
		wiping = true;
		const wipe = document.createElement("div");
		wipe.className = "wipe";
		wipe.setAttribute("aria-hidden", "true");
		wipe.dataset.type = next.wipe || "glitch";
		wipe.style.setProperty("--wipe-a", next.swatch[1]);
		wipe.style.setProperty("--wipe-b", next.swatch[2]);
		wipe.style.setProperty("--wipe-bg", next.swatch[0]);
		document.body.append(wipe);

		const DURATION = 700;
		setTimeout(() => apply(current), DURATION * 0.5);
		setTimeout(() => {
			wipe.remove();
			wiping = false;
			apply(current);
			finish();
		}, DURATION);
	}

	function buildDock() {
		if (themes.length < 2) return; // nothing to switch between

		const dock = document.createElement("fieldset");
		dock.className = "dock";
		const legend = document.createElement("legend");
		legend.className = "sr-only";
		legend.textContent = "Theme";
		dock.append(legend);

		const label = document.createElement("span");
		label.className = "dock__label";
		label.setAttribute("aria-hidden", "true");
		label.textContent = "Theme";
		dock.append(label);

		const chips = document.createElement("div");
		chips.className = "dock__chips";
		for (const t of themes) {
			const chip = document.createElement("label");
			chip.className = "chip";
			chip.title = t.label;

			const input = document.createElement("input");
			input.type = "radio";
			input.name = "theme";
			input.value = t.id;
			input.checked = t.id === current.id;
			input.addEventListener("change", () => switchTo(t));

			const sw = document.createElement("span");
			sw.className = "chip__sw";
			sw.setAttribute("aria-hidden", "true");
			for (const color of t.swatch) {
				const stripe = document.createElement("i");
				stripe.style.background = color;
				sw.append(stripe);
			}

			const name = document.createElement("span");
			name.className = "sr-only";
			name.textContent = t.label;

			chip.append(input, sw, name);
			chips.append(chip);
		}
		dock.append(chips);

		const name = document.createElement("span");
		name.className = "dock__name";
		name.setAttribute("aria-hidden", "true");
		name.textContent = current.label;
		dock.append(name);

		const footer = document.querySelector(".attribution");
		if (footer) footer.before(dock);
		else document.body.append(dock);
	}

	document.addEventListener("DOMContentLoaded", () => {
		writeCopy(current);
		buildDock();
	});
})();
