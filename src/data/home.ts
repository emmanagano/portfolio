// Content for the poster-editorial homepage (src/app/page.tsx).
// Photos in /images/emma-nagano/bw/ are black-and-white versions of the
// originals in /images/emma-nagano/, with Emma's red glasses kept red.

const bw = (name: string) => `/images/emma-nagano/bw/emma-nagano-${name}.jpg`;

export const hero = {
	words: ["Design.", "Write.", "Code"],
	photo: {
		src: bw("red-glasses-portrait"),
		alt: "Emma Nagano in red glasses",
	},
	left: ["Frontend", "developer"],
	right: ["Pampanga,", "PH"],
	// Tiny instrument ruler along the bottom edge.
	ruler: { start: "©2026", end: "EN · TL" },
};

// Work: a red index list. Hovering a row opens one screenshot; every row
// links straight to the live site.
export type Project = {
	title: string;
	note: string; // type and stack, shown on the right
	href: string;
	image: string;
	alt: string;
	position: string; // object-position for the 16:9 crop
};

export const work = {
	intro: "Some things I’ve built.",
	projects: [
		{
			title: "Jewelry store",
			note: "E-commerce · Next.js · Supabase",
			href: "https://mock-jewelry-ecommerce.netlify.app/",
			image: "/images/projects/jewelry-store.jpg",
			alt: "Maison Vaelore jewelry store home page with a pearl necklace hero",
			position: "16% 50%",
		},
		{
			title: "Phil Strats",
			note: "Travel guide blog",
			href: "https://philippinestrategies.netlify.app/",
			image: "/images/projects/phil-strats.jpg",
			alt: "Phil Strats home page featuring the Sabtang Island, Batanes day-trip guide",
			position: "36% 62%",
		},
		{
			title: "JD Gallery",
			note: "Photography portfolio",
			href: "https://jdgallery.netlify.app/",
			image: "/images/projects/jd-gallery.jpg",
			alt: "JD Gallery photography portfolio home page with a black-and-white hero photo",
			position: "50% 30%",
		},
		{
			title: "Flatline",
			note: "Interactive story",
			href: "https://interactive-story-flatline.netlify.app/",
			image: "/images/projects/flatline.jpg",
			alt: "Flatline title screen in bold black type on yellow",
			position: "30% 45%",
		},
	] satisfies Project[],
};

// Experience as one run of poster type. Details show on hover/focus.
export type PathStep = {
	year: string;
	label: string[]; // one entry per line
	detail: string;
	link?: { text: string; href: string };
};

export const path: PathStep[] = [
	{
		year: "2020",
		label: ["Web & brand"],
		detail: "CleanTint USA. Kept the company's Wix site running: layouts, product pages, content and basic SEO.",
	},
	{
		year: "2021",
		label: ["University of", "North Florida"],
		detail: "A six-month PERN stack program ending in an e-commerce capstone.",
		link: { text: "UNF Coding Bootcamp", href: "https://bootcamp.unf.edu/coding" },
	},
	{
		year: "2022",
		label: ["First client"],
		detail: "A custom React site for a local carpet cleaning business, from design to domain to launch.",
	},
	{
		year: "2024",
		label: ["Web support"],
		detail: "7–13 tickets a shift, and part of the team that migrated thousands of WordPress sites to new hosting.",
		link: { text: "ollyolly.com", href: "https://ollyolly.com" },
	},
	{
		year: "2025",
		label: ["Freelance"],
		detail: "Built a consulting and article platform from scratch on an eight-month client contract.",
	},
];

export const next = { label: "Next: your team", detail: "Open to frontend roles." };

// About: a giant word filled with Emma's photos, cycling stop-motion style.
// The word is random on purpose; the hidden label explains it.
export const photoWord = {
	word: "Ummmm",
	label: "Ummmm: photos of Emma off duty",
	photos: [
		"city-night-view",
		"cinematic-gaze",
		"blue-dress-hanoi-night",
		"hand-on-chin-glasses",
		"talking-expression",
		"rooftop-photo-night",
		"marina-walkway-night",
		"rainbow-road-photo",
		"sunny-waterfront-orange-top",
		"coastal-lookout-sunglasses",
		"lagoon-rope-swing",
		"seaside-pier-patterned-jumpsuit",
		"night-street-iced-coffee",
		"smiling-glasses",
		"serious-look-glasses",
		"red-top-vintage-portrait",
		"car-sunglasses-blue-top",
		"sunglasses-outdoor",
		"floral-top-portrait",
		"headphones-natural-look",
		"black-tank-top",
		"badass",
		"car-selfie",
		"phone-mirror-portrait",
		"mirror-portrait-bathroom",
		"red-crop-top-gym-mirror",
	].map(bw),
};
