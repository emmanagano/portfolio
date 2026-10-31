import type { NextConfig } from "next";

const nextConfig: NextConfig = {
//   output: 'export',
	images: {
		unoptimized: true,
	},
	// Standalone challenge pages live in public/challenges/<slug>/index.html.
	// Next does not serve a folder's index.html on its own, so map each URL to it.
	async rewrites() {
		return [
			{
				source: "/challenges/gamer-sign-up",
				destination: "/challenges/gamer-sign-up/index.html",
			},
		];
	},
};

export default nextConfig;
