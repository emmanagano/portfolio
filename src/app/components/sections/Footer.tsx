import React from "react";

export default function Footer() {
	return (
		<footer className="pb-16 text-sm sm:pb-0">
			{/* The 'group' class here controls the Dim & Reveal effect! */}
			<div className="flex flex-col gap-4 text-[var(--foreground)] opacity-50 transition-opacity duration-500 hover:opacity-100">
				<p className="leading-relaxed">
					Crafted from scratch with curiosity and countless lines of
					code.
				</p>

				{/* Inline UI badges instead of boring text! */}
				<p className="flex flex-wrap items-center gap-1.5 leading-relaxed">
					Built utilizing{" "}
					<a
						href="https://nextjs.org/"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center rounded-full bg-[var(--foreground)]/10 px-2 py-0.5 text-[11px] font-medium transition-colors hover:bg-[var(--primary)] hover:text-[var(--background)]"
					>
						Next.js
					</a>{" "}
					and{" "}
					<a
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center rounded-full bg-[var(--foreground)]/10 px-2 py-0.5 text-[11px] font-medium transition-colors hover:bg-[var(--primary)] hover:text-[var(--background)]"
					>
						Tailwind CSS
					</a>
					.
				</p>

				<p className="leading-relaxed">
					Editorial layout loosely inspired by the brilliant{" "}
					<a
						href="https://brittanychiang.com/"
						target="_blank"
						rel="noreferrer"
						className="font-serif italic text-[15px] font-medium hover:text-[var(--primary)] transition-colors"
					>
						Brittany Chiang
					</a>
					.
				</p>
			</div>
		</footer>
	);
}
