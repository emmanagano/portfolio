"use client";
import { useTheme } from "@/context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Hero() {
	const { theme } = useTheme();
	return (
		<div className="flex flex-col items-stretch gap-4">
			<div className="flex flex-col items-center gap-4">
				<img
					src={
						theme === "dark"
							? "/images/profile-picture-dark.png"
							: "/images/profile-picture.png"
					}
					alt="Profile picture"
					className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
				/>
				<h1 className="text-3xl">Emma Nagano</h1>
				<p>Frontend Developer</p>
				<p>
					Front-end developer with 3 years of experience building
					websites from scratch. Previously worked as a Web Support
					Specialist at a digital marketing agency. Earned a coding
					certificate from Fullstack Academy.
				</p>
			</div>
			<div className="flex justify-end w-full gap-3 mt-2 group">
				<a
					href="https://drive.google.com/file/d/15JRmX7tRtsxxt9aLgUFo5NpDwAOjF7D_/view?usp=sharing"
					aria-label="Resume"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--secondary)] transition-transform duration-300 group-hover:scale-110 hover:scale-125"
				>
					<IoDocumentText size={20} />
				</a>

				<a
					href="https://github.com/emmanagano"
					aria-label="GitHub"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--secondary)] transition-transform duration-300 group-hover:scale-110 hover:scale-125"
				>
					<FaGithub size={20} />
				</a>

				<a
					href="https://www.linkedin.com/in/emma-nagano-4a0483246/"
					aria-label="LinkedIn"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--secondary)] transition-transform duration-300 group-hover:scale-110 hover:scale-125"
				>
					<FaLinkedin size={20} />
				</a>

				<a
					href="mailto:emmaruthnagano@gmail.com"
					aria-label="Email"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--secondary)] transition-transform duration-300 group-hover:scale-110 hover:scale-125"
				>
					<MdEmail size={20} />
				</a>
			</div>
		</div>
	);
}
