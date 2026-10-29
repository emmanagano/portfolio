"use client";

import { motion } from "framer-motion";

type RevealProps = {
	children: React.ReactNode;
	as?: "div" | "li" | "section";
	delay?: number;
	className?: string;
};

export default function Reveal({ children, as = "div", delay = 0, className }: RevealProps) {
	const Tag = motion[as];
	return (
		<Tag
			className={className}
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "0px 0px -80px 0px" }}
			transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</Tag>
	);
}
