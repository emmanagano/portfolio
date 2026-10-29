"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { Project } from "@/data/projects";
import ArrowIcon from "./ArrowIcon";
import Tag from "./Tag";

export default function ProjectCard({
	project,
	featured = false,
}: {
	project: Project;
	featured?: boolean;
}) {
	const reduceMotion = useReducedMotion();
	const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
	const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

	const onMove = (e: React.MouseEvent<HTMLElement>) => {
		if (reduceMotion) return;
		const r = e.currentTarget.getBoundingClientRect();
		rotateY.set(((e.clientX - r.left) / r.width - 0.5) * 8);
		rotateX.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
	};
	const onLeave = () => {
		rotateX.set(0);
		rotateY.set(0);
	};

	return (
		<motion.article
			onMouseMove={onMove}
			onMouseLeave={onLeave}
			style={{ rotateX, rotateY, transformPerspective: 1000 }}
			className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-surface shadow-[6px_6px_0_var(--foreground)] transition-shadow hover:shadow-[10px_10px_0_var(--primary)]"
		>
			<div
				className={`relative overflow-hidden border-b-2 border-foreground bg-sun/40 ${featured ? "aspect-[16/8]" : "aspect-[16/10]"}`}
			>
				{project.image ? (
					<img
						src={project.image}
						alt={`Screenshot of ${project.title}`}
						loading="lazy"
						className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center font-display text-2xl font-extrabold text-[#1a1423]/60">
						Coming soon ✨
					</div>
				)}
				{project.status === "in-progress" && (
					<span className="absolute right-4 top-4 rotate-3 rounded-full border-2 border-foreground bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1a1423]">
						In progress
					</span>
				)}
			</div>

			<div className="flex flex-1 flex-col gap-4 p-6">
				<h3 className="font-display text-2xl font-extrabold sm:text-3xl">
					{/* Stretched link: the whole card is clickable */}
					<Link
						href={`/projects/${project.slug}`}
						className="after:absolute after:inset-0 after:content-['']"
					>
						{project.title}
					</Link>
				</h3>
				<p className="leading-relaxed text-muted">{project.summary}</p>
				<ul className="mt-auto flex flex-wrap gap-2" aria-label="Tech stack">
					{project.stack.map((t) => (
						<Tag key={t}>{t}</Tag>
					))}
				</ul>
				<span className="inline-flex items-center gap-2 font-bold">
					Read case study
					<ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
				</span>
			</div>
		</motion.article>
	);
}
