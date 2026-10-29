import { jobs } from "@/data/experience";
import { site } from "@/data/site";
import Reveal from "../motion/Reveal";
import SectionHeading from "../ui/SectionHeading";
import ExperienceItem from "../ui/ExperienceItem";
import ArrowIcon from "../ui/ArrowIcon";

export default function Experience() {
	return (
		<section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
			<SectionHeading
				eyebrow="Experience"
				title={
					<>
						Where I&apos;ve <span className="text-accent">worked</span> and learned
					</>
				}
			/>
			<ol className="relative space-y-10 border-l-2 border-dashed border-line pl-8 sm:pl-12">
				{jobs.map((job, i) => (
					<Reveal as="li" key={job.title} delay={i * 0.06} className="group relative">
						<ExperienceItem {...job} />
					</Reveal>
				))}
			</ol>
			<Reveal className="mt-12">
				<a
					href={site.resumeUrl}
					target="_blank"
					rel="noreferrer"
					className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 font-bold transition-all hover:-translate-y-0.5 hover:bg-foreground hover:text-background"
				>
					View full résumé
					<ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
				</a>
			</Reveal>
		</section>
	);
}
