import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const site = {
	name: "Emma Nagano",
	role: "Frontend Web Developer",
	url: "https://emmanagano.com",
	email: "emmaruthnagano@gmail.com",
	location: "Pampanga, Philippines",
	// TODO(emma): confirm pitch line and availability
	pitch: "I design, write, and code websites that feel good to use and are built to last.",
	openToWork: true,
	resumeUrl: "/Emma Nagano's Resume _ Web Dev.pdf",
};

export const socials = [
	{ name: "GitHub", url: "https://github.com/emmanagano", icon: FaGithub },
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/emma-nagano-4a0483246",
		icon: FaLinkedin,
	},
	{ name: "Email", url: `mailto:${site.email}`, icon: FaEnvelope },
];
