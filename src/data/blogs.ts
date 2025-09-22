import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Get the path to the blogs folder
const blogsDir = path.join(process.cwd(), "src/content");

// Get all markdown files from /content
export function getAllBlogs() {
    const files = fs.readdirSync(blogsDir);

    return files
        .map((filename) => {
            const filePath = path.join(blogsDir, filename);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data } = matter(fileContents);

            return {
                id: data.id || 0, // Defaults to 0 if no id
                title: data.title,
                description: data.description,
                date: data.date,
                slug: data.slug,
            };
        })
        .sort((a, b) => b.id - a.id); // Sort in descending order
}

// Get a single blog by slug
export function getBlogBySlug(slug: string) {
    const filePath = path.join(blogsDir, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        title: data.title,
        description: data.description,
        date: data.date,
        slug: data.slug,
        image: data.image,
        content,
    };
}

export const blogs = getAllBlogs();
