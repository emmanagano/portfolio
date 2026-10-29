"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import ArrowIcon from "../ui/ArrowIcon";

const words = ["Design.", "Write.", "Code."];

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			{/* Decorative blobs */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl"
			/>

			<div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:grid-cols-[1fr_auto] md:pb-28 md:pt-24">
				<div>
					{site.openToWork && (
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-semibold"
						>
							<span className="relative flex h-2.5 w-2.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
								<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
							</span>
							Open to frontend roles
						</motion.p>
					)}

					<h1 className="font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
						<span className="sr-only">
							{site.name}, {site.role}.{" "}
						</span>
						<span aria-hidden="true">
							Hi, I&apos;m{" "}
							<span className="relative inline-block">
								Emma
								<motion.svg
									viewBox="0 0 200 20"
									className="absolute -bottom-2 left-0 h-4 w-full text-primary"
									preserveAspectRatio="none"
								>
									<motion.path
										d="M2 14 C 50 2, 100 2, 198 12"
										fill="none"
										stroke="currentColor"
										strokeWidth="6"
										strokeLinecap="round"
										initial={{ pathLength: 0 }}
										animate={{ pathLength: 1 }}
										transition={{ duration: 0.8, delay: 0.5 }}
									/>
								</motion.svg>
							</span>
							.
							<br />
							<span className="text-muted">I build for the web.</span>
						</span>
					</h1>

					<ul className="mt-8 flex flex-wrap gap-3" aria-label="What I do">
						{words.map((w, i) => (
							<motion.li
								key={w}
								initial={{ opacity: 0, y: 20, rotate: 0 }}
								animate={{ opacity: 1, y: 0, rotate: [-3, 2, -2][i] }}
								transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 260, damping: 14 }}
								whileHover={{ rotate: 0, scale: 1.08 }}
								className={`rounded-xl border-2 border-foreground px-4 py-1.5 font-display text-xl font-bold text-[#1a1423] shadow-[4px_4px_0_var(--foreground)] ${["bg-sun", "bg-primary", "bg-accent"][i]}`}
							>
								{w}
							</motion.li>
						))}
					</ul>

					<p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
						{site.role} based in {site.location}. {site.pitch}
					</p>

					<div className="mt-10 flex flex-wrap gap-4">
						<a
							href="#work"
							className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-foreground px-6 py-3 font-bold text-background shadow-[4px_4px_0_var(--primary)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--primary)]"
						>
							See my work
							<ArrowIcon className="h-4 w-4 rotate-90 transition-transform group-hover:translate-y-0.5" />
						</a>
						<a
							href={site.resumeUrl}
							target="_blank"
							rel="noreferrer"
							className="group inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-3 font-bold transition-all hover:-translate-y-0.5 hover:bg-sun hover:text-[#1a1423]"
						>
							Download résumé
							<ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</a>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
					animate={{ opacity: 1, scale: 1, rotate: 6 }}
					transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.2 }}
					whileHover={{ rotate: -4, scale: 1.04 }}
					className="relative mx-auto w-56 sm:w-72 md:w-80"
				>
					<div className="aspect-square overflow-hidden rounded-full border-4 border-foreground bg-sun shadow-[10px_10px_0_var(--accent)]">
						{/* Swapped by the `dark` class (not React state) so the right photo shows on first paint */}
						<img
							src="/images/profile-picture.png"
							alt={`Portrait of ${site.name}`}
							className="h-full w-full scale-[1.25] object-cover dark:hidden"
						/>
						<img
							src="/images/profile-picture-dark.png"
							alt={`Portrait of ${site.name}`}
							className="hidden h-full w-full scale-[1.25] object-cover dark:block"
						/>
					</div>
					<span className="absolute -left-4 bottom-6 -rotate-12 rounded-full border-2 border-foreground bg-surface px-3 py-1 font-mono text-xs font-bold">
						📍 Philippines
					</span>
				</motion.div>
			</div>
		</section>
	);
}
