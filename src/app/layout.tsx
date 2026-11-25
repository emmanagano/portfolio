import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, Share_Tech_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./components/Providers";
import SiteNav from "./components/layout/SiteNav";
import Footer from "./components/layout/Footer";
import { site, socials } from "@/data/site";
import { gallery } from "@/data/gallery";

// Inter Tight does almost everything (400 body, 500 labels, 900 poster type).
// Instrument Serif italic is the CTA voice and a rare accent.
const interTight = Inter_Tight({
	variable: "--font-inter-tight",
	subsets: ["latin"],
	display: "swap",
});
const instrumentSerif = Instrument_Serif({
	variable: "--font-instrument",
	weight: "400",
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

// Share Tech Mono is used only in the projects section (its own "room").
const shareTechMono = Share_Tech_Mono({
	variable: "--font-share-tech",
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: `${site.name} | ${site.role}`,
		template: `%s | ${site.name}`,
	},
	description: site.pitch,
	icons: { icon: "/images/logo.png" },
	openGraph: {
		type: "website",
		siteName: site.name,
		url: site.url,
		images: ["/images/profile-picture.png"],
	},
	twitter: { card: "summary", creator: "@emsnagano" },
};

// The poster-editorial redesign is light-only. This runs before paint and
// clears any dark class a visitor saved under the old theme toggle.
const themeScript = `(function(){try{document.documentElement.classList.remove("dark")}catch(e){}})()`;

const jsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Person",
		name: site.name,
		givenName: "Emma",
		familyName: "Nagano",
		alternateName: "Emma Ruth Nagano",
		description: `${site.name} is a frontend developer and writer based in the Philippines.`,
		jobTitle: "Frontend Developer",
		url: site.url,
		sameAs: [
			site.url,
			...socials.filter((s) => s.name !== "Email").map((s) => s.url),
			"https://www.instagram.com/xxo.emmy/",
			"https://x.com/emsnagano",
		],
		image: gallery.slice(0, 5).map((g) => site.url + g.src),
		gender: "Female",
		nationality: "Filipino",
		alumniOf: "University of North Florida Coding Bootcamp",
	},
	{
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: site.name,
		url: site.url,
		publisher: { "@type": "Person", name: site.name },
	},
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<Script id="gtm-init" strategy="afterInteractive">
					{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-PWM3QWPW');
					`}
				</Script>
			</head>
			<body
				className={`${interTight.variable} ${instrumentSerif.variable} ${shareTechMono.variable} antialiased`}
			>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-PWM3QWPW"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
				>
					Skip to content
				</a>
				<Providers>
					<SiteNav />
					<main id="main">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
