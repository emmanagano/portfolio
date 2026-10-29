import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/motion/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
	title: "About",
	description:
		"Frontend developer in the Philippines. Former pilot trainee, bootcamp grad, and builder of fast, good-looking websites.",
};

const facts = [
	{ label: "Based in", value: "Pampanga, Philippines" },
	{ label: "I build with", value: "Next.js, React, TypeScript, Tailwind CSS, Astro" },
	{ label: "Experience", value: "Freelance web developer · Web Support Specialist at ollyolly.com" },
	{ label: "Trained at", value: "UNF Coding Bootcamp (full-stack JavaScript)" },
	{ label: "Looking for", value: "A frontend developer role" },
];

const path = [
	{ year: "Before code", emoji: "✈️", title: "Pilot training, USA", text: "Made it halfway. Then money and the pandemic grounded me." },
	{ year: "2021–2022", emoji: "🎓", title: "Coding bootcamp", text: "Full-stack JavaScript. Capstone: an e-commerce site." },
	{ year: "2024–2025", emoji: "🛠️", title: "Web Support Specialist", text: "Site launches, DNS, migrations, and fixes for a U.S. agency." },
	{ year: "2025–now", emoji: "💻", title: "Freelance developer", text: "Designing and shipping client sites end to end." },
];

const strengths = [
	{ title: "I design", text: "Layout, color, and type come first, so what I ship looks intentional.", color: "bg-sun" },
	{ title: "I write", text: "Clear copy and clear code. Both should be easy to read.", color: "bg-primary" },
	{ title: "I don't quit", text: "I rebuilt my career from zero once. Hard bugs don't scare me.", color: "bg-lilac" },
];

const photos = [
	{ src: "/images/about/in-my-pilot-uniform.png", alt: "Emma in her pilot uniform", rotate: "-rotate-3" },
	{ src: "/images/about/flying-me-in-the-plane.png", alt: "Emma flying a small plane during flight training", rotate: "rotate-2" },
	{ src: "/images/about/in-class-coding-bootcamp.png", alt: "Emma in class at the coding bootcamp", rotate: "-rotate-1" },
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
						From the cockpit to the{" "}
						<span className="text-primary-ink">codebase</span>.
					</h1>
					<p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">
						I&apos;m Emma, a frontend developer in the Philippines. I
						trained as a pilot, switched to code, and now design and
						build fast, polished websites from first sketch to launch.
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
				<ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{path.map((step, i) => (
						<Reveal as="li" key={step.title} delay={i * 0.08} className="relative rounded-2xl border-2 border-foreground bg-surface p-5">
							<span aria-hidden="true" className="text-3xl">{step.emoji}</span>
							<p className="mt-3 font-mono text-xs font-bold uppercase tracking-widest text-muted">{step.year}</p>
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

			{/* Optional depth for anyone who wants it */}
			<Reveal className="mt-20">
				<details className="group rounded-3xl border-2 border-foreground bg-surface p-6 sm:p-8">
					<summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-2xl font-extrabold [&::-webkit-details-marker]:hidden">
						The longer story
						<span aria-hidden="true" className="text-3xl transition-transform group-open:rotate-45">+</span>
					</summary>
					<div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
						<p>
							I moved to the States at 19 to become a pilot. Halfway
							through training, financial problems and the pandemic
							ended that plan. I had no backup.
						</p>
						<p>
							Coding gave me a way forward. It had everything flying
							didn&apos;t: room for error, creativity, and flow. I finished
							a full-stack bootcamp, then learned the hard way that a
							certificate isn&apos;t a job. On a student visa I couldn&apos;t
							work in the U.S., so I came home to the Philippines and
							started over.
						</p>
						<p>
							My first tech job was web support for a U.S. digital
							marketing agency: launches, DNS, migrations, and a lot of
							troubleshooting. Then a client hired me to build their
							blog, with full control over the layout and design, and
							I&apos;ve been freelancing since.
						</p>
						<div className="aspect-video overflow-hidden rounded-2xl border-2 border-foreground">
							<iframe
								src="https://www.youtube-nocookie.com/embed/JYvZPA22zwE"
								title="Emma Nagano's Intro"
								loading="lazy"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="h-full w-full"
							></iframe>
						</div>
					</div>
				</details>
			</Reveal>

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
