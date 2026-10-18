import React from "react";
import ProjectItem from "../ui/ProjectItem";

export default function Projects() {
	const projects = [
		{
			title: "Markdown-Based Blog Platform",
			description:
				"Built a custom blog system that loads article content from markdown files. Implemented category filtering, dynamic routing, and responsive layouts with integrated analytics.",
			imagePath: "/images/demo-project.png",
			link: "https://emmanagano.com/blogs",
			techStack: ["Next.js", "Markdown", "SEO", "Google Analytics"],
			inProgress: false,
		},
		{
			title: "Creative Director Portfolio",
			description:
				"Developing a minimalist, editorial-style portfolio for a creative director. Designed around a robust component architecture focusing on advanced CSS grid layouts, semantic structure, and custom design tokens.",
			imagePath: "/images/dan-portfolio.png",
			link: "https://jdgallery.netlify.app/",
			techStack: ["Astro", "TypeScript", "Tailwind CSS"],
			inProgress: true,
		},
		{
			title: "Boutique Jewelry E-Commerce",
			description:
				"Architecting a modern, front-end-focused mock fine jewelry store. Features a luxury minimalist aesthetic, high-resolution product galleries, and an interactive slide-over cart drawer powered by global state management.",
			imagePath: "", // Leaving this empty triggers the "Coming Soon" box!
			link: "#",
			techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
			inProgress: true,
		},
	];

	return (
		<section
			id="projects"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
		>
			<h2 className="text-sm font-bold uppercase tracking-widest opacity-80 lg:hidden mb-6">
				Projects
			</h2>
			<ol className="group/list">
				{projects.map((project, index) => (
					<ProjectItem
						key={index}
						title={project.title}
						description={project.description}
						imagePath={project.imagePath}
						link={project.link}
						techStack={project.techStack}
						inProgress={project.inProgress}
					/>
				))}
			</ol>
		</section>
	);
}
