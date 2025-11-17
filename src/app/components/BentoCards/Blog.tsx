import Link from "next/link";
import { SiLibreofficewriter } from "react-icons/si";

export function Blog() {
	return (
		<Link
			href="/blogs"
			className="flex items-center justify-between text-md font-semibold hover:underline"
		>
			<p>Blog</p>
			<SiLibreofficewriter size={32} />
		</Link>
	);
}
