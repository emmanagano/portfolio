import Link from "next/link";
import Reveal from "../motion/Reveal";
import ArrowIcon from "../ui/ArrowIcon";

const facts = [
	{ emoji: "✈️", text: "Trained as a pilot before I wrote my first line of code" },
	{ emoji: "🎓", text: "UNF full-stack coding bootcamp graduate (PERN stack)" },
	{ emoji: "✍️", text: "I love writing as much as I love building" },
];

export default function AboutTeaser() {
	return (
		<section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
			<Reveal className="grid items-center gap-10 rounded-[2rem] border-2 border-foreground bg-lilac p-8 text-[#1a1423] shadow-[8px_8px_0_var(--foreground)] sm:p-12 md:grid-cols-[1.2fr_1fr]">
				<div>
					<p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest">
						✦ About me
					</p>
					<h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
						From the cockpit to the codebase.
					</h2>
					<p className="mt-5 max-w-xl text-lg leading-relaxed">
						Designing + writing + coding = web developer. Coding gave me
						a way forward when my plans changed, and I&apos;ve been
						building ever since.
					</p>
					<Link
						href="/about"
						className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 border-[#1a1423] bg-[#fbf7f0] px-6 py-3 font-bold transition-all hover:-translate-y-0.5 hover:bg-sun"
					>
						Read my story
						<ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</Link>
				</div>
				<ul className="space-y-4">
					{facts.map((f, i) => (
						<li
							key={f.text}
							className={`flex items-start gap-3 rounded-2xl border-2 border-[#1a1423] bg-[#fbf7f0] p-4 font-semibold ${["-rotate-1", "rotate-1", "-rotate-[0.5deg]"][i]}`}
						>
							<span aria-hidden="true" className="text-2xl">
								{f.emoji}
							</span>
							{f.text}
						</li>
					))}
				</ul>
			</Reveal>
		</section>
	);
}
