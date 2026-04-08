import React from "react";

type BentoSectionProps = {
	children: React.ReactNode;
	className?: string;
};

export function BentoSection({ children, className = "" }: BentoSectionProps) {
	return (
		<section className={`md:h-screen ${className}`}>
			<div
				className="
					grid
					md:h-full
					md:w-full
					[grid-template-columns:repeat(12,1fr)]
					md:[grid-template-rows:repeat(6,1fr)]
					gap-4
					box-border
				"
			>
				{children}
			</div>
		</section>
	);
}
