import React from "react";
// Import the icons you want to use
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Socials() {
	// Add the 'icon' property to your array
	const socialLinks = [
		{
			name: "GitHub",
			url: "https://github.com/emmanagano",
			icon: FaGithub,
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/emma-nagano-4a0483246",
			icon: FaLinkedin,
		},
		{
			name: "Email",
			url: "mailto:emmaruthnagano@gmail.com",
			icon: FaEnvelope,
		},
	];

	return (
		<ul className="flex items-center gap-6">
			{socialLinks.map((link) => {
				// Assign the icon to a capitalized variable so React knows it's a component
				const Icon = link.icon;

				return (
					<li
						key={link.name}
						// Added a subtle 'pop' up animation and color change on hover!
						className="opacity-60 hover:opacity-100 hover:text-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
					>
						<a
							href={link.url}
							target="_blank"
							rel="noreferrer"
							aria-label={
								link.name
							} /* Important for accessibility since we removed the text! */
						>
							<Icon size={24} />
						</a>
					</li>
				);
			})}
		</ul>
	);
}
