import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
// import { GoHomeFill } from "react-icons/go";

export default function Navbar() {
	const navItem = (label: string, href: string) => (
		<Link
			href={href}
			className="
				w-full
				py-3
				my-1
				text-center
				rounded-xl
				border
				border-white/40
				transition
				duration-200
				hover:bg-white/15
				hover:border-white/60
				hover:scale-[1.03]
			"
		>
			{label}
		</Link>
	);

	return (
		<nav
			className="
				text-[var(--foreground)]
				lg:col-start-11 
				lg:col-span-2
				lg:row-start-1 
				lg:row-span-6
				flex
				flex-col
				items-center
				justify-center
				p-6
				gap-2
			"
		>
			{navItem("Home", "/")}
			{navItem("About", "/about")}
			{navItem("Blogs", "/blogs")}
			{navItem("Contact", "mailto:emmaruthnagano@gmail.com")}
			{navItem("Gallery", "/gallery")}
			{navItem("Project Demo", "https://philstrats.com/")}
			<div className="mt-auto w-full flex justify-center">
				<ThemeToggle />
			</div>
		</nav>
	);
}
