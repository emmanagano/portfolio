"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Reveal from "../motion/Reveal";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
	"w-full rounded-xl border-2 border-foreground bg-surface px-4 py-3 text-foreground placeholder:text-muted/70 transition-shadow focus:shadow-[4px_4px_0_var(--accent)] focus:outline-none user-invalid:border-primary-ink";

export default function Contact() {
	const [status, setStatus] = useState<Status>("idle");

	// Netlify Forms: the static skeleton in public/__forms.html registers the
	// "contact" form at build time; submissions are POSTed to it.
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		setStatus("sending");
		try {
			const res = await fetch("/__forms.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(
					new FormData(form) as unknown as Record<string, string>
				).toString(),
			});
			if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
			form.reset();
			setStatus("success");
		} catch {
			setStatus("error");
		}
	};

	return (
		<section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
			<div className="grid gap-12 md:grid-cols-2">
				<Reveal>
					<p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-muted">
						<span className="text-primary-ink" aria-hidden="true">✦</span> Contact
					</p>
					<h2 className="font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl">
						Let&apos;s build <span className="text-primary-ink">something</span>{" "}
						together.
					</h2>
					<p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
						I&apos;m looking for a frontend role where I can keep
						learning and ship things people use. Hiring, or have a
						project in mind? Send me a note.
					</p>
					<p className="mt-6 text-lg">
						Or email me directly at{" "}
						<a
							href={`mailto:${site.email}`}
							className="font-bold underline decoration-primary decoration-2 underline-offset-4 hover:decoration-4"
						>
							{site.email}
						</a>
					</p>
				</Reveal>

				<Reveal delay={0.1}>
					{status === "success" ? (
						<div
							role="status"
							className="flex h-full flex-col items-start justify-center gap-4 rounded-3xl border-2 border-foreground bg-sun p-8 text-[#1a1423] shadow-[8px_8px_0_var(--foreground)]"
						>
							<span className="text-5xl" aria-hidden="true">🎉</span>
							<h3 className="font-display text-3xl font-extrabold">
								Message sent!
							</h3>
							<p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
							<button
								type="button"
								onClick={() => setStatus("idle")}
								className="font-bold underline underline-offset-4"
							>
								Send another
							</button>
						</div>
					) : (
						<form
							name="contact"
							onSubmit={onSubmit}
							className="space-y-5 rounded-3xl border-2 border-foreground bg-surface p-6 shadow-[8px_8px_0_var(--foreground)] sm:p-8"
						>
							<input type="hidden" name="form-name" value="contact" />
							<p className="hidden">
								<label>
									Don&apos;t fill this out: <input name="bot-field" />
								</label>
							</p>
							<div>
								<label htmlFor="contact-name" className="mb-2 block font-bold">
									Name
								</label>
								<input
									id="contact-name"
									name="name"
									required
									autoComplete="name"
									className={inputClass}
									placeholder="Your name"
								/>
							</div>
							<div>
								<label htmlFor="contact-email" className="mb-2 block font-bold">
									Email
								</label>
								<input
									id="contact-email"
									name="email"
									type="email"
									required
									autoComplete="email"
									className={inputClass}
									placeholder="you@company.com"
								/>
							</div>
							<div>
								<label htmlFor="contact-message" className="mb-2 block font-bold">
									Message
								</label>
								<textarea
									id="contact-message"
									name="message"
									required
									rows={5}
									className={inputClass}
									placeholder="Tell me about the role or project"
								/>
							</div>
							<button
								type="submit"
								disabled={status === "sending"}
								className="w-full rounded-full border-2 border-foreground bg-primary px-6 py-3.5 font-display text-lg font-extrabold text-[#1a1423] shadow-[4px_4px_0_var(--foreground)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--foreground)] disabled:cursor-wait disabled:opacity-70"
							>
								{status === "sending" ? "Sending…" : "Send message →"}
							</button>
							{status === "error" && (
								<p role="alert" className="font-semibold text-primary-ink">
									Something went wrong. Please try again, or email me
									directly.
								</p>
							)}
						</form>
					)}
				</Reveal>
			</div>
		</section>
	);
}
