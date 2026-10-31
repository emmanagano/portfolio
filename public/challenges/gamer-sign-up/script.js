// NEONCORE sign-up form: validation, password strength, submit flow.
(() => {
	"use strict";

	const SUBMIT_DELAY_MS = 1800;

	const form = document.getElementById("signup");
	const panel = document.getElementById("panel");
	const success = document.getElementById("success");
	const successTitle = document.getElementById("success-title");
	const successName = document.getElementById("success-name");
	const submitBtn = document.getElementById("submit");
	const submitText = document.getElementById("submit-text");
	const status = document.getElementById("status");
	const operatorName = document.getElementById("operator-name");
	const readyEls = document.querySelectorAll("[data-ready]");
	const meter = document.getElementById("meter");
	const strengthEl = document.getElementById("strength");

	const TEXT_FIELDS = ["callsign", "email", "password", "confirm"];
	const ALL_FIELDS = [...TEXT_FIELDS, "terms"];

	// Each message is [text shown in the form, fault code shown in the readout].
	const MESSAGES = {
		callsign: {
			missing: ["Enter a callsign", "Missing"],
			short: ["Use at least 3 characters", "Too short"],
			long: ["Use 20 characters or fewer", "Too long"],
			chars: ["Use letters, numbers, _ or - only", "Bad character"],
		},
		email: {
			missing: ["Enter your email", "Missing"],
			malformed: ["Enter a valid email, like you@example.com", "Malformed"],
		},
		password: {
			missing: ["Enter a password", "Missing"],
			short: ["Use at least 8 characters", "Too short"],
		},
		confirm: {
			missing: ["Confirm your password", "Missing"],
			mismatch: ["Passwords don't match", "Mismatch"],
		},
		terms: {
			required: ["Accept the terms to continue", "Required"],
		},
	};

	const fields = {};
	for (const name of ALL_FIELDS) {
		const wrap = form.querySelector(`[data-field="${name}"]`);
		fields[name] = {
			wrap,
			input: document.getElementById(name),
			tick: wrap.querySelector(".tick"),
			hint: wrap.querySelector(".hint"),
			error: document.getElementById(`${name}-error`),
		};
	}

	// checked: the field has been checked at least once (so it re-checks on every keystroke).
	// error:   the current fault key, or null.
	const state = {};
	for (const name of ALL_FIELDS) state[name] = { checked: false, error: null };

	let submitting = false;
	let locked = false;

	/* ---------- Validators: return a fault key, or null when valid ---------- */

	const validators = {
		callsign() {
			const v = fields.callsign.input.value.trim();
			if (!v) return "missing";
			if (v.length < 3) return "short";
			if (v.length > 20) return "long";
			if (!/^[A-Za-z0-9_-]+$/.test(v)) return "chars";
			return null;
		},
		email() {
			const v = fields.email.input.value;
			if (!v) return "missing";
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "malformed";
		},
		password() {
			const v = fields.password.input.value;
			if (!v) return "missing";
			return v.length < 8 ? "short" : null;
		},
		confirm() {
			const v = fields.confirm.input.value;
			if (!v) return "missing";
			return v === fields.password.input.value ? null : "mismatch";
		},
	};

	/* ---------- Rendering ---------- */

	function isValid(name) {
		if (name === "terms") return fields.terms.input.checked;
		return state[name].checked && !state[name].error;
	}

	function renderField(name) {
		const f = fields[name];
		const s = state[name];
		const valid = isValid(name);
		const msg = s.error ? MESSAGES[name][s.error] : null;

		f.wrap.dataset.state = msg ? "error" : valid && name !== "terms" ? "valid" : "idle";

		if (msg) {
			f.input.setAttribute("aria-invalid", "true");
			f.error.querySelector("span").textContent = msg[0];
		} else {
			f.input.removeAttribute("aria-invalid");
		}
		f.error.hidden = !msg;
		if (f.hint) f.hint.hidden = !!msg;
		if (f.tick) f.tick.hidden = !(valid && name !== "terms");

		// Connect whichever message is showing to the field so screen readers read it with the field.
		const describedBy = msg ? f.error.id : f.hint ? f.hint.id : "";
		if (describedBy) f.input.setAttribute("aria-describedby", describedBy);
		else f.input.removeAttribute("aria-describedby");
	}

	function rowStatus(name) {
		if (locked) return { text: "Locked", cls: "is-locked" };
		if (state[name].error) {
			return { text: MESSAGES[name][state[name].error][1], cls: "is-error" };
		}
		if (isValid(name)) return { text: "OK", cls: "is-ok" };
		return { text: name === "terms" ? "Required" : "Pending", cls: "" };
	}

	function renderReadout() {
		let ready = 0;
		for (const name of ALL_FIELDS) {
			const row = document.querySelector(`[data-row="${name}"] b`);
			const { text, cls } = rowStatus(name);
			row.textContent = text;
			row.className = cls;
			if (cls === "is-ok") ready++;
		}

		const allReady = ready === ALL_FIELDS.length;
		for (const el of readyEls) {
			el.textContent = locked ? "Provisioned" : `${ready}/${ALL_FIELDS.length} ready`;
			el.classList.toggle("is-complete", locked || allReady);
		}

		const callsignOk = isValid("callsign");
		operatorName.textContent = callsignOk ? fields.callsign.input.value.trim() : "Unassigned";
		operatorName.classList.toggle("is-unassigned", !callsignOk);
	}

	function renderAll() {
		for (const name of ALL_FIELDS) renderField(name);
		renderReadout();
	}

	/* ---------- Checking ---------- */

	function check(name) {
		state[name].checked = true;
		state[name].error = validators[name]();
		renderField(name);
		renderReadout();
	}

	function checkTerms() {
		state.terms.checked = true;
		state.terms.error = fields.terms.input.checked ? null : "required";
		renderField("terms");
		renderReadout();
	}

	/* ---------- Password strength ---------- */

	const STRENGTH_LABELS = ["", "Weak", "Fair", "Good", "Strong"];

	function strengthLevel(pw) {
		if (!pw) return 0;
		if (pw.length < 8) return 1;
		const score =
			1 + // 8 or more characters
			(pw.length >= 12 ? 1 : 0) +
			(/[a-z]/.test(pw) && /[A-Z]/.test(pw) ? 1 : 0) +
			(/\d/.test(pw) ? 1 : 0) +
			(/[^A-Za-z0-9]/.test(pw) ? 1 : 0);
		return Math.min(score, 4);
	}

	function renderStrength() {
		const level = strengthLevel(fields.password.input.value);
		meter.dataset.level = String(level);
		strengthEl.dataset.level = String(level);
		strengthEl.textContent = STRENGTH_LABELS[level];
	}

	/* ---------- Events ---------- */

	for (const name of TEXT_FIELDS) {
		const { input } = fields[name];

		// A field is checked when it loses focus with something in it.
		input.addEventListener("blur", () => {
			if (input.value !== "") check(name);
		});

		// Once checked, it re-checks on every keystroke.
		input.addEventListener("input", () => {
			if (state[name].checked) check(name);
			if (name === "password") {
				renderStrength();
				if (state.confirm.checked) check("confirm");
			}
			renderReadout();
		});
	}

	// The terms error only appears on submit, and clears as soon as the box changes.
	fields.terms.input.addEventListener("change", () => {
		state.terms.error = null;
		renderField("terms");
		renderReadout();
	});

	// Show / hide each password.
	for (const btn of form.querySelectorAll(".eye")) {
		btn.addEventListener("click", () => setRevealed(btn, btn.getAttribute("aria-pressed") !== "true"));
	}

	function setRevealed(btn, show) {
		const input = document.getElementById(btn.getAttribute("aria-controls"));
		input.type = show ? "text" : "password";
		btn.setAttribute("aria-pressed", String(show)); // the icon swaps in CSS
	}

	// Placeholder links (no real Terms, Privacy or log-in pages in this challenge).
	for (const a of document.querySelectorAll("[data-stub]")) {
		a.addEventListener("click", (e) => e.preventDefault());
	}

	/* ---------- Submit ---------- */

	function announce(message) {
		// Clear first so the same message is announced again on a repeat submit.
		status.textContent = "";
		setTimeout(() => {
			status.textContent = message;
		}, 50);
	}

	function shake() {
		panel.classList.remove("is-shaking");
		void panel.offsetWidth; // restart the animation
		panel.classList.add("is-shaking");
	}
	panel.addEventListener("animationend", () => panel.classList.remove("is-shaking"));

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (submitting) return;

		for (const name of TEXT_FIELDS) check(name);
		checkTerms();

		const invalid = ALL_FIELDS.filter((name) => state[name].error);
		if (invalid.length) {
			const n = invalid.length;
			announce(`${n} ${n === 1 ? "field needs" : "fields need"} attention`);
			fields[invalid[0]].input.focus();
			shake();
			return;
		}

		startSubmit();
	});

	function startSubmit() {
		submitting = true;

		for (const btn of form.querySelectorAll(".eye")) {
			setRevealed(btn, false);
			btn.disabled = true;
		}
		for (const name of TEXT_FIELDS) fields[name].input.readOnly = true;
		fields.terms.input.disabled = true;

		submitBtn.classList.add("is-loading");
		submitBtn.setAttribute("aria-disabled", "true");
		submitText.textContent = "Transmitting_";
		announce("Transmitting");

		setTimeout(showSuccess, SUBMIT_DELAY_MS);
	}

	function showSuccess() {
		locked = true;
		renderReadout();

		// Keep the panel the same height so the layout doesn't jump.
		panel.style.minHeight = `${panel.offsetHeight}px`;
		successName.textContent = fields.callsign.input.value.trim();
		form.hidden = true;
		success.hidden = false;
		successTitle.focus();
	}

	renderAll();
	renderStrength();
})();
