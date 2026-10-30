export type Project = {
	slug: string;
	title: string;
	summary: string;
	image?: string; // empty renders a "Coming Soon" placeholder
	liveUrl: string;
	repoUrl?: string;
	stack: string[];
	status: "live" | "in-progress";
	role: string;
	problem: string;
	approach: string;
	highlights: string[];
	outcome: string;
	gallery: { src: string; alt: string }[]; // first item should match `image`
};

// Content verified against the live sites (Oct 2026). Screenshots in public/images/projects/.
export const projects: Project[] = [
	{
		slug: "phil-strats",
		title: "Phil Strats: Travel Blog Showcase",
		summary:
			"A demo travel blog I built to show the kind of blog platform I make for clients: searchable guides, a newsletter, analytics, and SEO built in from day one.",
		image: "/images/projects/phil-strats.jpg",
		liveUrl: "https://philippinestrategies.netlify.app",
		stack: [
			"Next.js",
			"React",
			"Tailwind CSS",
			"Markdown",
			"EmailJS",
			"Buttondown",
			"Google Analytics",
			"Google Tag Manager",
			"Netlify",
		],
		status: "live",
		role: "Showcase project: design, development, and deployment",
		problem:
			"The blog I built for a freelance client isn't mine to share publicly, so I built Phil Strats to show the same skills in the open: a blog that's easy to keep publishing to, easy for readers to browse, and easy for Google to find.",
		approach:
			"I built it with Next.js and Tailwind CSS, with guides written in Markdown so a new destination is just a new file. Readers can search guides and filter them by experience (beaches, nature, heritage) or island group (Luzon, Visayas, Mindanao, Palawan). Every guide follows the same structure: quick facts, a table of contents, top attractions, how to get there, where to stay, and a suggested itinerary.",
		highlights: [
			"Search plus experience and region filters across 9 destination guides",
			"Article pages with table of contents, reading time, and author byline",
			"Structured data (Article, FAQ, Breadcrumb), Open Graph cards, canonical URLs, sitemap",
			"Weekly newsletter signup through Buttondown",
			"Contact form powered by EmailJS, with no backend needed",
			"Traffic tracking with Google Analytics via Tag Manager",
		],
		outcome:
			"A live, public example of my blog work: fast, SEO-ready, and deployed on Netlify, with analytics and a newsletter wired up the way I'd ship them for a client.",
		gallery: [
			{
				src: "/images/projects/phil-strats.jpg",
				alt: "Phil Strats home page featuring the Banaue Rice Terraces guide",
			},
			{
				src: "/images/projects/phil-strats-articles.jpg",
				alt: "Destinations page with search and experience and region filters",
			},
		],
	},
	{
		slug: "jd-gallery",
		title: "JD Gallery: Photography Portfolio",
		summary:
			"A clean, editorial portfolio for a photographer and videographer, built to put sports, wedding, real estate, and aerial work front and center.",
		image: "/images/projects/jd-gallery.jpg",
		liveUrl: "https://jdgallery.netlify.app/",
		stack: ["Astro", "TypeScript", "Tailwind CSS", "Netlify"],
		status: "live",
		role: "Designer and developer",
		problem:
			"Dan needed a portfolio where the photos do the talking: fast-loading galleries, a clear list of services, and an easy way for clients to book a shoot.",
		approach:
			"I chose Astro so pages ship as static HTML with almost no JavaScript, and used Astro's image pipeline to serve responsive WebP images. The design stays quiet (a serif headline, plenty of white space) so the photography stands out. Each collection gets its own gallery page with a swipeable lightbox.",
		highlights: [
			"Static Astro site with responsive, optimized WebP images",
			"Gallery pages with a swipeable lightbox and next/previous controls",
			"Services section covering photography, video, editing, drone, and prints",
			"Contact form that opens a pre-filled email, with no server needed",
			"Lightweight vanilla JavaScript for the mobile menu",
		],
		outcome:
			"Complete and live: two full galleries (Real Estate, 38 photos; Ride with Tide, 31 photos), a clear services page, and a direct way for new clients to get in touch.",
		gallery: [
			{
				src: "/images/projects/jd-gallery.jpg",
				alt: "JD Gallery home page with hero photo and headline",
			},
			{
				src: "/images/projects/jd-gallery-album.jpg",
				alt: "Real Estate gallery page with a grid of interior and exterior photos",
			},
		],
	},
	{
		slug: "jewelry-store",
		title: "Fine Jewelry E-Commerce Store",
		summary:
			"A concept storefront for a fine jewelry brand, with a real product database, user accounts, and a cart and wishlist that stay in sync across tabs.",
		image: "/images/projects/jewelry-store.jpg",
		liveUrl: "https://mock-jewelry-ecommerce.netlify.app/",
		stack: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Supabase",
			"Lucide Icons",
			"Netlify",
		],
		status: "in-progress",
		role: "Personal project: design and full-stack development",
		problem:
			"I wanted to build a store that feels premium and works like a real one: browsing by category, choosing a size, saving favorites, and signing in.",
		approach:
			"Products live in a Supabase database and load into category and product pages. Supabase Auth handles sign up, sign in, and sessions. I built the cart and wishlist with React context and useSyncExternalStore on top of localStorage, so they survive a refresh and stay in sync between open tabs, without a state library.",
		highlights: [
			"Product catalog served from Supabase (Postgres)",
			"Sign up, sign in, and sessions with Supabase Auth",
			"Cart and wishlist synced across tabs with useSyncExternalStore",
			"Product pages with size selection and add to bag",
			"Category pages for rings, necklaces, earrings, and bracelets",
		],
		outcome:
			"In progress. Shopping, cart, wishlist, and accounts work; checkout and the remaining content pages are next.",
		gallery: [
			{
				src: "/images/projects/jewelry-store.jpg",
				alt: "Jewelry store home page with a full-width collection hero, search, and category navigation",
			},
			{
				src: "/images/projects/jewelry-store-product.jpg",
				alt: "Product page with an image gallery, a ring size selected, and the add to bag button",
			},
		],
	},
];

export function getProject(slug: string) {
	return projects.find((p) => p.slug === slug);
}
