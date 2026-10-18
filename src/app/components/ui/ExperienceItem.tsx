import React from "react";

type ExperienceItemProps = {
	date: string;
	title: string;
	company?: string;
	companyUrl?: string;
	description: string;
	skills: string[];
};

export default function ExperienceItem({
	date,
	title,
	company,
	companyUrl,
	description,
	skills,
}: ExperienceItemProps) {
	return (
		<li className="mb-12 group relative flex flex-col md:flex-row gap-4 md:gap-8 transition-all duration-300 p-4 md:p-6 -mx-4 md:-mx-6 rounded-2xl hover:bg-[var(--hover-bg)] hover:shadow-sm lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
			<header className="md:w-1/4 mt-1 shrink-0">
				<time className="text-xs font-semibold uppercase tracking-widest opacity-50">
					{date}
				</time>
			</header>

			<div className="md:w-3/4">
				<h3 className="font-medium text-lg text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
					{title}
					{company && (
						<span className="opacity-70">
							{" · "}
							{companyUrl ? (
								<a
									href={companyUrl}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-baseline gap-1 hover:text-[var(--primary)] transition-colors group/link"
								>
									{company}
									<svg
										className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
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
							) : (
								company
							)}
						</span>
					)}
				</h3>

				<p className="mt-2 text-sm leading-relaxed opacity-70 text-[var(--foreground)]">
					{description}
				</p>

				<ul className="mt-4 flex flex-wrap gap-2">
					{skills.map((skill) => (
						<li
							key={skill}
							className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]"
						>
							{skill}
						</li>
					))}
				</ul>
			</div>
		</li>
	);
}
