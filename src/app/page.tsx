"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  return (
    <main className="min-h-screen bg-[var(--background)] p-8 flex items-center justify-center">
      <div className="w-full">
        <header className="mb-10 text-center">
          <img
            src={
              theme === "dark"
                ? "/images/profile-picture-dark.png"
                : "/images/profile-picture.png"
            }
            alt="Profile picture"
            className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
          />
          <h1 className="text-4xl font-bold text-[var(--foreground)]">
            Emma Nagano
          </h1>
          <p className="mt-3 text-[var(--foreground)]">Web Developer</p>
          <div className="mt-4 flex justify-center space-x-4 text-[var(--foreground)]">
            <a
              href="https://www.linkedin.com/in/emma-nagano-4a0483246/"
              aria-label="LinkedIn"
              className="hover:text-[var(--primary)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/xxo.emmy/"
              aria-label="Instagram"
              className="hover:text-[var(--primary)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/emmanagano"
              aria-label="GitHub"
              className="hover:text-[var(--primary)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://x.com/emsnagano"
              aria-label="Twitter/X"
              className="hover:text-[var(--primary)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
          <div className="mt-6">
            <a
              href="/Emma Nagano's Resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-[var(--primary)] text-[var(--foreground)] rounded-md hover:opacity-90 transition"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
          </div>
        </header>

        {/* Quick Nav – Pinterest-style image cards */}
        <nav className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link
            href="/projects"
            className="relative rounded-md overflow-hidden group"
          >
            <div className="relative">
              <img
                src="/images/project-hero-image.png"
                alt="Projects"
                className="h-48 w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[var(--secondary)] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <p className="mt-2 text-left text-lg font-bold text-[var(--foreground)]">
              projects
            </p>
          </Link>
          <Link
            href="/blogs"
            className="relative rounded-md overflow-hidden group"
          >
            <div className="relative">
              <img
                src="/images/blogs-hero-image.png"
                alt="Blogs"
                className="h-48 w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[var(--secondary)] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <p className="mt-2 text-left text-lg font-bold text-[var(--foreground)]">
              blogs
            </p>
          </Link>
          <Link
            href="/about"
            className="relative rounded-md overflow-hidden group"
          >
            <div className="relative">
              <img
                src="/images/about-hero-image.png"
                alt="About"
                className="h-48 w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[var(--secondary)] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <p className="mt-2 text-left text-lg font-bold text-[var(--foreground)]">
              about
            </p>
          </Link>
          <Link
            href="/skills"
            className="relative rounded-md overflow-hidden group"
          >
            <div className="relative">
              <img
                src="/images/skills-hero-image.png"
                alt="Skills"
                className="h-48 w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[var(--secondary)] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg"></div>
            </div>
            <p className="mt-2 text-left text-lg font-bold text-[var(--foreground)]">
              skills
            </p>
          </Link>
        </nav>

        {/* TODO: Replace with your real hero, latest posts, and any sections you want. */}
      </div>
    </main>
  );
}
