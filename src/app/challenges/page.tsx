import type { Metadata } from "next";
import { challenges } from "@/data/challenges";
import Reveal from "../components/motion/Reveal";
import ChallengeCard from "../components/ui/ChallengeCard";

export const metadata: Metadata = {
	title: "Code challenges",
	description:
		"Small frontend mini projects I build for practice and for fun, usually from challenge briefs.",
};

export default function ChallengesPage() {
	return (
		<div className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 md:pt-16">
			<header className="mb-12 max-w-3xl">
				<p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-muted">
					<span className="text-primary-ink" aria-hidden="true">✦</span> Side projects
				</p>
				<h1 className="font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl">
					Mini projects, just for <span className="text-primary-ink">fun</span>.
				</h1>
				<p className="mt-6 text-xl leading-relaxed text-muted">
					Little builds I make to practice and have fun, usually from
					frontend challenge briefs. Nothing serious, just things I wanted
					to try.
				</p>
			</header>
			<ul className="grid gap-8 md:grid-cols-2">
				{challenges.map((c, i) => (
					<li key={c.slug}>
						<Reveal delay={i * 0.08} className="h-full">
							<ChallengeCard challenge={c} />
						</Reveal>
					</li>
				))}
			</ul>
		</div>
	);
}
