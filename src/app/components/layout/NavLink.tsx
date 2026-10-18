import React from "react";

type NavLinkProps = {
	href: string;
	label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {
	return (
		<li>
			<a className="group flex items-center py-3" href={href}>
				{/* The Animated Line */}
				<span className="mr-4 h-px w-8 bg-[var(--foreground)] opacity-40 transition-all duration-300 group-hover:w-16 group-hover:opacity-100"></span>
				{/* The Text */}
				<span className="text-xs font-bold uppercase tracking-widest opacity-60 transition-all duration-300 group-hover:opacity-100">
					{label}
				</span>
			</a>
		</li>
	);
}
