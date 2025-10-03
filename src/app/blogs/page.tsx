import { getAllBlogs } from "@/data/blogs";
import Link from "next/link";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="mb-8 inline-block border border-[var(--foreground)]/40 px-4 py-1 rounded hover:bg-[var(--secondary)]/30"
        >
          Back
        </Link>
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="flex justify-between border-b border-dashed border-[var(--foreground)]/40 py-2 text-sm hover:underline"
            >
              <span className="flex justify-between w-full">
                <span>{blog.title}</span>
                <span className="text-[var(--foreground)]/50">
                  {blog.readingTime}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
