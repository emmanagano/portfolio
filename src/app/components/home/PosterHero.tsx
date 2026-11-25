import { hero } from "@/data/home";

const stack =
	"absolute inset-0 flex flex-col items-center justify-center whitespace-nowrap text-[19vw] font-black uppercase leading-[0.8] tracking-[-0.07em]";

// LOOP-style poster: stacked giant words (the first two as faint ghost type),
// Emma's photo centered on top, and two heavy side labels on the middle line.
// The letters hidden behind the photo are traced over it as a faint hairline.
export default function PosterHero() {
	const [first, second, last] = hero.words;
	const side =
		"absolute top-1/2 max-w-[16vw] -translate-y-1/2 text-[clamp(16px,1.9vw,30px)] font-black uppercase leading-[0.95] tracking-[-0.03em]";

	return (
		<section aria-label="Intro" className="relative h-[60vw] min-h-[560px] overflow-hidden">
			<h1 className="sr-only">Emma Nagano: I design, write and code websites.</h1>
			<div aria-hidden="true" className={stack}>
				<span className="text-ghost">{first}</span>
				<span className="text-ghost">{second}</span>
				<span className="text-ink">
					{last}
					<span className="text-red">.</span>
				</span>
			</div>
			<img
				src={hero.photo.src}
				alt={hero.photo.alt}
				className="absolute left-1/2 top-1/2 block aspect-[3/4] w-[27vw] min-w-[200px] -translate-x-1/2 -translate-y-1/2 object-cover object-[50%_30%]"
			/>
			{/* Hairline trace of the hidden letters, clipped to the photo. */}
			<div aria-hidden="true" className={`${stack} hero-trace pointer-events-none`}>
				<span>{first}</span>
				<span>{second}</span>
				<span>{last}.</span>
			</div>
			<p className={`${side} left-6 m-0`}>
				{hero.left.map((line) => (
					<span key={line} className="block">
						{line}
					</span>
				))}
			</p>
			<p className={`${side} right-6 m-0 text-right`}>
				{hero.right.map((line) => (
					<span key={line} className="block">
						{line}
					</span>
				))}
			</p>
			<div aria-hidden="true" className="absolute inset-x-6 bottom-7 text-[11px] font-medium tracking-[0.08em] text-taupe">
				<div className="mb-[22px] flex items-end justify-end gap-3 leading-none">
					<span>{hero.ruler.start}</span>
					<span className="flex items-end gap-[7px]">
						{Array.from({ length: 10 }, (_, i) => (
							<i key={i} className={`block w-px bg-taupe ${i === 5 ? "h-4" : "h-2"}`} />
						))}
					</span>
					<span>{hero.ruler.end}</span>
				</div>
				<div className="flex justify-between text-sm leading-none">
					<span>+</span>
					<span>+</span>
					<span>+</span>
					<span>+</span>
				</div>
			</div>
		</section>
	);
}
