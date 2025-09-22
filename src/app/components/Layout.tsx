"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { CiCircleInfo, CiFolderOn } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* LEFT SIDEBAR NAV */}
      <aside className="fixed left-0 top-0 h-screen w-20 bg-[var(--secondary)] text-[var(--foreground)] border-r border-[var(--foreground)]/20 shadow-md flex flex-col">
        {/* Brand */}
        <div className="flex items-center justify-center h-20">
          <Link href="/" className="text-lg font-bold">
            <img
              src="/favicon.ico"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
          </Link>
        </div>
        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto py-4 space-y-1">
          <Link
            href="/"
            className={`flex flex-col items-center py-4 text-sm rounded-md transition-colors duration-200 hover:bg-[var(--primary)]/20 hover:text-[var(--foreground)] ${
              pathname === "/"
                ? "bg-[var(--primary)]/20 text-[var(--foreground)] font-semibold"
                : ""
            }`}
          >
            <IoHomeOutline size={24} />
            <span className="text-xs mt-2">Home</span>
          </Link>
          <Link
            href="/projects"
            className={`flex flex-col items-center py-4 text-sm rounded-md transition-colors duration-200 hover:bg-[var(--primary)]/20 hover:text-[var(--foreground)] ${
              pathname === "/projects"
                ? "bg-[var(--primary)]/20 text-[var(--foreground)] font-semibold"
                : ""
            }`}
          >
            <CiFolderOn size={24} />
            <span className="text-xs mt-2">Projects</span>
          </Link>
          <Link
            href="/blogs"
            className={`flex flex-col items-center py-4 text-sm rounded-md transition-colors duration-200 hover:bg-[var(--primary)]/20 hover:text-[var(--foreground)] ${
              pathname === "/blogs"
                ? "bg-[var(--primary)]/20 text-[var(--foreground)] font-semibold"
                : ""
            }`}
          >
            <TfiWrite size={24} />
            <span className="text-xs mt-2">Blogs</span>
          </Link>
          <Link
            href="/about"
            className={`flex flex-col items-center py-4 text-sm rounded-md transition-colors duration-200 hover:bg-[var(--primary)]/20 hover:text-[var(--foreground)] ${
              pathname === "/about"
                ? "bg-[var(--primary)]/20 text-[var(--foreground)] font-semibold"
                : ""
            }`}
          >
            <CiCircleInfo size={24} />
            <span className="text-xs mt-2">About</span>
          </Link>
          <Link
            href="/skills"
            className={`flex flex-col items-center py-4 text-sm rounded-md transition-colors duration-200 hover:bg-[var(--primary)]/20 hover:text-[var(--foreground)] ${
              pathname === "/skills"
                ? "bg-[var(--primary)]/20 text-[var(--foreground)] font-semibold"
                : ""
            }`}
          >
            <FaReact size={24} />
            <span className="text-xs mt-2">Skills</span>
          </Link>
          <ThemeToggle />
        </nav>
      </aside>
      {/* MAIN CONTENT AREA (shifted right) */}
      <div className="pl-20 flex min-h-screen flex-col">
        {/* Main Content */}
        <main className="flex-grow w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
