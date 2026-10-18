import React from "react";
import ExperienceItem from "../ui/ExperienceItem";

export default function Experience() {
	const jobs = [
		{
			date: "2025 - Present",
			title: "Freelance Web Developer",
			description:
				"Designed, developed, and deployed a full blog platform using modern web development practices. Managed the project end-to-end: planning, development, testing, deployment, and performance optimization.",
			skills: [
				"React",
				"Next.js",
				"Tailwind CSS",
				"SEO",
				"Google Analytics",
			],
		},
		{
			date: "2024 — 2025",
			title: "Web Support Specialist",
			company: "ollyolly.com",
			description:
				"Provided technical support and troubleshooting for client websites. Managed site launches, including DNS configuration, migrations, and go-live processes. Collaborated in an Agile/Scrum environment using Jira.",
			skills: ["WordPress", "HTML/CSS", "DNS Management", "Agile/Scrum"],
		},
		{
			date: "2021 — 2022",
			title: "Full-Stack Web Development Program",
			company: "UNF Coding Bootcamp",
			description:
				"Completed an intensive 6-month part-time program focused on full-stack JavaScript. Gained hands-on experience building responsive front-end interfaces and robust back-end APIs, culminating in a comprehensive e-commerce capstone project.",
			skills: ["JavaScript", "React", "Node.js", "PostgreSQL", "Express"],
		},
	];

	return (
		<section
			id="experience"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
		>
			<h2 className="text-sm font-bold uppercase tracking-widest opacity-80 lg:hidden mb-6">
				Experience
			</h2>

			<ol className="group/list">
				{jobs.map((job, index) => (
					<ExperienceItem
						key={index}
						date={job.date}
						title={job.title}
						company={job.company}
						description={job.description}
						skills={job.skills}
					/>
				))}
			</ol>

			{/* The Resume Link! */}
			<div className="mt-12">
				<a
					href="/Emma Nagano's Resume _ Web Dev.pdf"
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors group/resume"
				>
					View Full Résumé
					<svg
						className="w-4 h-4 transition-transform group-hover/resume:-translate-y-1 group-hover/resume:translate-x-1"
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
			</div>
		</section>
	);
}
