import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export function ProjectDemo() {
	return (
		<Link
			href="https://philstrats.com/"
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center justify-between text-md font-semibold hover:underline"
		>
			<p>Project Demo</p>
			<FiExternalLink size={32} />
		</Link>
	);
}
