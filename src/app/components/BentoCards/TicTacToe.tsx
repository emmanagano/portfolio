"use client";
import { useState, useEffect } from "react";
import { ResetButton } from "../ResetButton";

export function TicTacToe() {
	const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
	const [isXTurn, setIsXTurn] = useState(true);
	const [vsAI, setVsAI] = useState(false);

	const result = calculateWinner(board);
	const winner = result?.player;
	const winningLine = result?.line || [];
	const isDraw = !winner && board.every((cell) => cell !== null);
	const hasStarted = board.some((cell) => cell !== null);

	useEffect(() => {
		if (vsAI && !isXTurn && !winner) {
			const timeout = setTimeout(() => {
				const bestMove = getBestMove(board);
				if (bestMove !== null) {
					const newBoard = [...board];
					newBoard[bestMove] = "O";
					setBoard(newBoard);
					setIsXTurn(true);
				}
			}, 400); // slight delay for realism

			return () => clearTimeout(timeout);
		}
	}, [board, isXTurn, vsAI, winner]);

	function handleClick(index: number) {
		if (board[index] || winner) return;

		const newBoard = [...board];
		newBoard[index] = isXTurn ? "X" : "O";
		setBoard(newBoard);
		setIsXTurn(!isXTurn);
	}

	function resetGame() {
		setBoard(Array(9).fill(null));
		setIsXTurn(true);
	}

	return (
		<div className="flex flex-col items-center justify-center gap-4 h-full">
			<div className="flex items-center gap-2 text-xs opacity-80 bg-[var(--secondary)] px-3 py-1 rounded-full border border-gray-400 shadow-sm -mt-2">
				<span>2P</span>
				<button
					onClick={() => {
						if (hasStarted) return;
						setVsAI(!vsAI);
					}}
					disabled={hasStarted}
					className={`
						w-10 h-5 rounded-full transition
						${vsAI ? "bg-green-500" : "bg-gray-400"}
						${hasStarted ? "opacity-50 cursor-not-allowed" : ""}
						relative
					`}
				>
					<div
						className={`
							w-4 h-4 bg-white rounded-full absolute top-0.5 transition
							${vsAI ? "left-5" : "left-0.5"}
						`}
					/>
				</button>
				<span>AI</span>
			</div>
			<div
				className={`w-full flex flex-col items-center border border-white/5 rounded-2xl p-2`}
			>
				<div className="text-sm opacity-80 mb-1">
					{winner
						? `Winner: ${winner}`
						: isDraw
							? "Draw"
							: vsAI
								? isXTurn
									? "Your Turn (X)"
									: "AI Thinking..."
								: `Turn: ${isXTurn ? "X" : "O"}`}
				</div>
				<div className={`grid grid-cols-3 gap-2`}>
					{board.map((cell, i) => (
						<button
							key={i}
							onClick={() => handleClick(i)}
							className={`
							w-20 h-20
							rounded-xl
							text-2xl font-bold
							border border-gray-400
							transition
							${
								winningLine.includes(i)
									? "bg-green-400/30 scale-105"
									: isDraw
										? "bg-rose-400/20 text-rose-200"
										: "bg-white/10 hover:bg-white/20"
							}
						`}
						>
							{cell}
						</button>
					))}
				</div>
			</div>

			<ResetButton onClick={resetGame} active={!!(winner || isDraw)} />
		</div>
	);
}

function calculateWinner(board: (string | null)[]) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (const [a, b, c] of lines) {
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return { player: board[a], line: [a, b, c] };
		}
	}

	return null;
}

function getBestMove(board: (string | null)[]) {
	let bestScore = -Infinity;
	let move: number | null = null;

	for (let i = 0; i < 9; i++) {
		if (!board[i]) {
			board[i] = "O";
			const score = minimax(board, 0, false);
			board[i] = null;

			if (score > bestScore) {
				bestScore = score;
				move = i;
			}
		}
	}

	return move;
}

function minimax(
	board: (string | null)[],
	depth: number,
	isMaximizing: boolean,
) {
	const result = calculateWinner(board);
	if (result) {
		if (result.player === "O") return 10 - depth;
		if (result.player === "X") return depth - 10;
	}

	if (board.every((cell) => cell !== null)) {
		return 0;
	}

	if (isMaximizing) {
		let bestScore = -Infinity;
		for (let i = 0; i < 9; i++) {
			if (!board[i]) {
				board[i] = "O";
				const score = minimax(board, depth + 1, false);
				board[i] = null;
				bestScore = Math.max(score, bestScore);
			}
		}
		return bestScore;
	} else {
		let bestScore = Infinity;
		for (let i = 0; i < 9; i++) {
			if (!board[i]) {
				board[i] = "X";
				const score = minimax(board, depth + 1, true);
				board[i] = null;
				bestScore = Math.min(score, bestScore);
			}
		}
		return bestScore;
	}
}
