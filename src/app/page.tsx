import PosterHero from "./components/home/PosterHero";
import WorkIndex from "./components/home/WorkIndex";
import ExperiencePath from "./components/home/ExperiencePath";
import PhotoWord from "./components/home/PhotoWord";
import ContactLetter from "./components/home/ContactLetter";

// Poster-editorial homepage. Content lives in src/data/home.ts.
export default function Home() {
	return (
		<>
			<PosterHero />
			<WorkIndex />
			<ExperiencePath />
			<PhotoWord />
			<ContactLetter />
		</>
	);
}
