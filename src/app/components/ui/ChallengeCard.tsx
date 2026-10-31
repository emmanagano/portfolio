import Link from "next/link";
import type { Challenge } from "@/data/challenges";
import ArrowIcon from "./ArrowIcon";
import Tag from "./Tag";

export default function ChallengeCard({ challenge }: { challenge: Challenge }) {
	return (
		<article className="group relative flex h-full flex-col gap-4 rounded-3xl border-2 border-foreground bg-surface p-6 shadow-[6px_6px_0_var(--foreground)] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--primary)]">
			<div className="flex items-center justify-between gap-3">
				<span
					className={`rounded-full border-2 border-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#1a1423] ${challenge.accent}`}
				>
					{challenge.difficulty}
				</span>
				<span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
					Code challenge
				</span>
			</div>
			<h3 className="font-display text-2xl font-extrabold sm:text-3xl">
				{/* Stretched link: the whole card is clickable. Standalone pages use a plain <a>. */}
				{challenge.href ? (
					<a
						href={challenge.href}
						className="after:absolute after:inset-0 after:content-['']"
					>
						{challenge.title}
					</a>
				) : (
					<Link
						href={`/challenges/${challenge.slug}`}
						className="after:absolute after:inset-0 after:content-['']"
					>
						{challenge.title}
					</Link>
				)}
			</h3>
			<p className="leading-relaxed text-muted">{challenge.summary}</p>
			<p className="rounded-2xl border border-line bg-hover p-4 text-sm leading-relaxed">
				<span className="font-mono text-xs font-bold uppercase tracking-widest text-primary-ink">
					My twist
				</span>
				<br />
				{challenge.twist}
			</p>
			<ul className="mt-auto flex flex-wrap gap-2" aria-label="Tech stack">
				{challenge.stack.map((t) => (
					<Tag key={t}>{t}</Tag>
				))}
			</ul>
			<span className="inline-flex items-center gap-2 font-bold">
				Play it
				<ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
			</span>
		</article>
	);
}
