// Theme registry. The FIRST entry is the default theme.
//
// Each entry pairs with a [data-theme="id"] block in themes.css.
//   id        matches the CSS block and ?theme=id
//   label     shown in the theme dock
//   swatch    [page background, accent, success]: the dock chip and the wipe colors
//   fx        effect pack. Any of:
//               grid       perspective grid floor
//               scanlines  CRT lines        vignette  dark edges
//               glitch     RGB-split title + panel flash
//               kana       vertical katakana strip (wide screens)
//               rain       falling binary digits
//               flicker    faint CRT flicker      grain  animated film grain
//               holo       animated iridescent panel border
//               hazard     hazard stripes on the panel
//               tape       caution-tape ticker    spotlight  light cone
//   backdrop  "hex" or "barrel" shape behind the panel
//   wipe      transition when switching TO this theme:
//               "glitch" | "hazard" | "scan" | "iris"
//   themeColor  browser UI color (<meta name="theme-color">)
//   copy      decorative text only (hidden from screen readers):
//               stamp  success badge     kana  side strip
//               log    three success log lines, each { t: text, ok?: highlighted word }
window.NEON_THEMES = [
	{
		id: "cyberpunk-pink",
		label: "Cyberpunk Pink",
		swatch: ["#08010a", "#ff33b4", "#3dffff"],
		fx: ["grid", "scanlines", "vignette", "glitch", "kana"],
		backdrop: "hex",
		wipe: "glitch",
		themeColor: "#08010a",
		copy: {
			stamp: "Access granted",
			kana: "ネオンコア // サイバーパンク",
			log: [
				{ t: "handshake ...", ok: "OK" },
				{ t: "identity ...", ok: "PROVISIONED" },
				{ t: "welcome to the nexus_" },
			],
		},
	},
	{
		id: "cyberpunk-yellow",
		label: "Cyberpunk Yellow",
		swatch: ["#ffd500", "#0d0d0d", "#7dff1f"],
		fx: ["hazard", "tape", "glitch", "grain"],
		backdrop: "hex",
		wipe: "hazard",
		themeColor: "#ffd500",
		copy: {
			stamp: "Cleared // proceed",
			kana: "ネオンコア // 注意",
			log: [
				{ t: "badge scan ...", ok: "VALID" },
				{ t: "clearance ...", ok: "LEVEL 2" },
				{ t: "proceed with caution_" },
			],
		},
	},
	{
		id: "cyberpunk-blue",
		label: "Cyberpunk Blue",
		swatch: ["#02050f", "#4da3ff", "#2effc4"],
		fx: ["rain", "scanlines", "vignette", "flicker", "holo", "glitch", "kana"],
		backdrop: "hex",
		wipe: "scan",
		themeColor: "#02050f",
		copy: {
			stamp: "Link established",
			kana: "ネオンコア // サイバーネット",
			log: [
				{ t: "uplink ...", ok: "SYNCED" },
				{ t: "identity ...", ok: "PROVISIONED" },
				{ t: "welcome to the net_" },
			],
		},
	},
	{
		id: "bond",
		label: "Bond",
		swatch: ["#0a0a0a", "#f1ebe0", "#d9b24a"],
		fx: ["spotlight", "grain", "vignette"],
		backdrop: "barrel",
		wipe: "iris",
		themeColor: "#0a0a0a",
		copy: {
			stamp: "Mission accepted",
			kana: "",
			log: [
				{ t: "briefing ...", ok: "CLASSIFIED" },
				{ t: "clearance ...", ok: "GRANTED" },
				{ t: "good luck, operator_" },
			],
		},
	},
];
