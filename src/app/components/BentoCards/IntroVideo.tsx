import { FaPlay } from "react-icons/fa";

export default function IntroVideo() {
	return (
		<a
			href="https://youtu.be/JYvZPA22zwE"
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center justify-center w-full h-full"
		>
			<div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FF0000] transition-transform duration-500 hover:rotate-[360deg] shadow-md">
				<FaPlay className="text-white text-xl ml-1" />
			</div>
		</a>
	);
}
