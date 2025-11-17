import { useState, useEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";

interface MessageItem {
	id: number;
	message: string;
	created_at?: string;
}

export default function Message() {
	const [text, setText] = useState("");

	const [messages, setMessages] = useState<MessageItem[]>([]);

	const messageEndRef = useRef<HTMLDivElement | null>(null);

	function scrollToBottom() {
		if (messageEndRef.current) {
			messageEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}

	async function fetchMessages() {
		const res = await fetch("/api/messages");
		const data = await res.json();
		setMessages(data);
	}

	useEffect(() => {
		fetchMessages();
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	async function sendMessage() {
		if (!text.trim()) return;

		await fetch("/api/messages", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message: text }),
		});

		setText("");
		fetchMessages();
	}

	return (
		<div className="p-4 rounded-lg bg-[var(--card)] flex flex-col h-full">
			{/* messages */}
			<div className="flex-1 overflow-y-auto flex flex-col gap-2 pr-1">
				{messages.map((m) => (
					<div
						key={m.id}
						className="px-4 py-2 max-w-[80%] rounded-xl rounded-bl-none shadow-sm bg-[color:color-mix(in_srgb,var(--primary)_10%,transparent)]"
					>
						{m.message}
					</div>
				))}
				<div ref={messageEndRef} />
			</div>

			{/* input and button */}
			<div className="flex items-center gap-2 w-full mt-3">
				<input
					type="text"
					placeholder="Type your message..."
					className="flex-1 px-3 py-2 rounded-md bg-[var(--input)]"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>

				<button
					onClick={sendMessage}
					className="flex items-center justify-center px-3 py-2 rounded-md bg-[var(--primary)] text-white"
				>
					<IoMdSend />
				</button>
			</div>
		</div>
	);
}
