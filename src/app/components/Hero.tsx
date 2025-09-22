import Link from "next/link";
import { getAllBlogs } from "@data/blogs";

export default function Hero() {
    const blogs = getAllBlogs(); 
    const latestBlog = blogs.length > 0 ? blogs[0] : null; // changed from latestArticle

    return (
        <section 
            className="relative h-[90vh] w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/30"></div> {/* Optional overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <h1 className="text-5xl font-bold" style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.9)" }}>Hello there, I&apos;m Emma</h1>
                <p className="text-lg mt-4 max-w-2xl" style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.9)" }}>
                    Dive into my world of web development, where I showcase my skills through this meticulously crafted blog site.
                </p>
                {latestBlog && (
                    <Link href={`/blogs/${latestBlog.slug}`}>
                        <button className="px-4 py-2 bg-white text-gray-900 font-medium text-base rounded-md shadow-md border border-gray-900 hover:bg-gray-100 transition-transform transform hover:scale-105 mt-6">
                            Explore
                        </button>
                    </Link>
                )}
            </div>
        </section>
    );
}
