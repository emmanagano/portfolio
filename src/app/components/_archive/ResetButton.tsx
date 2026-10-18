import { VscDebugRestart } from "react-icons/vsc";

type ResetButtonProps = {
	onClick: () => void;
	active?: boolean;
	className?: string;
};

export function ResetButton({
	onClick,
	active = false,
	className = "",
}: ResetButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`
				w-10 h-10
				flex items-center justify-center
				rounded-full
				border
				transition-all duration-200
				opacity-60 hover:opacity-100
				hover:bg-white/10
				${active ? "ring-2 ring-green-400 bg-green-400/10 opacity-100" : ""}
				${className}
			`}
		>
			<VscDebugRestart />
		</button>
	);
}
