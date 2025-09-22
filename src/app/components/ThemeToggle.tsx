// components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/context/ThemeContext";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center py-4 text-sm rounded-md transition-colors duration-200 hover:bg-[var(--primary)]/20 hover:text-[var(--foreground)]">
      <button
        onClick={() => {
          toggleTheme();
        }}
        className="flex flex-col items-center py-4 text-sm rounded-md transition-colors duration-200 hover:bg-[var(--primary)]/20 hover:text-[var(--foreground)]"
      >
        {theme === "dark" ? (
          <MdOutlineLightMode size={24} />
        ) : (
          <MdDarkMode size={24} />
        )}
      </button>
    </div>
  );
}
