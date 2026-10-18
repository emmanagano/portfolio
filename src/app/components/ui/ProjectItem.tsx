import React from "react";

type ProjectItemProps = {
	title: string;
	description: string;
	imagePath?: string; // <-- Made this optional for the placeholder!
	link: string;
	techStack: string[];
	inProgress?: boolean;
};

export default function ProjectItem({
	title,
	description,
	imagePath,
	link,
	techStack,
	inProgress,
}: ProjectItemProps) {
	return (
		<li className="mb-12 group relative flex flex-col md:flex-row gap-4 md:gap-8 transition-all duration-300 p-4 md:p-6 -mx-4 md:-mx-6 rounded-2xl hover:bg-[var(--hover-bg)] hover:shadow-sm lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
			<div className="md:w-1/4 mt-1 shrink-0">
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					/* Added aspect-video and a soft background so the placeholder has a nice shape */
					className="block overflow-hidden rounded-lg border border-[var(--foreground)]/10 transition-all group-hover:border-[var(--primary)]/50 bg-[var(--foreground)]/5 aspect-[16/10]"
				>
					{imagePath ? (
						<img
							src={imagePath}
							alt={`Screenshot of ${title}`}
							className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
						/>
					) : (
						/* The "Coming Soon" Placeholder */
						<div className="w-full h-full flex items-center justify-center text-xs font-semibold uppercase tracking-widest opacity-40 text-[var(--foreground)]">
							Coming Soon
						</div>
					)}
				</a>
			</div>

			<div className="md:w-3/4">
				<h3 className="font-medium text-lg text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-baseline gap-2"
					>
						{title}
						<svg
							className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>
				</h3>

				{/* Moved the In Progress Badge underneath the title! */}
				{inProgress && (
					<div className="mt-1.5">
						<span className="inline-flex items-center rounded-full bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-500 uppercase tracking-widest border border-amber-400/20">
							In Progress
						</span>
					</div>
				)}

				<p className="mt-3 text-sm leading-relaxed opacity-70 text-[var(--foreground)]">
					{description}
				</p>

				<ul className="mt-4 flex flex-wrap gap-2">
					{techStack.map((tech) => (
						<li
							key={tech}
							className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]"
						>
							{tech}
						</li>
					))}
				</ul>
			</div>
		</li>
	);
}
