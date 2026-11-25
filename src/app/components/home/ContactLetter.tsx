"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";
const topics = ["a role", "a project", "just saying hi"] as const;
type Topic = (typeof topics)[number];

const blank =
	"blank mx-[0.1em] rounded-none border-0 border-b-[3px] border-ink bg-transparent px-[0.1em] font-black tracking-[-0.02em] text-ink outline-offset-4";

// Red contact block: a vertical SAY HI. and a fill-in-the-blank letter.
// EmailJS still receives the template's `name`, `email` and `message` fields;
// `message` is composed from the company and topic so the template is unchanged.
export default function ContactLetter() {
	const [status, setStatus] = useState<Status>("idle");
	const [topic, setTopic] = useState<Topic>("a role");
	const [company, setCompany] = useState("");

	// The badge dives off SAY HI once, when the section scrolls into view.
	const sectionRef = useRef<HTMLElement>(null);
	const [play, setPlay] = useState(false);
	useEffect(() => {
		const el = sectionRef.current;
		if (!el) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setPlay(true);
					io.disconnect();
				}
			},
			{ threshold: 0.5 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, []);

	const message = `Hi Emma, I'd love to talk about ${topic}.${company ? ` (From: ${company})` : ""}`;

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (new FormData(form).get("bot-field")) {
			form.reset();
			setStatus("success");
			return;
		}
		setStatus("sending");
		try {
			const { serviceId, templateId, publicKey } = site.emailjs;
			await emailjs.sendForm(serviceId, templateId, form, { publicKey });
			form.reset();
			setCompany("");
			setStatus("success");
		} catch (err) {
			const { status: code, text } = (err ?? {}) as { status?: number; text?: string };
			console.error(`Contact form failed to send: ${code} ${text ?? String(err)}`);
			setStatus("error");
		}
	};

	return (
		<section
			ref={sectionRef}
			id="contact"
			className="flex flex-wrap items-center justify-between gap-[6vw] bg-red px-[6vw] pb-[6vw] pt-[10vw] text-paper"
		>
			<h2 className="relative m-0 rotate-180 whitespace-nowrap text-[clamp(120px,15vw,240px)] font-black leading-[0.8] tracking-[-0.06em] text-ink [writing-mode:vertical-rl]">
				SAY HI
				<span className="relative text-transparent">
					.
					<svg
						aria-hidden="true"
						viewBox="0 0 120 120"
						className={`badge absolute left-1/2 top-1/2 h-[0.62em] w-[0.62em] overflow-visible ${play ? "play" : ""}`}
					>
						<defs>
							<path id="badge-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
						</defs>
						<g className="hop">
							<g className="spin">
								<circle cx="60" cy="60" r="58" fill="var(--paper)" />
								<circle cx="60" cy="60" r="9" fill="var(--red)" />
								<text className="fill-ink font-sans text-[12.5px] font-medium tracking-[1.55px]">
									<textPath href="#badge-ring">OPEN TO ROLES • OPEN TO ROLES • </textPath>
								</text>
							</g>
						</g>
					</svg>
				</span>
				<span className="sr-only [writing-mode:horizontal-tb]">Open to roles</span>
			</h2>

			{status === "success" ? (
				<div role="status" className="max-w-[640px] flex-[1_1_360px]">
					<p className="m-0 text-[clamp(24px,2.9vw,46px)] font-black leading-[1.2] tracking-[-0.03em] text-ink">
						Sent. Talk soon.
					</p>
					<button
						type="button"
						onClick={() => setStatus("idle")}
						className="mt-6 text-sm font-medium uppercase tracking-[0.08em] text-paper underline underline-offset-4"
					>
						Write another
					</button>
				</div>
			) : (
				<form
					name="contact"
					aria-label="Contact Emma"
					onSubmit={onSubmit}
					className="max-w-[640px] flex-[1_1_360px]"
				>
					<p className="hidden">
						<label>
							Don&apos;t fill this out: <input name="bot-field" />
						</label>
					</p>
					<input type="hidden" name="message" value={message} />
					<p className="m-0 text-[clamp(24px,2.9vw,46px)] font-medium leading-[1.6] tracking-[-0.02em] [&>span]:block [&>span]:whitespace-nowrap">
						<span>
							Hi Emma, I&apos;m{" "}
							<input name="name" required autoComplete="name" aria-label="Your name" placeholder="your name" className={`${blank} w-[6.5em]`} />
						</span>
						<span>
							from{" "}
							<input aria-label="Your company" placeholder="company" value={company} onChange={(e) => setCompany(e.target.value)} className={`${blank} w-[5.5em]`} />
						</span>
						<span>I&apos;d love to talk about</span>
						<span role="group" aria-label="Topic">
							{topics.map((t, i) => (
								<span key={t}>
									{i === 2 && <br />}
									{i === 2 && "or "}
									<button
										type="button"
										aria-pressed={topic === t}
										onClick={() => setTopic(t)}
										className={`cursor-pointer rounded-[0.2em] px-[0.25em] tracking-[-0.02em] ${topic === t ? "bg-ink font-black text-paper" : "bg-transparent text-paper underline decoration-dotted underline-offset-[6px]"}`}
									>
										{t}
									</button>
									{i === 0 ? ", " : i === 2 ? "." : ""}
								</span>
							))}
						</span>
						<span>
							Reach me at{" "}
							<input name="email" type="email" required autoComplete="email" aria-label="Your email" placeholder="you@email.com" className={`${blank} w-[8.5em]`} />
						</span>
					</p>
					<button
						type="submit"
						disabled={status === "sending"}
						className="mt-12 cursor-pointer rounded-full bg-ink px-9 pb-[18px] pt-4 font-serif text-[clamp(26px,2.6vw,40px)] italic leading-none text-paper disabled:cursor-wait disabled:opacity-70"
					>
						{status === "sending" ? "Sending…" : "Send it →"}
					</button>
					{status === "error" && (
						<p role="alert" className="mt-4 font-medium text-paper">
							That didn&apos;t send. Try again, or email {site.email}.
						</p>
					)}
				</form>
			)}
		</section>
	);
}
