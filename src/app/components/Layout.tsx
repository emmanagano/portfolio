"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { CiCircleInfo, CiFolderOn } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { HiArrowLeft, HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
			{/* Desktop Sidebar */}
			<aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 bg-[var(--secondary)] border-r border-[var(--foreground)]/20 shadow-md flex-col justify-between">
				<div className="flex items-center justify-center h-20">
					<Link href="/" className="text-lg font-bold">
						<img
							src="/favicon.ico"
							alt="Logo"
							className="h-10 w-10 object-contain"
						/>
					</Link>
				</div>
				<nav className="flex-1 overflow-y-auto py-4 space-y-1 flex flex-col items-center">
					<Link
						href="/"
						className={`flex flex-col items-center py-4 text-sm rounded-md hover:bg-[var(--primary)]/20 transition-colors ${
							pathname === "/"
								? "bg-[var(--primary)]/20 font-semibold"
								: ""
						}`}
					>
						<IoHomeOutline size={24} />
						<span className="text-xs mt-2">Home</span>
					</Link>
					<Link
						href="/projects"
						className={`flex flex-col items-center py-4 text-sm rounded-md hover:bg-[var(--primary)]/20 transition-colors ${
							pathname === "/projects"
								? "bg-[var(--primary)]/20 font-semibold"
								: ""
						}`}
					>
						<CiFolderOn size={24} />
						<span className="text-xs mt-2">Projects</span>
					</Link>
					<Link
						href="/blogs"
						className={`flex flex-col items-center py-4 text-sm rounded-md hover:bg-[var(--primary)]/20 transition-colors ${
							pathname === "/blogs"
								? "bg-[var(--primary)]/20 font-semibold"
								: ""
						}`}
					>
						<TfiWrite size={24} />
						<span className="text-xs mt-2">Blogs</span>
					</Link>
					<Link
						href="/about"
						className={`flex flex-col items-center py-4 text-sm rounded-md hover:bg-[var(--primary)]/20 transition-colors ${
							pathname === "/about"
								? "bg-[var(--primary)]/20 font-semibold"
								: ""
						}`}
					>
						<CiCircleInfo size={24} />
						<span className="text-xs mt-2">About</span>
					</Link>
					<Link
						href="/skills"
						className={`flex flex-col items-center py-4 text-sm rounded-md hover:bg-[var(--primary)]/20 transition-colors ${
							pathname === "/skills"
								? "bg-[var(--primary)]/20 font-semibold"
								: ""
						}`}
					>
						<FaReact size={24} />
						<span className="text-xs mt-2">Skills</span>
					</Link>
					<ThemeToggle />
				</nav>
			</aside>

			{/* Mobile Top Bar */}
			<div className="md:hidden fixed top-0 left-0 w-full h-14 bg-[var(--secondary)] border-b border-[var(--foreground)]/20 flex items-center justify-between px-4 z-[999] shadow-sm">
				<button onClick={() => router.back()}>
					<HiArrowLeft size={24} />
				</button>
				<Link href="/">
					<IoHomeOutline size={26} />
				</Link>
				<button onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
				</button>
			</div>

			{/* Mobile Slide-out Menu */}
			{menuOpen && (
				<div
					className="fixed inset-0 bg-black/40 z-40"
					onClick={() => setMenuOpen(false)}
				>
					<div
						className="absolute left-0 top-14 h-[calc(100%-3.5rem)] w-3/4 bg-[var(--secondary)] p-6 shadow-lg flex flex-col gap-6"
						onClick={(e) => e.stopPropagation()}
					>
						<nav className="flex flex-col gap-4 mt-4">
							<Link
								href="/"
								onClick={() => setMenuOpen(false)}
								className="flex items-center gap-2 text-lg"
							>
								<IoHomeOutline /> Home
							</Link>
							<Link
								href="/projects"
								onClick={() => setMenuOpen(false)}
								className="flex items-center gap-2 text-lg"
							>
								<CiFolderOn /> Projects
							</Link>
							<Link
								href="/blogs"
								onClick={() => setMenuOpen(false)}
								className="flex items-center gap-2 text-lg"
							>
								<TfiWrite /> Blogs
							</Link>
							<Link
								href="/about"
								onClick={() => setMenuOpen(false)}
								className="flex items-center gap-2 text-lg"
							>
								<CiCircleInfo /> About
							</Link>
							<Link
								href="/skills"
								onClick={() => setMenuOpen(false)}
								className="flex items-center gap-2 text-lg"
							>
								<FaReact /> Skills
							</Link>
						</nav>
						<div className="mt-2 flex flex-col items-center bg-[var(--primary)] rounded-lg p-1 shadow-inner">
							<ThemeToggle />
						</div>
					</div>
				</div>
			)}

			{/* Main Content Area */}
			<div className="md:pl-20 pt-14 md:pt-0 flex flex-col min-h-screen">
				<main className="flex-grow w-full">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
