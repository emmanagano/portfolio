export type Job = {
	date: string;
	title: string;
	company?: string;
	companyUrl?: string;
	description: string;
	skills: string[];
};

export const jobs: Job[] = [
	{
		date: "2025 — Present",
		title: "Freelance Web Developer",
		description:
			"Designed, developed, and deployed a full blog platform using modern web development practices. Managed the project end-to-end: planning, development, testing, deployment, and performance optimization.",
		skills: ["React", "Next.js", "Tailwind CSS", "SEO", "Google Analytics"],
	},
	{
		date: "2024 — 2025",
		title: "Web Support Specialist",
		company: "ollyolly.com",
		description:
			"Provided technical support and troubleshooting for client websites. Managed site launches, including DNS configuration, migrations, and go-live processes. Collaborated in an Agile/Scrum environment using Jira.",
		skills: ["WordPress", "HTML/CSS", "DNS Management", "Agile/Scrum"],
	},
	{
		date: "2021 — 2022",
		title: "Full-Stack Web Development Program",
		company: "UNF Coding Bootcamp",
		description:
			"Completed an intensive 6-month part-time program focused on full-stack JavaScript. Gained hands-on experience building responsive front-end interfaces and robust back-end APIs, culminating in a comprehensive e-commerce capstone project.",
		skills: ["JavaScript", "React", "Node.js", "PostgreSQL", "Express"],
	},
];
