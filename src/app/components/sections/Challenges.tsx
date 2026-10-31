import Link from "next/link";
import { challenges } from "@/data/challenges";
import Reveal from "../motion/Reveal";
import ChallengeCard from "../ui/ChallengeCard";
import SectionHeading from "../ui/SectionHeading";

export default function Challenges() {
	return (
		<section id="challenges" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
			<SectionHeading
				eyebrow="Side projects"
				title={
					<>
						Mini projects, just for <span className="text-primary-ink">fun</span>
					</>
				}
				intro="Small builds I make for practice and for the fun of it, usually from frontend challenge briefs. Each one is a single page."
			/>
			<ul className="grid gap-8 md:grid-cols-2">
				{challenges.map((c, i) => (
					<li key={c.slug}>
						<Reveal delay={i * 0.08} className="h-full">
							<ChallengeCard challenge={c} />
						</Reveal>
					</li>
				))}
			</ul>
			<Reveal className="mt-10">
				<Link
					href="/challenges"
					className="inline-block rounded-full border-2 border-foreground px-6 py-3 font-bold transition-all hover:-translate-y-0.5 hover:bg-lilac hover:text-[#1a1423]"
				>
					All mini projects
				</Link>
			</Reveal>
		</section>
	);
}
