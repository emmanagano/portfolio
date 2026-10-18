import { useState, useEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";

interface MessageItem {
	id: number;
	message: string;
	created_at?: string;
	is_from_emma?: boolean;
}

export default function Message() {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(false);

	const [messages, setMessages] = useState<MessageItem[]>([]);

	const messageEndRef = useRef<HTMLDivElement | null>(null);

	const [sendError, setSendError] = useState(false);
	const [isSending, setIsSending] = useState(false);

	function scrollToBottom() {
		if (messageEndRef.current) {
			messageEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}

	async function fetchMessages() {
		setLoading(true);
		const res = await fetch("/api/messages");
		const data = await res.json();
		setMessages(data);
		setLoading(false);
	}

	useEffect(() => {
		fetchMessages();
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	async function sendMessage() {
		if (!text.trim() || isSending) return;

		setIsSending(true);
		setSendError(false);

		try {
			const attemptSend = async () => {
				const res = await fetch("/api/messages", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ message: text }),
				});

				if (!res.ok) throw new Error("Failed");
			};

			let success = false;
			try {
				await attemptSend();
				success = true;
			} catch {}

			if (!success) {
				setSendError(true);
				setIsSending(false);
				return; // Do NOT clear text
			}

			// Success
			setText("");
			fetchMessages();
		} catch {
			setSendError(true);
		} finally {
			setIsSending(false);
		}
	}

	return (
		<div className="p-4 rounded-lg bg-[var(--card)] flex flex-col h-full max-h-[60vh] md:max-h-full min-w-0">
			{/* messages */}
			<div className="flex-1 overflow-y-auto flex flex-col gap-2 pr-1">
				{loading && (
					<div className="w-full flex flex-1 justify-center items-center py-4">
						<div className="flex items-center gap-2">
							<div className="w-3 h-3 bg-[var(--foreground)]/40 rounded-full animate-bounce"></div>
							<div className="w-3 h-3 bg-[var(--foreground)]/40 rounded-full animate-bounce delay-150"></div>
							<div className="w-3 h-3 bg-[var(--foreground)]/40 rounded-full animate-bounce delay-300"></div>
						</div>
					</div>
				)}
				{messages.map((m) => {
					const isEmma = m.is_from_emma;

					return (
						<div
							key={m.id}
							className={`
								flex w-full
								${isEmma ? "justify-end" : "justify-start"}
							`}
						>
							<div
								className={`
									px-4 py-2 text-sm md:text-base max-w-[75%]
									rounded-2xl shadow-md transition-all duration-200
									${
										isEmma
											? "bg-[var(--primary)] text-white rounded-br-sm hover:scale-[1.02]"
											: "bg-[color:color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--foreground)] rounded-bl-sm hover:scale-[1.02]"
									}
								`}
							>
								{m.message}
							</div>
						</div>
					);
				})}
				<div ref={messageEndRef} />
			</div>

			{/* input and button */}
			<div className="flex items-center gap-2 w-full mt-3 min-w-0 overflow-hidden">
				<input
					type="text"
					placeholder="Type your message..."
					className={`flex-1 min-w-0 w-full px-3 py-2 rounded-md bg-[var(--input)] transition-all duration-200
	${sendError ? "border border-red-500" : ""}
`}
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>

				<button
					onClick={sendMessage}
					disabled={isSending}
					className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary)] text-white shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<IoMdSend />
				</button>
			</div>
		</div>
	);
}
