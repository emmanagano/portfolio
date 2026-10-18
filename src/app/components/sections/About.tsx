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
					My journey into tech was driven by a deep desire to build. I
					quickly realized that{" "}
					<strong className="font-semibold text-[var(--primary)]">
						web development
					</strong>{" "}
					perfectly combined everything I naturally gravitated toward:
					the visual balance of{" "}
					<strong className="font-semibold text-[var(--primary)]">
						design
					</strong>
					, the expression of{" "}
					<strong className="font-semibold text-[var(--primary)]">
						writing
					</strong>
					, and the deep, focused logic of{" "}
					<strong className="font-semibold text-[var(--primary)]">
						problem-solving
					</strong>
					.
				</p>
				<p>
					Today, I specialize in{" "}
					<strong className="font-semibold text-[var(--primary)]">
						modern frontend technologies
					</strong>{" "}
					and the{" "}
					<strong className="font-semibold text-[var(--primary)]">
						PERN stack
					</strong>
					, focusing on creating clean, functional, and user-centered
					digital experiences. Whether I&apos;m architecting a robust{" "}
					<strong className="font-semibold text-[var(--primary)]">
						database schema
					</strong>{" "}
					under the hood or polishing a{" "}
					<strong className="font-semibold text-[var(--primary)]">
						responsive CSS grid
					</strong>{" "}
					on the frontend, I take pride in crafting seamless
					applications from end to end.
				</p>
				<p>
					Currently based in the Philippines, I&apos;ve had the
					opportunity to provide technical support for{" "}
					<strong className="font-semibold text-[var(--primary)]">
						digital agencies
					</strong>{" "}
					and develop{" "}
					<strong className="font-semibold text-[var(--primary)]">
						full-stack platforms
					</strong>{" "}
					for freelance clients. I thrive in the space where{" "}
					<strong className="font-semibold text-[var(--primary)]">
						aesthetics meet engineering
					</strong>
					, and I&apos;m always eager to tackle new challenges that
					allow me to bring great ideas to life on the web.
				</p>
			</div>
		</section>
	);
}
