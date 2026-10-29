import { socials } from "@/data/site";

export default function Socials({ size = 22 }: { size?: number }) {
	return (
		<ul className="flex items-center gap-2">
			{socials.map(({ name, url, icon: Icon }) => (
				<li key={name}>
					<a
						href={url}
						target={url.startsWith("mailto:") ? undefined : "_blank"}
						rel="noreferrer"
						aria-label={name}
						className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-sun hover:text-[#1a1423]"
					>
						<Icon size={size} />
					</a>
				</li>
			))}
		</ul>
	);
}
