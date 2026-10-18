import Sidebar from "./components/layout/Sidebar";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Projects from "./components/sections/Projects";

export default function Home() {
	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
			{/* THIS IS THE MAGIC LINE: lg:flex pushes them side-by-side! */}
			<div className="lg:flex lg:justify-between lg:gap-4">
				{/* Left Side */}
				<Sidebar />

				{/* Right Side */}
				<main className="pt-24 lg:w-1/2 lg:py-24 space-y-24">
					<About />
					<Experience />
					<Projects />
					<Footer />
				</main>
			</div>
		</div>
	);
}
