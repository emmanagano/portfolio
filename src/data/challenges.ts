export type Challenge = {
	slug: string;
	// Set for standalone pages in public/challenges/<slug>/ (plain <a>, not next/link).
	// Leave out for a page built as a Next route at src/app/challenges/<slug>/.
	href?: string;
	title: string;
	summary: string;
	twist?: string; // optional: only set if I added something on top of the original brief
	source: string; // original challenge brief
	difficulty: "Newbie" | "Junior" | "Intermediate";
	stack: string[];
	accent: "bg-primary" | "bg-sun" | "bg-lilac" | "bg-accent" | "bg-[#ff33b4]";
};

// Each challenge is a single page at /challenges/[slug]. If one outgrows the
// portfolio, add a `liveUrl` here and link out instead.
export const challenges: Challenge[] = [
	{
		slug: "gamer-sign-up",
		href: "/challenges/gamer-sign-up",
		title: "Gamer Sign-Up Form",
		summary:
			"A sign-up form for NEONCORE, a made-up competitive-gaming network, with live validation, a password strength meter, and loading and success states.",
		twist:
			"I went a bit overboard and added four switchable themes (Cyberpunk Pink, Yellow, Blue and a Bond wild card).",
		source: "https://www.frontendmentor.io/challenges/gamer-sign-up-form",
		difficulty: "Junior",
		stack: ["HTML", "CSS", "JavaScript"],
		accent: "bg-[#ff33b4]",
	},
];

export function getChallenge(slug: string) {
	return challenges.find((c) => c.slug === slug);
}
