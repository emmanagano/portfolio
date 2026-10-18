"use client";
import React from "react";
import clsx from "clsx";

type BentoCardProps = {
	children: React.ReactNode;
	className?: string;
};

export function BentoCard({ children, className = "" }: BentoCardProps) {
	return (
		<div
			suppressHydrationWarning
			className={clsx(
				"bg-[var(--secondary)] rounded-3xl bento-box p-6 flex justify-center items-center",
				className?.replace(/\s+/g, " ").trim(),
			)}
		>
			{children}
		</div>
	);
}
