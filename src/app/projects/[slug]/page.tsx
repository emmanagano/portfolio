import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import Reveal from "../../components/motion/Reveal";
import ArrowIcon from "../../components/ui/ArrowIcon";
import Tag from "../../components/ui/Tag";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
	return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const project = getProject((await params).slug);
	if (!project) return {};
	return {
		title: project.title,
		description: project.summary,
		openGraph: {
			title: project.title,
			description: project.summary,
			images: project.image ? [project.image] : undefined,
		},
	};
}

const story = [
	{ key: "problem", label: "The problem", color: "bg-primary" },
	{ key: "approach", label: "My approach", color: "bg-sun" },
	{ key: "outcome", label: "The outcome", color: "bg-lilac" },
] as const;

export default async function ProjectPage({ params }: Props) {
	const project = getProject((await params).slug);
	if (!project) notFound();

	const index = projects.indexOf(project);
	const next = projects[(index + 1) % projects.length];

	return (
		<article className="mx-auto max-w-5xl px-4 pb-10 pt-12 sm:px-6 md:pt-16">
			<Link
				href="/#work"
				className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-muted transition-colors hover:bg-hover hover:text-foreground"
			>
				← All projects
			</Link>

			<header className="mt-6">
				{project.status === "in-progress" && (
					<p className="mb-4 inline-block -rotate-2 rounded-full border-2 border-foreground bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1a1423]">
						Work in progress
					</p>
				)}
				<h1 className="font-display text-4xl font-extrabold leading-[1.02] sm:text-6xl">
					{project.title}
				</h1>
				<p className="mt-5 max-w-3xl text-xl leading-relaxed text-muted">
					{project.summary}
				</p>
			</header>

			<dl className="mt-10 grid gap-6 rounded-3xl border-2 border-foreground bg-surface p-6 sm:grid-cols-3">
				<div>
					<dt className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
						Role
					</dt>
					<dd className="mt-2 font-semibold">{project.role}</dd>
				</div>
				<div>
					<dt className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
						Stack
					</dt>
					<dd className="mt-2">
						<ul className="flex flex-wrap gap-2">
							{project.stack.map((t) => (
								<Tag key={t}>{t}</Tag>
							))}
						</ul>
					</dd>
				</div>
				<div>
					<dt className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
						Links
					</dt>
					<dd className="mt-2 flex flex-wrap gap-3">
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noreferrer"
							className="group inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-primary px-4 py-1.5 text-sm font-bold text-[#1a1423] transition-transform hover:-translate-y-0.5"
						>
							Visit site
							<ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</a>
						{project.repoUrl && (
							<a
								href={project.repoUrl}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground px-4 py-1.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
							>
								Code
								<ArrowIcon className="h-3.5 w-3.5" />
							</a>
						)}
					</dd>
				</div>
			</dl>

			{project.image && (
				<Reveal className="mt-12 overflow-hidden rounded-3xl border-2 border-foreground shadow-[8px_8px_0_var(--foreground)]">
					<img
						src={project.image}
						alt={`Screenshot of ${project.title}`}
						className="w-full"
					/>
				</Reveal>
			)}

			<div className="mt-16 space-y-14">
				{story.slice(0, 2).map((s) => (
					<StoryBlock key={s.key} label={s.label} color={s.color}>
						<p>{project[s.key]}</p>
					</StoryBlock>
				))}

				<StoryBlock label="Highlights" color="bg-accent">
					<ul className="grid gap-3 sm:grid-cols-2">
						{project.highlights.map((h) => (
							<li
								key={h}
								className="flex gap-3 rounded-2xl border border-line bg-surface p-4 text-base"
							>
								<span aria-hidden="true" className="text-primary-ink">
									✦
								</span>
								{h}
							</li>
						))}
					</ul>
				</StoryBlock>

				<StoryBlock label={story[2].label} color={story[2].color}>
					<p>{project.outcome}</p>
				</StoryBlock>
			</div>

			{project.gallery.length > 1 && (
				<ul className={`mt-16 grid gap-6 ${project.gallery.length > 2 ? "sm:grid-cols-2" : ""}`}>
					{project.gallery.slice(1).map((g) => (
						<li key={g.src}>
							<img
								src={g.src}
								alt={g.alt}
								loading="lazy"
								className="w-full rounded-2xl border-2 border-foreground shadow-[8px_8px_0_var(--foreground)]"
							/>
						</li>
					))}
				</ul>
			)}

			{next !== project && (
				<Link
					href={`/projects/${next.slug}`}
					className="group mt-24 flex items-center justify-between gap-6 rounded-3xl border-2 border-foreground bg-sun p-8 text-[#1a1423] shadow-[6px_6px_0_var(--foreground)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--foreground)]"
				>
					<span>
						<span className="block font-mono text-xs font-bold uppercase tracking-widest">
							Next project
						</span>
						<span className="mt-2 block font-display text-2xl font-extrabold sm:text-4xl">
							{next.title}
						</span>
					</span>
					<ArrowIcon className="h-10 w-10 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
				</Link>
			)}
		</article>
	);
}

function StoryBlock({
	label,
	color,
	children,
}: {
	label: string;
	color: string;
	children: React.ReactNode;
}) {
	return (
		<Reveal as="section" className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-10">
			<h2 className="flex items-center gap-3 font-display text-2xl font-extrabold">
				<span aria-hidden="true" className={`h-4 w-4 rotate-45 border-2 border-foreground ${color}`} />
				{label}
			</h2>
			<div className="text-lg leading-relaxed text-muted">{children}</div>
		</Reveal>
	);
}
