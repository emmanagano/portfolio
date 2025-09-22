import React from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden p-6 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-[var(--foreground)] mb-2 text-center">
            <a
              href="https://philippinestrategies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-[var(--primary)] underline hover:opacity-90 hover:underline"
            >
              Philippine Strategies
            </a>
          </h2>
          <p className="text-[var(--foreground)]/80 text-sm leading-relaxed mb-4 text-center max-w-2xl">
            A content-driven website built to showcase the client’s political
            and historical articles, while also highlighting consulting and
            security services. The platform is centered on dynamic article
            management: instead of hardcoding new pages, articles are stored as
            Markdown (.md) files that are parsed and rendered automatically,
            making publishing seamless without needing a backend.
          </p>
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="text-sm bg-[var(--secondary)] text-[var(--foreground)] font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-center items-center gap-2">
            <span
              className="animate-point"
              role="img"
              aria-label="pointing hand"
            >
              👉
            </span>
            <a
              href="https://philippinestrategies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] underline hover:text-[var(--primary)] hover:underline"
            >
              Visit the site: philippinestrategies.com
            </a>
          </div>
          <a
            href="https://philippinestrategies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <img
              src="/images/philippinestrategies.png"
              alt="Philippine Strategies"
              className="max-w-xl mx-auto w-full object-cover rounded mt-4"
            />
          </a>
        </div>

        <div className="mt-6 flex justify-center items-center gap-3">
          <span
            className="text-xl animate-point"
            role="img"
            aria-label="pointing hand"
          >
            👉
          </span>
          <a
            href="https://github.com/emmanagano/philippine-strategies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--foreground)] underline hover:underline"
          >
            <FaGithub size={20} />
            <span>View the source code on my GitHub</span>
          </a>
        </div>

        {/* Detailed Description */}
        <div className="mt-8 text-[var(--foreground)] leading-relaxed max-w-none">
          <p className="text-[var(--foreground)] mb-4">
            The site includes several supporting features:
          </p>
          <div className="my-6">
            <p className="mb-2">
              <span className="text-[var(--primary)] font-bold mr-2">-</span>
              Dynamic Content: Articles stored as Markdown (.md) files and
              rendered automatically — no manual page creation needed
            </p>
            <p className="mb-2">
              <span className="text-[var(--primary)] font-bold mr-2">-</span>
              Newsletter: Integrated with{" "}
              <a
                href="https://buttondown.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--foreground)] underline hover:underline"
              >
                Buttondown
              </a>{" "}
              for subscriber updates
            </p>
            <p className="mb-2">
              <span className="text-[var(--primary)] font-bold mr-2">-</span>
              Contact Form:{" "}
              <a
                href="https://www.emailjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--foreground)] underline hover:underline"
              >
                EmailJS
              </a>{" "}
              setup to send messages directly to email inboxes (no backend
              required)
            </p>
            <p className="mb-2">
              <span className="text-[var(--primary)] font-bold mr-2">-</span>
              SEO: Detailed alt text, keyword tagging, and structured
              descriptions for improved search ranking and accessibility
            </p>
            <p className="mb-2">
              <span className="text-[var(--primary)] font-bold mr-2">-</span>
              Analytics: Connected with{" "}
              <span className="font-bold text-[var(--foreground)]">
                Google Analytics
              </span>{" "}
              and{" "}
              <span className="font-bold text-[var(--foreground)]">
                Google Search Console
              </span>{" "}
              for performance tracking
            </p>
            <p className="mb-2">
              <span className="text-[var(--primary)] font-bold mr-2">-</span>
              Content Strategy: Social media management on{" "}
              <span className="font-bold text-[var(--foreground)]">
                X (Twitter)
              </span>{" "}
              to expand reach and engagement
            </p>
            <p className="mb-2">
              <span className="text-[var(--primary)] font-bold mr-2">-</span>
              Hosting: Deployed and hosted on{" "}
              <a
                href="https://www.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--foreground)] underline hover:underline"
              >
                Netlify
              </a>{" "}
              for fast, reliable performance
            </p>
          </div>
          <p className="text-[var(--foreground)] mb-4">
            This project demonstrates my ability to design and implement a
            content-focused site with modern tooling, SEO best practices, and
            practical integrations that balance functionality with efficiency.
          </p>
        </div>
      </div>
    </main>
  );
}
