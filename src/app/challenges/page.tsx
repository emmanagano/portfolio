import type { Metadata } from "next";
import { challenges } from "@/data/challenges";
import Reveal from "../components/motion/Reveal";
import ChallengeCard from "../components/ui/ChallengeCard";

export const metadata: Metadata = {
	title: "Code challenges",
	description:
		"Frontend challenges I rebuild with a twist of my own. Each one is a small, single-page build.",
};

export default function ChallengesPage() {
	return (
		<div className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 md:pt-16">
			<header className="mb-12 max-w-3xl">
				<p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-muted">
					<span className="text-primary-ink" aria-hidden="true">✦</span> Code challenges
				</p>
				<h1 className="font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl">
					Practice, with a <span className="text-primary-ink">twist</span>.
				</h1>
				<p className="mt-6 text-xl leading-relaxed text-muted">
					I pick up frontend challenges and push each one past the brief.
					Small builds are single pages here; a bigger one may become its
					own site.
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
