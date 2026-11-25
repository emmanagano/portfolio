"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

// Tiny uppercase nav with slashes, per the poster-editorial skill: the name on
// the left, links on the right, the current page in ink and the rest in taupe.
const links = [
	{ href: "/#work", label: "Work" },
	{ href: "/#experience", label: "Experience" },
	{ href: "/about", label: "About" },
	{ href: "/#contact", label: "Contact" },
];

export default function SiteNav() {
	const pathname = usePathname();

	return (
		<header className="px-6 pt-6 text-xs font-medium uppercase leading-snug tracking-[0.08em]">
			<nav
				aria-label="Main"
				className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3"
			>
				<Link href="/" className="text-ink">
					{site.name}
				</Link>
				<ul className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
					{links.map((l, i) => (
						<li key={l.href} className="flex items-baseline gap-2.5">
							{i > 0 && (
								<span aria-hidden="true" className="text-taupe">
									/
								</span>
							)}
							<Link
								href={l.href}
								aria-current={pathname === l.href ? "page" : undefined}
								className="text-taupe transition-colors hover:text-ink aria-[current=page]:text-ink"
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
