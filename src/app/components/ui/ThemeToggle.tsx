// src/app/components/ui/ThemeToggle.tsx
"use client";

import { useTheme } from "@/context/ThemeContext";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
	const { toggleTheme } = useTheme();

	// Position and icon come from the `dark` class, not React state,
	// so the toggle is correct on first paint.
	return (
		<button
			onClick={toggleTheme}
			aria-label="Toggle dark mode"
			className="relative flex h-9 w-16 shrink-0 items-center rounded-full border-2 border-foreground bg-surface px-1 transition-colors hover:bg-sun dark:hover:bg-accent"
		>
			<span className="flex h-6 w-6 translate-x-7 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 dark:translate-x-0">
				<MdOutlineLightMode size={14} className="dark:hidden" />
				<MdDarkMode size={14} className="hidden dark:block" />
			</span>
		</button>
	);
}
