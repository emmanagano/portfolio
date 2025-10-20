import { getBlogBySlug } from "@/data/blogs";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { blogs } from "@/data/blogs";
import Link from "next/link";

export function generateStaticParams() {
	return blogs.map((blog) => ({
		slug: blog.slug,
	}));
}

import { Metadata } from "next";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
	const blog = await getBlogBySlug(params.slug);
	if (!blog) return {};

	return {
		title: `${blog.title} | Emma Nagano Blog`,
		description:
			blog.description ||
			"Emma Nagano's blog about growth, healing, and coding.",
		authors: [{ name: "Emma Nagano" }],
		keywords: blog.keywords || [
			"Emma Nagano",
			"personal blog",
			"healing",
			"relationships",
			"tech",
		],
		openGraph: {
			title: blog.title,
			description: blog.description || "",
			type: "article",
			url: `https://emmanagano.com/blogs/${blog.slug}`,
			images: [
				{
					url: `https://emmanagano.com/images/blog-thumbnails/${blog.slug}.jpg`,
					width: 1200,
					height: 630,
					alt: blog.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: blog.title,
			description: blog.description || "",
			images: [
				`https://emmanagano.com/images/blog-thumbnails/${blog.slug}.jpg`,
			],
		},
	};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPost({ params }: any) {
	const blog = await getBlogBySlug(params.slug);
	if (!blog) {
		return notFound();
	}
	const processedContent = await remark().use(html).process(blog.content);
	const contentHtml = processedContent.toString();

	const currentIndex = blogs.findIndex((b) => b.slug === blog.slug);
	const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
	const nextBlog =
		currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

	const truncate = (text: string, limit: number) =>
		text.length > limit ? text.slice(0, limit) + "..." : text;

	return (
		<div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-4 py-12">
			<div className="max-w-3xl mx-auto">
				<div className="flex justify-between text-sm text-[var(--foreground)]/70 mb-4">
					{prevBlog ? (
						<Link
							href={`/blogs/${prevBlog.slug}`}
							className="hover:text-[var(--primary)] transition-colors duration-200"
						>
							&lt;-- {truncate(prevBlog.title, 30)}
						</Link>
					) : (
						<div />
					)}
					{nextBlog ? (
						<Link
							href={`/blogs/${nextBlog.slug}`}
							className="hover:text-[var(--primary)] transition-colors duration-200"
						>
							{truncate(nextBlog.title, 30)} --&gt;
						</Link>
					) : (
						<div />
					)}
				</div>
				<Link
					href="/blogs"
					className="mb-6 inline-block border border-[var(--foreground)]/40 px-4 py-1 rounded hover:bg-[var(--secondary)]/30"
				>
					Back
				</Link>
				<h1 className="text-4xl font-bold leading-tight mb-2">
					{blog.title}
				</h1>
				<p className="text-sm text-[var(--foreground)]/70 mb-6">
					{blog.date}
				</p>
				<article
					className="space-y-6 text-base leading-relaxed"
					dangerouslySetInnerHTML={{ __html: contentHtml }}
				/>
				<div className="flex justify-between text-sm text-[var(--foreground)]/70 mt-8">
					{prevBlog ? (
						<Link
							href={`/blogs/${prevBlog.slug}`}
							className="hover:text-[var(--primary)] transition-colors duration-200"
						>
							&lt;-- {truncate(prevBlog.title, 30)}
						</Link>
					) : (
						<div />
					)}
					{nextBlog ? (
						<Link
							href={`/blogs/${nextBlog.slug}`}
							className="hover:text-[var(--primary)] transition-colors duration-200"
						>
							{truncate(nextBlog.title, 30)} --&gt;
						</Link>
					) : (
						<div />
					)}
				</div>
			</div>
		</div>
	);
}
