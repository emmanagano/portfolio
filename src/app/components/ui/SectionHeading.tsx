import Reveal from "../motion/Reveal";

type SectionHeadingProps = {
	eyebrow: string;
	title: React.ReactNode;
	intro?: string;
};

export default function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
	return (
		<Reveal className="mb-12 max-w-3xl">
			<p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-muted">
				<span className="text-primary-ink" aria-hidden="true">✦</span> {eyebrow}
			</p>
			<h2 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
				{title}
			</h2>
			{intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
		</Reveal>
	);
}
