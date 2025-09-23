"use client";
import React from "react";

type Skill = { name: string; icon: string; size: "sm" | "md" | "lg" };

const skills: Skill[] = [
  { name: "React", icon: "/images/tech-stack-icons/react.png", size: "lg" },
  { name: "Next.js", icon: "/images/tech-stack-icons/next.js.png", size: "lg" },
  {
    name: "TypeScript",
    icon: "/images/tech-stack-icons/typescript.png",
    size: "md",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tech-stack-icons/tailwindcss.png",
    size: "md",
  },
  { name: "Node.js", icon: "/images/tech-stack-icons/node.js.png", size: "lg" },
  {
    name: "Express.js",
    icon: "/images/tech-stack-icons/express.js.png",
    size: "md",
  },
  {
    name: "PostgreSQL",
    icon: "/images/tech-stack-icons/postgresql.png",
    size: "md",
  },
  { name: "Railway", icon: "/images/tech-stack-icons/railway.png", size: "sm" },
  { name: "Netlify", icon: "/images/tech-stack-icons/netlify.png", size: "sm" },
  { name: "GitHub", icon: "/images/tech-stack-icons/github.png", size: "md" },
  {
    name: "Google Analytics",
    icon: "/images/tech-stack-icons/ga.png",
    size: "lg",
  },
  {
    name: "Google Search Console",
    icon: "/images/tech-stack-icons/google-search-console.png",
    size: "sm",
  },
  {
    name: "Google Tag Manager",
    icon: "/images/tech-stack-icons/google-tag-manager.png",
    size: "sm",
  },
  { name: "CSS", icon: "/images/tech-stack-icons/css.png", size: "sm" },
  { name: "HTML5", icon: "/images/tech-stack-icons/html-5.png", size: "sm" },
  {
    name: "WordPress",
    icon: "/images/tech-stack-icons/wordpress.png",
    size: "sm",
  },
  {
    name: "WPEngine",
    icon: "/images/tech-stack-icons/wpengine.png",
    size: "sm",
  },
  {
    name: "Pressable",
    icon: "/images/tech-stack-icons/pressable.png",
    size: "sm",
  },
  { name: "Slack", icon: "/images/tech-stack-icons/slack.png", size: "sm" },
  {
    name: "Jira",
    icon: "/images/tech-stack-icons/jira.png",
    size: "sm",
  },
  {
    name: "Monday",
    icon: "/images/tech-stack-icons/monday.png",
    size: "sm",
  },
];

const sizeToHeight: Record<Skill["size"], string> = {
  sm: "h-28",
  md: "h-36",
  lg: "h-48",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Skills</h1>

      {/* Pinterest-style masonry using CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {skills.map((s) => (
          <div
            key={s.name}
            className={`mb-4 break-inside-avoid rounded-xl bg-[var(--secondary)] shadow hover:shadow-lg transition ${
              sizeToHeight[s.size]
            }`}
          >
            <div className="h-full w-full p-4 flex flex-col items-center justify-center text-center">
              <img
                src={s.icon}
                alt={s.name}
                className="object-contain max-h-full"
                loading="lazy"
              />
              <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">
                {s.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
