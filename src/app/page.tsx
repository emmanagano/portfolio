"use client";
import React from "react";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/BentoCards/Hero";
import { Certification } from "./components/BentoCards/Certification";
import Gallery from "./components/BentoCards/Gallery";
import FunAnimation from "./components/BentoCards/FunAnimation";
import IntroVideo from "./components/BentoCards/IntroVideo";
import { Blog } from "./components/BentoCards/Blog";
import { ProjectDemo } from "./components/BentoCards/ProjectDemo";
import Message from "./components/BentoCards/Message";
import { TicTacToe } from "./components/BentoCards/TicTacToe";
import { Snake } from "./components/BentoCards/Snake";

export default function Home() {
	return (
		<main>
			<section
				className="
					md:h-screen
					p-6
				"
			>
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
					{/* Hero */}
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							p-6
							col-start-1
							col-span-12
							row-start-1
							row-span-4
							md:col-start-7
							md:col-span-6
							md:row-start-1
							md:row-span-4
							lg:col-start-4
							lg:col-span-6
							lg:row-start-1
							lg:row-span-4
							bento-box
						"
					>
						<Hero />
					</div>
					{/* Certification --> About Replacement */}
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							p-6
							flex
							justify-center
							items-center
							col-start-1
							col-span-6
							row-start-9
							row-span-2
							md:col-start-1
							md:col-span-3
							md:row-start-1
							md:row-span-1
							lg:col-start-1
							lg:col-span-3
							lg:row-start-1
							lg:row-span-2
							bento-box
						"
					>
						<Certification />
					</div>
					{/* Gallery */}
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl						
							flex
							items-center
							col-start-1
							col-span-6
							row-start-6
							row-span-3
							md:col-start-4
							md:col-span-3
							md:row-start-1
							md:row-span-2
							lg:col-start-1
							lg:col-span-3
							lg:row-start-3
							lg:row-span-3
							bento-box
						"
					>
						<Gallery />
					</div>
					{/* Dark/Light Mode */}
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							p-6
							flex
							justify-center
							items-center
							col-start-4
							col-span-6
							row-start-5
							row-span-1
							md:col-start-4
							md:col-span-3
							md:row-start-3
							md:row-span-1
							lg:col-start-1
							lg:col-span-3
							lg:row-start-6
							lg:row-span-1
							bento-box
						"
					>
						<ThemeToggle />
					</div>
					{/* Blog */}
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							p-6
							flex
							flex-col
							justify-center
							col-start-7
							col-span-6
							row-start-6
							row-span-1
							md:col-start-7
							md:col-span-3
							md:row-start-5
							md:row-span-1
							lg:col-start-4
							lg:col-span-3
							lg:row-start-5
							lg:row-span-1
							bento-box
						"
					>
						<Blog />
					</div>
					{/* Introduction Video */}
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							p-6
							col-start-7
							col-span-6
							row-start-8
							row-span-1
							md:col-start-10
							md:col-span-3
							md:row-start-5
							md:row-span-1
							lg:col-start-7
							lg:col-span-3
							lg:row-start-5
							lg:row-span-1
							bento-box
						"
					>
						<IntroVideo />
					</div>
					{/* Fun Animation */}
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							col-start-1
							col-span-6
							row-start-11
							row-span-1
							md:col-start-7
							md:col-span-3
							md:row-start-6
							md:row-span-1
							lg:col-start-4
							lg:col-span-3
							lg:row-start-6
							lg:row-span-1
							bento-box
						"
					>
						<FunAnimation />
					</div>
					{/* Project Demo */}
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							p-6
							flex
							flex-col
							justify-center
							col-start-7
							col-span-6
							row-start-7
							row-span-1
							md:col-start-10
							md:col-span-3
							md:row-start-6
							md:row-span-1
							lg:col-start-7
							lg:col-span-3
							lg:row-start-6
							lg:row-span-1
							bento-box
						"
					>
						<ProjectDemo />
					</div>
					{/* Skills */}
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							p-6
							col-start-7
							col-span-6
							row-start-9
							row-span-3
							md:col-start-1
							md:col-span-3
							md:row-start-2
							md:row-span-2
							lg:col-start-10
							lg:col-span-3
							lg:row-start-1
							lg:row-span-3
							bento-box
						"
					>
						<Skills />
					</div>
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							col-start-1
							col-span-12
							row-start-12
							row-span-4
							md:col-start-1
							md:col-span-6
							md:row-start-4
							md:row-span-3
							lg:col-start-10
							lg:col-span-3
							lg:row-start-4
							lg:row-span-3
							bento-box
						"
					>
						<Message />
					</div>
				</div>
			</section>
			<section
				className="
					md:h-screen
					p-6
				"
			>
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
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							lg:col-start-1
							lg:col-span-3
							lg:row-start-1
							lg:row-span-4
							bento-box
						"
					>
						<TicTacToe />
					</div>
					<div
						className="
							bg-[var(--secondary)]
							rounded-3xl
							lg:col-start-4
							lg:col-span-3
							lg:row-start-1
							lg:row-span-4
							bento-box
						"
					>
						<Snake />
					</div>
				</div>
			</section>
		</main>
	);
}
