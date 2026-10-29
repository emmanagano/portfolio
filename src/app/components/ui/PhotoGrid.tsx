"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Photo = { src: string; alt: string };

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
	const [active, setActive] = useState<number | null>(null);
	const dialogRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);
	const triggerRef = useRef<HTMLButtonElement | null>(null);

	const close = useCallback(() => {
		setActive(null);
		triggerRef.current?.focus();
	}, []);
	const step = useCallback(
		(dir: 1 | -1) =>
			setActive((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
		[photos.length]
	);

	const isOpen = active !== null;

	useEffect(() => {
		if (!isOpen) return;
		closeRef.current?.focus();
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowRight") step(1);
			if (e.key === "ArrowLeft") step(-1);
			if (e.key === "Tab" && dialogRef.current) {
				const items = dialogRef.current.querySelectorAll<HTMLElement>("button");
				const first = items[0];
				const last = items[items.length - 1];
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					last.focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKey);
		};
	}, [isOpen, close, step]);

	return (
		<>
			<ul className="columns-2 gap-4 md:columns-3 lg:columns-4">
				{photos.map((p, i) => (
					<li key={p.src} className="mb-4 break-inside-avoid">
						<button
							type="button"
							onClick={(e) => {
								triggerRef.current = e.currentTarget;
								setActive(i);
							}}
							className="block w-full overflow-hidden rounded-2xl border-2 border-foreground transition-all duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-[6px_6px_0_var(--primary)]"
							aria-label={`Open photo: ${p.alt}`}
						>
							<img src={p.src} alt={p.alt} loading="lazy" className="w-full" />
						</button>
					</li>
				))}
			</ul>

			<AnimatePresence>
				{active !== null && (
					<motion.div
						ref={dialogRef}
						role="dialog"
						aria-modal="true"
						aria-label={photos[active].alt}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={close}
						className="fixed inset-0 z-[60] flex items-center justify-center bg-[#141018]/90 p-4 backdrop-blur-sm"
					>
						<motion.img
							key={photos[active].src}
							src={photos[active].src}
							alt={photos[active].alt}
							initial={{ scale: 0.92, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							onClick={(e) => e.stopPropagation()}
							className="max-h-[85vh] max-w-full rounded-2xl border-2 border-[#f4efe6] object-contain"
						/>
						<button
							ref={closeRef}
							type="button"
							onClick={close}
							aria-label="Close"
							className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4efe6] text-xl font-bold text-[#1a1423]"
						>
							✕
						</button>
						{(["prev", "next"] as const).map((dir) => (
							<button
								key={dir}
								type="button"
								onClick={(e) => {
									e.stopPropagation();
									step(dir === "next" ? 1 : -1);
								}}
								aria-label={dir === "next" ? "Next photo" : "Previous photo"}
								className={`absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-sun text-xl font-bold text-[#1a1423] ${dir === "next" ? "right-4" : "left-4"}`}
							>
								{dir === "next" ? "→" : "←"}
							</button>
						))}
						<p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-sm text-[#f4efe6]">
							{active + 1} / {photos.length}
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
