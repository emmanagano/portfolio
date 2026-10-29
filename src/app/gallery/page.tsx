import type { Metadata } from "next";
import { gallery } from "@/data/gallery";
import PhotoGrid from "../components/ui/PhotoGrid";

export const metadata: Metadata = {
	title: "Gallery",
	description: "Photos of Emma Nagano, off the clock.",
	// Personal page: reachable by URL, but unlinked and kept out of search results.
	robots: { index: false, follow: false },
};

export default function GalleryPage() {
	return (
		<div className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 md:pt-16">
			<header className="mb-12">
				<p className="mb-3 font-mono text-sm font-bold uppercase tracking-widest text-muted">
					<span className="text-primary-ink" aria-hidden="true">✦</span> Gallery
				</p>
				<h1 className="font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl">
					Off the <span className="text-primary-ink">clock</span>.
				</h1>
			</header>
			<PhotoGrid photos={gallery} />
		</div>
	);
}
