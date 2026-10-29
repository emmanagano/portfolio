import type { Job } from "@/data/experience";
import ArrowIcon from "./ArrowIcon";
import Tag from "./Tag";

export default function ExperienceItem({
	date,
	title,
	company,
	companyUrl,
	description,
	skills,
}: Job) {
	return (
		<>
			{/* Timeline dot */}
			<span
				aria-hidden="true"
				className="absolute -left-[2.6rem] top-1.5 h-5 w-5 rounded-full border-2 border-foreground bg-background transition-colors group-hover:bg-primary sm:-left-[3.6rem]"
			/>
			<time className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
				{date}
			</time>
			<h3 className="mt-2 font-display text-2xl font-extrabold">
				{title}
				{company && (
					<span className="font-sans text-lg font-semibold text-muted">
						{" · "}
						{companyUrl ? (
							<a
								href={companyUrl}
								target="_blank"
								rel="noreferrer"
								className="group/link inline-flex items-baseline gap-1 underline decoration-primary decoration-2 underline-offset-4"
							>
								{company}
								<ArrowIcon className="h-3 w-3" />
							</a>
						) : (
							company
						)}
					</span>
				)}
			</h3>
			<p className="mt-3 max-w-3xl leading-relaxed text-muted">{description}</p>
			<ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills used">
				{skills.map((skill) => (
					<Tag key={skill}>{skill}</Tag>
				))}
			</ul>
		</>
	);
}
