"use client";
import { useEffect, useState } from "react";

export default function FunAnimation() {
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [viewport, setViewport] = useState({ w: 0, h: 0 });

	// Track mouse
	useEffect(() => {
		const handleMove = (e: MouseEvent) => {
			setPos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMove);
		return () => window.removeEventListener("mousemove", handleMove);
	}, []);

	// Read window size ONLY on client
	useEffect(() => {
		const updateSize = () => {
			setViewport({
				w: window.innerWidth,
				h: window.innerHeight,
			});
		};
		updateSize(); // run once
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	// Avoid using window before it's ready
	const offsetX = viewport.w === 0 ? 0 : (pos.x / viewport.w - 0.5) * 20;
	const offsetY = viewport.h === 0 ? 0 : (pos.y / viewport.h - 0.5) * 20;

	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="flex gap-4">
				{[0, 1].map((eye) => (
					<div
						key={eye}
						className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md"
					>
						<div
							className="relative w-6 h-6 bg-black rounded-full transition-transform"
							style={{
								transform: `translate(${offsetX}px, ${offsetY}px)`,
							}}
						>
							<div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-90"></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
