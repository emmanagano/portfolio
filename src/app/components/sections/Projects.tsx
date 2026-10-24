import React from "react";
import ProjectItem from "../ui/ProjectItem";

export default function Projects() {
	const projects = [
		{
			title: "Markdown-Based Blog Platform",
			description:
				"A custom blog built from scratch that generates articles directly from Markdown files. It includes category filtering, clean page routing, and a responsive design with built-in analytics to track traffic.",
			imagePath: "/images/demo-project.png",
			link: "https://philippinestrategies.netlify.app",
			techStack: ["Next.js", "Markdown", "SEO", "Google Analytics"],
			inProgress: false,
		},
		{
			title: "Media Production & Photography Portfolio",
			description:
				"A sleek, magazine-style portfolio for a creative studio. I focused heavily on clean typography, smooth scroll animations, and using advanced CSS grids to properly showcase their high-resolution photography and video work.",
			imagePath: "/images/dan-portfolio.png",
			link: "https://jdgallery.netlify.app/",
			techStack: ["Astro", "TypeScript", "Tailwind CSS"],
			inProgress: true,
		},
		{
			title: "Boutique Jewelry E-Commerce",
			description:
				"A fast, modern frontend for a fine jewelry brand. The main goal here is creating a premium shopping experience, featuring clean product galleries and a slide-out shopping cart that updates instantly without reloading the page.",
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
