import { projects } from "@/data/projects";
import Reveal from "../motion/Reveal";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

export default function SelectedWork() {
	return (
		<section id="work" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
			<SectionHeading
				eyebrow="Selected work"
				title={
					<>
						Things I&apos;ve <span className="text-primary-ink">built</span>
					</>
				}
				intro="Client work, a showcase of the blogs I build, and a store I'm building right now. Each one has a short case study on how I approached it."
			/>
			<ul className="grid gap-8 md:grid-cols-2">
				{projects.map((project, i) => (
					<li key={project.slug} className={i === 0 ? "md:col-span-2" : ""}>
						<Reveal delay={i * 0.08} className="h-full">
							<ProjectCard project={project} featured={i === 0} />
						</Reveal>
					</li>
				))}
			</ul>
		</section>
	);
}
