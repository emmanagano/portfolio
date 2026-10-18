import ThemeToggle from "../ui/ThemeToggle";
import Nav from "./Nav";
import Socials from "./Socials";

export default function Sidebar() {
	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
			<div>
				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
					Emma Nagano
				</h1>
				<h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl opacity-90">
					Frontend Web Developer
				</h2>
				<p className="mt-4 max-w-xs leading-normal opacity-70">
					Combining design, writing, and code to build exceptional
					digital experiences.
				</p>
				<Nav />
			</div>

			<div className="mt-8 flex items-center gap-6">
				<Socials />
				<ThemeToggle />
			</div>
		</header>
	);
}
