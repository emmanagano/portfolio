"use client";
import React from "react";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/BentoCards/Hero";
import { Certification } from "./components/BentoCards/Certification";
import Gallery from "./components/BentoCards/Gallery";
import FunAnimation from "./components/BentoCards/FunAnimation";
import IntroVideo from "./components/BentoCards/IntroVideo";
import { ProjectDemo } from "./components/BentoCards/ProjectDemo";
import Message from "./components/BentoCards/Message";
import { TicTacToe } from "./components/BentoCards/TicTacToe";
import { Snake } from "./components/BentoCards/Snake";
import { BentoCard } from "./components/BentoCard";
import { BentoSection } from "./components/BentoSection";
import { bentoGrid } from "./components/BentoGrid";
import NeonSign from "./components/BentoCards/FunShapes";

export default function Home() {
	return (
		<main>
			<BentoSection className="p-6">
				<BentoCard className={bentoGrid.hero}>
					<Hero />
				</BentoCard>
				<BentoCard className={bentoGrid.certification}>
					<Certification />
				</BentoCard>
				<BentoCard className={bentoGrid.gallery}>
					<Gallery />
				</BentoCard>
				<BentoCard className={bentoGrid.themeToggle}>
					<ThemeToggle />
				</BentoCard>
				<BentoCard className={bentoGrid.introVideo}>
					<IntroVideo />
				</BentoCard>
				<BentoCard className={bentoGrid.funAnimation}>
					<FunAnimation />
				</BentoCard>
				<BentoCard className={bentoGrid.projectDemo}>
					<ProjectDemo />
				</BentoCard>
				<BentoCard className={bentoGrid.skills}>
					<Skills />
				</BentoCard>
				<BentoCard className={bentoGrid.message}>
					<Message />
				</BentoCard>
			</BentoSection>
			<BentoSection className="px-6 pb-6">
				<BentoCard className={bentoGrid.funShapes}>
					<NeonSign />
				</BentoCard>
				<BentoCard className={bentoGrid.ticTacToe}>
					<TicTacToe />
				</BentoCard>
				<BentoCard className={bentoGrid.snake}>
					<Snake />
				</BentoCard>
			</BentoSection>
		</main>
	);
}
