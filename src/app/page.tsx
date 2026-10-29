import Hero from "./components/sections/Hero";
import SelectedWork from "./components/sections/SelectedWork";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import AboutTeaser from "./components/sections/AboutTeaser";
import Contact from "./components/sections/Contact";

export default function Home() {
	return (
		<>
			<Hero />
			<SelectedWork />
			<Skills />
			<Experience />
			<AboutTeaser />
			<Contact />
		</>
	);
}
