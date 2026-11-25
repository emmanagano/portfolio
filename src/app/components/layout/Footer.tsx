import { site } from "@/data/site";

// Only the giant cropped wordmark, set in Inter Tight 900 and cut off by the
// bottom edge. The name is decorative here; the nav already carries it.
export default function Footer() {
	return (
		<footer className="overflow-hidden pt-10">
			<p
				aria-hidden="true"
				className="m-0 h-[13.5vw] overflow-hidden whitespace-nowrap px-6 text-[17.5vw] font-black uppercase leading-[0.78] tracking-[-0.06em] text-ink"
			>
				{site.name}
			</p>
		</footer>
	);
}
