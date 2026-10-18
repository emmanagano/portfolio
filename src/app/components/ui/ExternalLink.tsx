import React from "react";

// This tells the component it expects a URL (href) and something inside it (children)
type ExternalLinkProps = {
	href: string;
	children: React.ReactNode;
};

export default function ExternalLink({ href, children }: ExternalLinkProps) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
}
