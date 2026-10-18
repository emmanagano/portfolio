import React from "react";
import NavLink from "./NavLink";

export default function Nav() {
	const navItems = [
		{ href: "#about", label: "About" },
		{ href: "#experience", label: "Experience" },
		{ href: "#projects", label: "Projects" },
	];

	return (
		<nav className="mt-20 hidden lg:block">
			<ul className="flex flex-col w-max">
				{navItems.map((item) => (
					<NavLink
						key={item.label}
						href={item.href}
						label={item.label}
					/>
				))}
			</ul>
		</nav>
	);
}
