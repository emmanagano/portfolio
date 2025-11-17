"use client";

import Image from "next/image";

const logos = [
	"css.png",
	"express-js.png",
	"ga.png",
	"github.png",
	"google-search-console.png",
	"google-tag-manager.png",
	"html-5.png",
	"jira.png",
	"monday.png",
	"netlify.png",
	"next.js.png",
	"node.js.png",
	"postgresql.png",
	"pressable.png",
	"railway.png",
	"react.png",
	"slack.png",
	"tailwindcss.png",
	"typescript.png",
	"wix.png",
	"wordpress.png",
	"wpengine.png",
];

export default function Skills() {
	return (
		<div className="relative h-full w-full overflow-hidden flex items-center justify-center">
			{/* Scrolling container */}
			<div className="animate-scrollSkills flex flex-col gap-10 absolute top-0 left-0 w-full">
				{logos
					.concat(logos)
					.concat(logos)
					.map((logo, i) => (
						<div
							key={i}
							className="flex items-center justify-center"
						>
							<Image
								src={`/images/tech-stack-icons/${logo}`}
								alt={logo}
								width={100}
								height={100}
								className="opacity-90"
							/>
						</div>
					))}
			</div>

			<style>{`
        @keyframes scrollSkills {
			0% { transform: translateY(0); }
			100% { transform: translateY(-50%); }
			}

			.animate-scrollSkills {
			animation: scrollSkills 50s linear infinite;
			}
			`}</style>
		</div>
	);
}
