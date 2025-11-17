"use client";

import { useTheme } from "@/context/ThemeContext";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="relative w-20 h-10 rounded-full transition-all duration-300 border border-gray-300 shadow-md flex items-center px-1"
		>
			{/* Sliding knob */}
			<div
				className={`absolute top-1 h-8 w-8 rounded-full flex items-center justify-center 
					transition-transform duration-300
					${
						theme === "dark"
							? "translate-x-1 bg-black text-white shadow-md"
							: "translate-x-10 bg-white text-black shadow-lg"
					}
				`}
			>
				{theme === "dark" ? (
					<MdDarkMode size={20} />
				) : (
					<MdOutlineLightMode size={20} />
				)}
			</div>
		</button>
	);
}
