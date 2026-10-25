import React from "react";

export default function About() {
	return (
		<section id="about" className="scroll-mt-16 lg:scroll-mt-24">
			{/* Hidden on desktop, visible on mobile */}
			<h2 className="text-sm font-bold uppercase tracking-widest opacity-80 lg:hidden mb-6">
				About
			</h2>

			{/* We use your global foreground color and drop the opacity to 80% for the paragraphs */}
			<div className="text-[var(--foreground)] opacity-80 leading-relaxed space-y-6">
				<p>
					I found my way into tech through a simple love for making
					things. I quickly realized that building websites was the
					perfect mix of everything I enjoy: the creativity of design,
					the flow of writing, and the quiet puzzle-solving of writing
					code.
				</p>
				<p>
					Today, I focus on full-stack web development. I like to keep
					things simple and user-friendly, making sure a website looks
					just as good on the screen as it works behind the scenes.
				</p>
				<p>
					I&apos;m based in the Philippines, and I&apos;ve been lucky
					enough to help agencies and freelance clients bring their
					ideas to the web. At the end of the day, I just really enjoy
					coding and building things that people can use. If you have
					a great idea you&apos;d like to bring to life, I&apos;d love
					to help you build it.
				</p>
			</div>
		</section>
	);
}
