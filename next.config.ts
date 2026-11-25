import type { NextConfig } from "next";
import { projects } from "./src/data/projects";

const nextConfig: NextConfig = {
//   output: 'export',
	images: {
		unoptimized: true,
	},
	// Case-study pages were retired in the poster-editorial redesign: each
	// project tile now links straight to its live site. Old /projects/<slug>
	// links (résumé, LinkedIn) redirect there too.
	// The challenges pages were removed too; send old links home.
	async redirects() {
		return [
			...projects.map((p) => ({
				source: `/projects/${p.slug}`,
				destination: p.liveUrl,
				permanent: true,
			})),
			{ source: "/challenges/:path*", destination: "/", permanent: true },
		];
	},
};

export default nextConfig;
