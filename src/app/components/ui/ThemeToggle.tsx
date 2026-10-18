// src/app/components/ui/ThemeToggle.tsx
"use client";

import { useTheme } from "@/context/ThemeContext";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			aria-label="Toggle Dark Mode"
			className="relative w-16 h-8 rounded-full transition-all duration-300 border border-[var(--foreground)]/20 flex items-center px-1 hover:border-[var(--primary)]/50"
		>
			{/* Sliding knob */}
			<div
				className={`absolute top-1 h-6 w-6 rounded-full flex items-center justify-center transition-transform duration-300
					/* Uses your global CSS variables for perfect contrast! */
					bg-[var(--foreground)] text-[var(--background)]
					${theme === "dark" ? "translate-x-0" : "translate-x-8"}
				`}
			>
				{theme === "dark" ? (
					<MdDarkMode size={14} />
				) : (
					<MdOutlineLightMode size={14} />
				)}
			</div>
		</button>
	);
}
