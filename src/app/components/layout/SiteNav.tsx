"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { site } from "@/data/site";

const links = [
	{ href: "/#work", label: "Work" },
	{ href: "/challenges", label: "Challenges" },
	{ href: "/#experience", label: "Experience" },
	{ href: "/about", label: "About" },
	{ href: "/#contact", label: "Contact" },
];

export default function SiteNav() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	return (
		<header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
			<nav
				aria-label="Main"
				className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
			>
				<Link
					href="/"
					className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-tight"
				>
					<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-[#1a1423] transition-transform duration-300 group-hover:-rotate-12">
						EN
					</span>
					<span className="hidden sm:inline">{site.name}</span>
				</Link>

				<ul className="hidden items-center gap-1 md:flex">
					{links.map((l) => (
						<li key={l.href}>
							<Link
								href={l.href}
								aria-current={pathname === l.href ? "page" : undefined}
								className="rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:bg-hover aria-[current=page]:bg-foreground aria-[current=page]:text-background"
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>

				<div className="flex items-center gap-2">
					<a
						href={site.resumeUrl}
						target="_blank"
						rel="noreferrer"
						className="hidden rounded-full border-2 border-foreground px-4 py-1.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-foreground hover:text-background sm:inline-block"
					>
						Résumé
					</a>
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setOpen((o) => !o)}
						aria-expanded={open}
						aria-controls="mobile-menu"
						aria-label={open ? "Close menu" : "Open menu"}
						className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
					>
						<span
							className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
						/>
						<span
							className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
						/>
						<span
							className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
						/>
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{open && (
					<motion.div
						id="mobile-menu"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						className="overflow-hidden border-t border-line md:hidden"
					>
						<ul className="flex flex-col px-4 py-4">
							{links.map((l, i) => (
								<motion.li
									key={l.href}
									initial={{ x: -16, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.04 * i }}
								>
									<Link
										href={l.href}
										onClick={() => setOpen(false)}
										className="block py-3 font-display text-3xl font-extrabold"
									>
										{l.label}
									</Link>
								</motion.li>
							))}
							<li>
								<a
									href={site.resumeUrl}
									target="_blank"
									rel="noreferrer"
									className="mt-2 inline-block rounded-full bg-primary px-5 py-3 font-bold text-[#1a1423]"
								>
									Download résumé
								</a>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
