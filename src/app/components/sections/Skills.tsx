import { skills } from "@/data/skills";

function SkillRow({ hidden = false }: { hidden?: boolean }) {
	return (
		<ul
			className={`flex shrink-0 gap-4 pr-4 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-4 ${hidden ? "motion-reduce:hidden" : ""}`}
			aria-hidden={hidden || undefined}
		>
			{skills.map((s, i) => (
				<li
					key={s.name}
					className={`flex shrink-0 items-center gap-3 rounded-2xl border-2 border-foreground bg-surface px-5 py-3 font-display text-lg font-bold ${i % 2 ? "rotate-1" : "-rotate-1"}`}
				>
					<img src={s.icon} alt="" className="h-7 w-7 object-contain" loading="lazy" />
					{s.name}
				</li>
			))}
		</ul>
	);
}

export default function Skills() {
	return (
		<section id="skills" aria-labelledby="skills-heading" className="py-16">
			<h2 id="skills-heading" className="sr-only">
				Skills and tools
			</h2>
			<div className="-rotate-1 border-y-2 border-foreground bg-sun py-6">
				<div className="group flex overflow-hidden motion-reduce:[mask-image:none] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
					<div className="flex animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
						<SkillRow />
						<SkillRow hidden />
					</div>
				</div>
			</div>
		</section>
	);
}
