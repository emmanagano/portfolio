import Link from "next/link";

export function Certification() {
	return (
		<div>
			<Link href="/about">
				<img
					src="images/coding-bootcamp-certificate.png"
					alt="Emma Nagano's Coding Bootcamp Certificate from University of North Florida and Fullstack Academy"
					className="cursor-pointer"
				/>
			</Link>
		</div>
	);
}
