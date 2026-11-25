"use client";

import { useEffect, useRef, useState } from "react";
import { photoWord } from "@/data/home";

const BEAT = 430; // ms; a new photo every two beats, as hard cuts
const word =
	"m-0 whitespace-nowrap text-center text-[21.5vw] font-black uppercase leading-[0.82] tracking-[-0.065em]";

// About: a giant word filled with Emma's photos (background-clip: text). The
// photos are scaled to the letter height and repeat like a film strip; a flat
// red copy sits behind as an offset shadow. Hovering freezes the cycle.
export default function PhotoWord() {
	const [index, setIndex] = useState(0);
	const timer = useRef<ReturnType<typeof setInterval> | null>(null);
	const reduce = useRef(false);

	const start = () => {
		if (reduce.current || timer.current) return;
		timer.current = setInterval(() => setIndex((i) => (i + 1) % photoWord.photos.length), BEAT * 2);
	};
	const stop = () => {
		if (timer.current) clearInterval(timer.current);
		timer.current = null;
	};

	useEffect(() => {
		reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		photoWord.photos.forEach((src) => {
			const img = new Image();
			img.src = src;
		});
		start();
		return stop;
	}, []);

	return (
		<section id="about" aria-label="About" className="overflow-hidden px-6 pt-[22vh]">
			<div onMouseEnter={stop} onMouseLeave={start} className="relative cursor-default">
				<p aria-hidden="true" className={`${word} absolute inset-0 translate-x-[0.9vw] translate-y-[0.9vw] text-red`}>
					{photoWord.word}
				</p>
				<h2
					aria-label={photoWord.label}
					style={{ backgroundImage: `url(${photoWord.photos[index]})` }}
					className={`${word} relative bg-ink bg-[length:auto_100%] bg-center bg-repeat-x bg-clip-text text-transparent`}
				>
					{photoWord.word}
				</h2>
			</div>
		</section>
	);
}
