import Socials from "./Socials";
import { site } from "@/data/site";

export default function Footer() {
	return (
		<footer className="mt-24 border-t border-line">
			<div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
				<div className="space-y-1 text-sm text-muted">
					<p>
						© {new Date().getFullYear()} {site.name}. Designed and
						built from scratch.
					</p>
					<p className="font-mono text-xs">
						Next.js · Tailwind CSS · Framer Motion · Netlify
					</p>
				</div>
				<div className="flex items-center gap-4">
					<Socials size={20} />
					<a
						href="#main"
						className="rounded-full border border-line px-4 py-2 text-sm font-semibold transition-colors hover:bg-hover"
					>
						Back to top ↑
					</a>
				</div>
			</div>
		</footer>
	);
}
