import React from "react";

export default function ProjectsPage() {
	return (
		<main className="min-h-screen bg-[var(--background)] p-8">
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-3xl font-extrabold text-[var(--foreground)] mb-4">
					Demo Project Template
				</h2>
				<p className="text-[var(--foreground)]/80 leading-relaxed mb-6">
					This page serves as a template to demonstrate my ability to
					design and develop modern, responsive website layouts. It
					does not represent any previous client&apos;s actual project
					or data.
				</p>
				<a
					href="https://philstrats.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/images/philippinestrategies.png"
						alt="Placeholder website layout"
						className="rounded-lg shadow-md w-full sm:w-5/6 md:w-3/4 h-auto mx-auto hover:opacity-90 transition"
					/>
				</a>
				<div className="mt-6">
					<a
						href="https://philstrats.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--foreground)] underline hover:text-[var(--primary)]"
					>
						Visit the demo site: philstrats.com
					</a>
				</div>
				<p className="text-[var(--foreground)]/70 text-sm mt-4 italic">
					*All content, names, and visuals shown here are purely for
					presentation purposes.*
				</p>
			</div>
		</main>
	);
}
