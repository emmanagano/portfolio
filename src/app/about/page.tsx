import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/motion/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
	title: "About",
	description:
		"Frontend developer in the Philippines. Bootcamp grad, web support veteran, and builder of fast, good-looking websites.",
};

const facts = [
	{ label: "Based in", value: "Pampanga, Philippines" },
	{ label: "I build with", value: "Next.js, React, TypeScript, Tailwind CSS, Astro" },
	{ label: "Experience", value: "Freelance web developer · Web Support Specialist at ollyolly.com" },
	{ label: "Trained at", value: "UNF Coding Bootcamp (full-stack JavaScript)" },
	{ label: "Looking for", value: "A frontend developer role" },
];

const path = [
	{ year: "2021–2022", title: "Coding bootcamp", text: "Full-stack JavaScript. Capstone: an e-commerce site." },
	{ year: "2024–2025", title: "Web Support Specialist", text: "Site launches, DNS, migrations, and fixes for a U.S. agency." },
	{ year: "2025–now", title: "Freelance developer", text: "Designing and shipping client sites end to end." },
];

const strengths = [
	{ title: "I design", text: "Layout, color, and type come first, so what I ship looks intentional.", color: "bg-sun" },
	{ title: "I write", text: "Clear copy and clear code. Both should be easy to read.", color: "bg-primary" },
	{ title: "I don't quit", text: "I rebuilt my career from zero once. Hard bugs don't scare me.", color: "bg-lilac" },
];

const photos = [
	{ src: "/images/about/in-class-coding-bootcamp.png", alt: "Emma in class at the coding bootcamp", rotate: "-rotate-3" },
	{ src: "/images/about/i-got-the-job-olly.png", alt: "Job offer email for the Junior Web Support Specialist role at Olly Olly", rotate: "rotate-2" },
	{ src: "/images/about/meeting-at-work.png", alt: "Emma on a video call with her team at Olly Olly", rotate: "-rotate-1" },
];

export default function AboutPage() {
	return (
		<article className="mx-auto max-w-5xl px-4 pb-10 pt-12 sm:px-6 md:pt-16">
			{/* The 10-second version */}
			<header className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
				<div>
					<p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-muted">
						<span className="text-primary-ink" aria-hidden="true">✦</span> About me
					</p>
					<h1 className="font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl">
						A designer&apos;s eye in the{" "}
						<span className="text-primary-ink">codebase</span>.
					</h1>
					<p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">
						I&apos;m Emma, a frontend developer in the Philippines. I
						design and build fast, polished websites from first sketch
						to launch.
					</p>
				</div>
				<ul className="flex justify-center gap-0 md:justify-end" aria-label="Photos">
					{photos.map((p, i) => (
						<li
							key={p.src}
							className={`w-32 shrink-0 rounded-xl border-2 border-foreground bg-surface p-1.5 shadow-[4px_4px_0_var(--foreground)] transition-transform hover:z-10 hover:scale-110 hover:rotate-0 sm:w-40 ${p.rotate} ${i > 0 ? "-ml-8" : ""}`}
						>
							<img src={p.src} alt={p.alt} className="aspect-[4/5] w-full rounded-lg object-cover" />
						</li>
					))}
				</ul>
			</header>

			{/* Quick facts */}
			<Reveal className="mt-14">
				<dl className="grid overflow-hidden rounded-3xl border-2 border-foreground bg-surface sm:grid-cols-2 lg:grid-cols-5">
					{facts.map((f) => (
						<div key={f.label} className="border-b border-line p-5 last:border-b-0 sm:border-r lg:border-b-0 lg:last:border-r-0">
							<dt className="font-mono text-xs font-bold uppercase tracking-widest text-muted">{f.label}</dt>
							<dd className="mt-2 font-semibold leading-snug">{f.value}</dd>
						</div>
					))}
				</dl>
			</Reveal>

			{/* Path */}
			<section className="mt-20" aria-labelledby="path-heading">
				<Reveal>
					<h2 id="path-heading" className="font-display text-3xl font-extrabold sm:text-4xl">
						How I got here
					</h2>
				</Reveal>
				<ol className="mt-8 grid gap-4 md:grid-cols-3">
					{path.map((step, i) => (
						<Reveal as="li" key={step.title} delay={i * 0.08} className="relative rounded-2xl border-2 border-foreground bg-surface p-5">
							<p className="font-mono text-xs font-bold uppercase tracking-widest text-muted">{step.year}</p>
							<h3 className="mt-1 font-display text-xl font-extrabold">{step.title}</h3>
							<p className="mt-2 text-muted">{step.text}</p>
						</Reveal>
					))}
				</ol>
			</section>

			{/* What I bring */}
			<section className="mt-20" aria-labelledby="strengths-heading">
				<Reveal>
					<h2 id="strengths-heading" className="font-display text-3xl font-extrabold sm:text-4xl">
						What I bring
					</h2>
				</Reveal>
				<ul className="mt-8 grid gap-5 md:grid-cols-3">
					{strengths.map((s, i) => (
						<Reveal
							as="li"
							key={s.title}
							delay={i * 0.08}
							className={`rounded-2xl border-2 border-foreground p-6 text-[#1a1423] shadow-[6px_6px_0_var(--foreground)] ${s.color}`}
						>
							<h3 className="font-display text-2xl font-extrabold">{s.title}</h3>
							<p className="mt-2 font-medium">{s.text}</p>
						</Reveal>
					))}
				</ul>
			</section>

			<Reveal className="mt-14 flex flex-wrap gap-4">
				<Link
					href="/#work"
					className="rounded-full border-2 border-foreground bg-foreground px-6 py-3 font-bold text-background transition-transform hover:-translate-y-0.5"
				>
					See my work
				</Link>
				<a
					href={site.resumeUrl}
					target="_blank"
					rel="noreferrer"
					className="rounded-full border-2 border-foreground px-6 py-3 font-bold transition-all hover:-translate-y-0.5 hover:bg-sun hover:text-[#1a1423]"
				>
					Download résumé
				</a>
				<Link
					href="/#contact"
					className="rounded-full border-2 border-foreground px-6 py-3 font-bold transition-all hover:-translate-y-0.5 hover:bg-lilac hover:text-[#1a1423]"
				>
					Get in touch
				</Link>
			</Reveal>
		</article>
	);
}
