"use client";

import { useState, useEffect } from "react";
import { ResetButton } from "../ResetButton";

const GRID_SIZE = 20;

function generateFoodPosition(snake: { x: number; y: number }[]) {
	let newFood: { x: number; y: number };

	do {
		newFood = {
			x: Math.floor(Math.random() * GRID_SIZE),
			y: Math.floor(Math.random() * GRID_SIZE),
		};
	} while (snake.some((seg) => seg.x === newFood.x && seg.y === newFood.y));

	return newFood;
}

export function Snake() {
	const [snake, setSnake] = useState([
		{ x: 10, y: 10 },
		{ x: 9, y: 10 },
		{ x: 8, y: 10 },
	]);
	const [direction, setDirection] = useState({ x: 1, y: 0 });
	const [food, setFood] = useState({ x: 5, y: 5 });
	const [gameOver, setGameOver] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	function resetGame() {
		setSnake([
			{ x: 10, y: 10 },
			{ x: 9, y: 10 },
			{ x: 8, y: 10 },
		]);
		setDirection({ x: 1, y: 0 });
		setFood(
			generateFoodPosition([
				{ x: 10, y: 10 },
				{ x: 9, y: 10 },
				{ x: 8, y: 10 },
			]),
		);
		setGameOver(false);
		setIsPlaying(false);
	}

	useEffect(() => {
		if (!isPlaying) return;

		const speed = Math.max(60, 150 - snake.length * 5);

		const interval = setInterval(() => {
			setSnake((prev) => {
				if (gameOver) return prev;

				const head = prev[0];
				const newHead = {
					x: head.x + direction.x,
					y: head.y + direction.y,
				};

				// wall collision
				if (
					newHead.x < 0 ||
					newHead.x >= GRID_SIZE ||
					newHead.y < 0 ||
					newHead.y >= GRID_SIZE
				) {
					setGameOver(true);
					return prev;
				}

				// self collision
				if (
					prev.some(
						(seg) => seg.x === newHead.x && seg.y === newHead.y,
					)
				) {
					setGameOver(true);
					return prev;
				}

				const isEating = newHead.x === food.x && newHead.y === food.y;

				if (isEating) {
					setFood(generateFoodPosition(prev));
					return [newHead, ...prev];
				}

				return [newHead, ...prev.slice(0, -1)];
			});
		}, speed);

		return () => clearInterval(interval);
	}, [direction, gameOver, isPlaying, food, snake.length]);

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (!isPlaying) return;

			if (
				["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
					e.key,
				)
			) {
				e.preventDefault();
			}

			if (e.key === "ArrowUp" && direction.y !== 1) {
				setDirection({ x: 0, y: -1 });
			}
			if (e.key === "ArrowDown" && direction.y !== -1) {
				setDirection({ x: 0, y: 1 });
			}
			if (e.key === "ArrowLeft" && direction.x !== 1) {
				setDirection({ x: -1, y: 0 });
			}
			if (e.key === "ArrowRight" && direction.x !== -1) {
				setDirection({ x: 1, y: 0 });
			}
		}

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [direction, isPlaying]);

	const grid = [];

	for (let y = 0; y < GRID_SIZE; y++) {
		for (let x = 0; x < GRID_SIZE; x++) {
			const isHead = snake[0].x === x && snake[0].y === y;

			const isSnake = snake.some(
				(segment) => segment.x === x && segment.y === y,
			);

			const isFood = food.x === x && food.y === y;

			grid.push(
				<div
					key={`${x}-${y}`}
					className={`
						w-3 h-3
						${
							gameOver
								? "bg-red-500/40"
								: isHead
									? "bg-green-600"
									: isSnake
										? "bg-green-400"
										: isFood
											? "bg-red-400"
											: "bg-gray-200/40 dark:bg-white/5"
						}
						rounded-sm
					`}
				/>,
			);
		}
	}

	return (
		<div className="flex flex-col items-center justify-center h-full gap-3">
			<button
				onClick={() => setIsPlaying(true)}
				disabled={isPlaying}
				className={`
					text-xs px-3 py-1 rounded-full border
					${isPlaying ? "opacity-40 cursor-not-allowed" : "border-green-400 text-green-400 hover:opacity-80"}
				`}
			>
				Play
			</button>

			<div className="text-sm opacity-80">
				{gameOver
					? "Game Over 💀"
					: isPlaying
						? `Score: ${snake.length - 1}`
						: "Snake"}
			</div>

			<div
				className="grid border-2 border-gray-400 dark:border-white/30 bg-white/60 dark:bg-white/5 rounded-xl p-2 shadow-sm"
				style={{
					gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
				}}
			>
				{grid}
			</div>

			<ResetButton
				onClick={resetGame}
				active={gameOver}
				className="mt-2"
			/>
		</div>
	);
}
