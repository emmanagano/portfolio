// src/context/ThemeContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>("light");

	// The inline script in layout.tsx already applied the theme before paint;
	// sync React state with it.
	useEffect(() => {
		setTheme(
			document.documentElement.classList.contains("dark")
				? "dark"
				: "light"
		);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		try {
			localStorage.setItem("theme", newTheme);
		} catch {}
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
