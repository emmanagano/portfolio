"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

type Particle = {
	id: number;
	x: number;
	y: number;
	dx: number;
	dy: number;
	rotate: number;
	color: string;
	round: boolean;
	size: number;
};

const COLORS = ["var(--primary)", "var(--sun)", "var(--lilac)"];
const MAX_PARTICLES = 24;
const INTERACTIVE = "a, button, [role='button'], input, textarea, label, select";

export default function CursorEffect() {
	const [enabled, setEnabled] = useState(false);
	const [hovering, setHovering] = useState(false);
	const [visible, setVisible] = useState(false);
	const [particles, setParticles] = useState<Particle[]>([]);

	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.5 });
	const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.5 });

	const nextId = useRef(0);
	const last = useRef({ x: 0, y: 0, t: 0 });

	useEffect(() => {
		const fine = matchMedia("(hover: hover) and (pointer: fine)");
		const reduced = matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setEnabled(fine.matches && !reduced.matches);
		update();
		fine.addEventListener("change", update);
		reduced.addEventListener("change", update);
		return () => {
			fine.removeEventListener("change", update);
			reduced.removeEventListener("change", update);
		};
	}, []);

	useEffect(() => {
		if (!enabled) return;

		const spawn = (px: number, py: number, count: number, burst: boolean) => {
			const added: Particle[] = Array.from({ length: count }, () => {
				const angle = Math.random() * Math.PI * 2;
				const dist = burst ? 30 + Math.random() * 40 : 6 + Math.random() * 10;
				return {
					id: nextId.current++,
					x: px,
					y: py,
					dx: burst ? Math.cos(angle) * dist : (Math.random() - 0.5) * dist,
					dy: burst ? Math.sin(angle) * dist : 12 + Math.random() * 18,
					rotate: (Math.random() - 0.5) * 240,
					color: COLORS[Math.floor(Math.random() * COLORS.length)],
					round: Math.random() > 0.5,
					size: 5 + Math.random() * 5,
				};
			});
			setParticles((prev) => [...prev, ...added].slice(-MAX_PARTICLES));
		};

		const onMove = (e: PointerEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
			setVisible(true);
			setHovering(!!(e.target as Element | null)?.closest?.(INTERACTIVE));

			const now = performance.now();
			const moved = Math.hypot(e.clientX - last.current.x, e.clientY - last.current.y);
			if (now - last.current.t > 40 && moved > 24) {
				last.current = { x: e.clientX, y: e.clientY, t: now };
				spawn(e.clientX, e.clientY, 1, false);
			}
		};
		const onDown = (e: PointerEvent) => spawn(e.clientX, e.clientY, 8, true);
		const onLeave = () => setVisible(false);

		window.addEventListener("pointermove", onMove);
		window.addEventListener("pointerdown", onDown);
		document.documentElement.addEventListener("pointerleave", onLeave);
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerdown", onDown);
			document.documentElement.removeEventListener("pointerleave", onLeave);
		};
	}, [enabled, x, y]);

	if (!enabled) return null;

	return (
		<div
			aria-hidden
			className="pointer-events-none fixed inset-0 z-[90] overflow-hidden"
		>
			<AnimatePresence>
				{particles.map((p) => (
					<motion.span
						key={p.id}
						initial={{ x: p.x, y: p.y, opacity: 1, scale: 1, rotate: 0 }}
						animate={{
							x: p.x + p.dx,
							y: p.y + p.dy,
							opacity: 0,
							scale: 0.4,
							rotate: p.rotate,
						}}
						transition={{ duration: 0.7, ease: "easeOut" }}
						onAnimationComplete={() =>
							setParticles((prev) => prev.filter((q) => q.id !== p.id))
						}
						className="absolute left-0 top-0 border border-foreground"
						style={{
							width: p.size,
							height: p.size,
							marginLeft: -p.size / 2,
							marginTop: -p.size / 2,
							background: p.color,
							borderRadius: p.round ? "9999px" : "2px",
						}}
					/>
				))}
			</AnimatePresence>

			<motion.div
				className="absolute left-0 top-0 -ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-foreground"
				style={{ x: ringX, y: ringY }}
				animate={{
					scale: hovering ? 1.8 : 1,
					opacity: visible ? 1 : 0,
					backgroundColor: hovering
						? "color-mix(in srgb, var(--primary) 30%, transparent)"
						: "transparent",
				}}
				transition={{ duration: 0.2 }}
			/>
			<motion.div
				className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-foreground"
				style={{ x, y }}
				animate={{ opacity: visible ? 1 : 0 }}
			/>
		</div>
	);
}
