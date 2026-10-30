import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./components/Providers";
import SiteNav from "./components/layout/SiteNav";
import Footer from "./components/layout/Footer";
import CursorEffect from "./components/ui/CursorEffect";
import { site, socials } from "@/data/site";
import { gallery } from "@/data/gallery";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
	variable: "--font-bricolage",
	subsets: ["latin"],
});
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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

// Runs before paint so the saved theme applies without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

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
				className={`${inter.variable} ${bricolage.variable} ${geistMono.variable} antialiased`}
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
					<CursorEffect />
			<SiteNav />
					<main id="main">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
