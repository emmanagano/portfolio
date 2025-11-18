import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Ensure styles are loaded
import { ThemeProvider } from "@/context/ThemeContext";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Emma Nagano",
	description: "Front-end Web Development",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<Script id="gtm-init" strategy="afterInteractive">
					{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-PWM3QWPW');
					`}
				</Script>
				<Script
					id="schema-person"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
						{
						"@context": "https://schema.org",
						"@type": "Person",
						"name": "Emma Nagano",
						"givenName": "Emma",
						"familyName": "Nagano",
						"alternateName": "Emma Ruth Nagano",
						"description": "Emma Nagano is a web developer and writer based in the Philippines.",
						"jobTitle": "Web Developer",
						"url": "https://emmanagano.com",
						"sameAs": [
							"https://emmanagano.com",
							"https://www.linkedin.com/in/emma-nagano",
							"https://github.com/emmanagano",
							"https://www.instagram.com/xxo.emmy/",
							"https://x.com/emsnagano"
						],
						"image": [
							"https://emmanagano.com/images/emma-nagano/emma-nagano-badass.jpg",
							"https://emmanagano.com/images/emma-nagano/emma-nagano-black-jacket-mirror-selfie.jpg",
							"https://emmanagano.com/images/emma-nagano/emma-nagano-black-tank-top.png",
							"https://emmanagano.com/images/emma-nagano/emma-nagano-blue-dress-hanoi-night.png",
							"https://emmanagano.com/images/emma-nagano/emma-nagano-blurry-motion-portrait.jpg"
						],
						"gender": "Female",
						"nationality": "Filipino",
						"alumniOf": "University of North Florida Coding Bootcamp"
						}
						`,
					}}
				/>

				<Script
					id="schema-website"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
						{
						"@context": "https://schema.org",
						"@type": "WebSite",
						"name": "Emma Nagano",
						"url": "https://emmanagano.com",
						"publisher": {
							"@type": "Person",
							"name": "Emma Nagano"
						}
						}
						`,
					}}
				/>

				<Script
					id="schema-webpage"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
						{
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "Emma Nagano — Web Developer",
						"url": "https://emmanagano.com"
						}
						`,
					}}
				/>

				<Script
					id="schema-images"
					type="application/ld+json"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
						{
						"@context": "https://schema.org",
						"@type": "ItemList",
						"itemListElement": [
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-badass.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-black-jacket-mirror-selfie.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-black-tank-top.png"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-blue-dress-hanoi-night.png"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-blurry-motion-portrait.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-car-selfie.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-car-sunglasses-blue-top.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-cinematic-gaze.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-city-night-view.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-dark-eyeshadow.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-floral-top-portrait.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-hand-on-chin-glasses.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-headphones-natural-look.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-marina-walkway-night.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-mirror-gym-selfie.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-mirror-portrait-bathroom.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-rainbow-road-photo.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-rooftop-photo-night.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-serious-look-glasses.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-smiling-glasses.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-sunglasses-outdoor.jpg"
							},
							{
							"@type": "ImageObject",
							"contentUrl": "https://emmanagano.com/images/emma-nagano/emma-nagano-talking-expression.jpg"
							}
						]
						}
						`,
					}}
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-PWM3QWPW"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				<ThemeProvider>
					{" "}
					{/* ✅ This ensures the Navbar & Footer are on all pages */}
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
