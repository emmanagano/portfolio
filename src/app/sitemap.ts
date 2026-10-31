import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { challenges } from "@/data/challenges";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: site.url, changeFrequency: "weekly", priority: 1 },
		{ url: `${site.url}/about`, changeFrequency: "monthly", priority: 0.9 },
		{ url: `${site.url}/challenges`, changeFrequency: "monthly", priority: 0.7 },
		...challenges.map((c) => ({
			url: `${site.url}/challenges/${c.slug}`,
			changeFrequency: "monthly" as const,
			priority: 0.6,
		})),
		...projects.map((p) => ({
			url: `${site.url}/projects/${p.slug}`,
			changeFrequency: "monthly" as const,
			priority: 0.8,
			images: p.image ? [site.url + p.image] : undefined,
		})),
	];
}
