"use client";
import { useState, useEffect, useRef } from "react";

export default function FunShapes() {
	const [shapes, setShapes] = useState([
		{ id: 1, type: "circle", x: 120, y: 100, w: 64, h: 64, vx: 0, vy: 0 },
		{ id: 2, type: "square", x: 220, y: 120, w: 64, h: 64, vx: 0, vy: 0 },
		{ id: 3, type: "rect", x: 320, y: 140, w: 96, h: 56, vx: 0, vy: 0 },
		{ id: 4, type: "triangle", x: 180, y: 200, w: 72, h: 72, vx: 0, vy: 0 },
	]);
	const [draggingId, setDraggingId] = useState<number | null>(null);

	const lastMouse = useRef<{ x: number; y: number } | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const mountedRef = useRef(false);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		mountedRef.current = true;
	}, []);

	useEffect(() => {
		setReady(true);
	}, []);

	function handleMouseDown(id: number) {
		setDraggingId(id);
	}

	function handleMouseUp() {
		if (draggingId !== null) {
			const id = draggingId;
			setShapes((prev) =>
				prev.map((s) => {
					if (s.id !== id) return s;

					// boost throw velocity
					const boost = 1.4;
					let vx = s.vx * boost;
					let vy = s.vy * boost;

					// cap throw speed
					const maxThrow = 28;
					vx = Math.max(-maxThrow, Math.min(maxThrow, vx));
					vy = Math.max(-maxThrow, Math.min(maxThrow, vy));

					return { ...s, vx, vy };
				}),
			);
		}

		setDraggingId(null);
		lastMouse.current = null;
	}

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		if (draggingId === null) return;

		const rect = e.currentTarget.getBoundingClientRect();

		setShapes((prev) =>
			prev.map((s) => {
				if (s.id !== draggingId) return s;

				const mouseX = e.clientX - rect.left;
				const mouseY = e.clientY - rect.top;

				let vx = 0;
				let vy = 0;

				if (lastMouse.current) {
					vx = mouseX - lastMouse.current.x;
					vy = mouseY - lastMouse.current.y;
				}

				lastMouse.current = { x: mouseX, y: mouseY };

				const spring = 0.25;
				let x = s.x + (mouseX - s.x) * spring;
				let y = s.y + (mouseY - s.y) * spring;

				const halfW = s.w / 2;
				const halfH = s.h / 2;

				x = Math.max(halfW, Math.min(rect.width - halfW, x));
				y = Math.max(halfH, Math.min(rect.height - halfH, y));

				return { ...s, x, y, vx, vy };
			}),
		);
	}

	useEffect(() => {
		let frame: number;

		function update() {
			if (!mountedRef.current) {
				frame = requestAnimationFrame(update);
				return;
			}

			setShapes((prev) => {
				// first compute next state
				const next = prev.map((s) => {
					if (s.id === draggingId) return s;

					const rect = containerRef.current?.getBoundingClientRect();
					const maxW = rect?.width ?? 0;
					const maxH = rect?.height ?? 0;

					if (!maxW || !maxH) return s;

					const x = s.x + s.vx;
					const y = s.y + s.vy;

					let vx = s.vx * 0.92;
					let vy = s.vy * 0.92;

					// extra smoothing (spring-like damping)
					vx *= 0.98;
					vy *= 0.98;

					// limit max velocity
					const maxSpeed = 20;
					vx = Math.max(-maxSpeed, Math.min(maxSpeed, vx));
					vy = Math.max(-maxSpeed, Math.min(maxSpeed, vy));

					// snap to rest to remove jitter
					if (Math.abs(vx) < 0.05) vx = 0;
					if (Math.abs(vy) < 0.05) vy = 0;

					const halfW = s.w / 2;
					const halfH = s.type === "triangle" ? s.h : s.h / 2;

					if (x <= halfW || x >= maxW - halfW) vx *= -0.5;
					if (
						y <= halfH ||
						y >= maxH - (s.type === "triangle" ? 0 : halfH)
					)
						vy *= -0.5;

					return { ...s, x, y, vx, vy };
				});

				// then resolve collisions (AABB)
				for (let i = 0; i < next.length; i++) {
					for (let j = i + 1; j < next.length; j++) {
						const a = next[i];
						const b = next[j];

						const aCenterY =
							a.type === "triangle" ? a.y - a.h / 2 : a.y;
						const bCenterY =
							b.type === "triangle" ? b.y - b.h / 2 : b.y;

						const dx = b.x - a.x;
						const dy = bCenterY - aCenterY;

						const aHalfH =
							a.type === "triangle" ? a.h / 2 : a.h / 2;
						const bHalfH =
							b.type === "triangle" ? b.h / 2 : b.h / 2;

						const overlapX = a.w / 2 + b.w / 2 - Math.abs(dx);
						const overlapY = aHalfH + bHalfH - Math.abs(dy);

						if (overlapX > 1 && overlapY > 1) {
							// resolve along smaller overlap axis
							if (overlapX < overlapY) {
								const push = overlapX / 2;
								const dir = dx > 0 ? 1 : -1;

								a.x -= push * dir;
								b.x += push * dir;

								const temp = a.vx;
								a.vx = b.vx * 0.5;
								b.vx = temp * 0.5;
							} else {
								const push = overlapY / 2;
								const dir = dy > 0 ? 1 : -1;

								a.y -= push * dir;
								b.y += push * dir;

								const temp = a.vy;
								a.vy = b.vy * 0.5;
								b.vy = temp * 0.5;
							}
						}
					}
				}

				// final clamp to keep everything inside container
				const rect = containerRef.current?.getBoundingClientRect();
				const maxW = rect?.width ?? 0;
				const maxH = rect?.height ?? 0;

				if (maxW && maxH) {
					for (const s of next) {
						const halfW = s.w / 2;
						const halfH = s.type === "triangle" ? s.h : s.h / 2;

						s.x = Math.max(halfW, Math.min(maxW - halfW, s.x));
						s.y = Math.max(
							halfH,
							Math.min(
								maxH - (s.type === "triangle" ? 0 : halfH),
								s.y,
							),
						);
					}
				}

				return [...next];
			});

			frame = requestAnimationFrame(update);
		}

		frame = requestAnimationFrame(update);
		return () => cancelAnimationFrame(frame);
	}, [draggingId]);

	return (
		<div
			ref={containerRef}
			suppressHydrationWarning
			className="relative w-full h-full"
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
		>
			{ready &&
				shapes.map((s) => (
					<div
						key={s.id}
						onMouseDown={() => handleMouseDown(s.id)}
						className={`absolute cursor-grab active:cursor-grabbing ${
							s.type === "circle"
								? "rounded-full bg-pink-500"
								: s.type === "square"
									? "bg-indigo-500"
									: s.type === "rect"
										? "bg-emerald-500"
										: ""
						}`}
						style={{
							left: s.x,
							top: s.y,
							width: s.w,
							height: s.h,
							transform:
								s.type === "triangle"
									? "translate(-50%, -100%)"
									: "translate(-50%, -50%)",
							...(s.type === "triangle"
								? {
										width: 0,
										height: 0,
										borderLeft: `${s.w / 2}px solid transparent`,
										borderRight: `${s.w / 2}px solid transparent`,
										borderBottom: `${s.h}px solid #f472b6`,
									}
								: {}),
						}}
					/>
				))}
		</div>
	);
}
