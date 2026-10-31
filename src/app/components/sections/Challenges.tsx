import Link from "next/link";
import { challenges } from "@/data/challenges";
import Reveal from "../motion/Reveal";
import ChallengeCard from "../ui/ChallengeCard";
import SectionHeading from "../ui/SectionHeading";

export default function Challenges() {
	return (
		<section id="challenges" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
			<SectionHeading
				eyebrow="Code challenges"
				title={
					<>
						Practice, with a <span className="text-primary-ink">twist</span>
					</>
				}
				intro="I take frontend challenges and add something of my own to each one. They're small, single-page builds."
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
					All challenges
				</Link>
			</Reveal>
		</section>
	);
}
