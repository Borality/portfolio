// Images are served from the public/ folder. In Vite, reference them by path strings.
// e.g. "/fadebook.jpg" resolves to public/fadebook.jpg

export type Project = {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	githubUrl: string;
	liveUrl?: string;
};

export const projects: Project[] = [
	{
		title: "UniDrop – Real-Time Cross-Platform File Transfer",
		description:
			"Built a cross‑platform file sharing app with React Native (mobile) and React (desktop), using Socket.io + Node.js/Express for real‑time communication and Material UI for a consistent interface.",
		image: "/uni-drop.png",
		technologies: [
			"React Native",
			"React",
			"Material UI",
			"JavaScript",
			"Socket.io",
			"Node.js",
			"Express",
		],
		githubUrl: "https://github.com/Borality/UniDrop_mobile",
		liveUrl: "https://github.com/Borality/UniDrop_mobile",
	},
	{
		title: "WeCook – Recipe Discovery & Management Platform",
		description:
			"Built a full‑stack recipe app with React and Firebase, enabling recipe search/saving/uploading, user profiles, and secure authentication.",
		image: "/we-cook.png",
		technologies: [
			"React",
			"JavaScript",
			"Firebase",
			"Authentication",
			"Database",
			"API",
		],
		githubUrl: "https://github.com/Borality/WeCook",
		liveUrl: "https://github.com/Borality/WeCook",
	},
	{
		title: "Pangolivia – Real‑Time Multiplayer Trivia Platform",
		description:
			"A real‑time quiz game with custom quiz creation, AI‑generated questions, live gameplay via SignalR, analytics, leaderboards, and secure JWT authentication. Fully containerized and deployable to Azure.",
		image: "/pangolivia.jpg",
		technologies: [
			"React",
			"TypeScript",
			"Vite",
			"TailwindCSS",
			"shadcn/ui",
			"React Router",
			"React Query",
			"SignalR",
			"ASP.NET Core",
			"Entity Framework Core",
			"SQL Server",
			"Docker",
			"Azure",
		],
		githubUrl: "https://github.com/250908-NET/Pangolins",
		liveUrl: "https://github.com/250908-NET/Pangolins",
	},
	{
		title: "Fadebook – Barber Management Platform",
		description:
			"A full‑stack barbershop booking app with appointment scheduling, customer dashboards, dark mode, and real‑time updates. Built with Next.js, React, TypeScript, Tailwind, and shadcn/ui on the frontend, and ASP.NET Core, SQL Server, and Entity Framework Core on the backend with structured logging.",
		image: "/fadebook.jpg",
		technologies: [
			"C#",
			".NET",
			"TypeScript",
			"React",
			"CSS",
			"React Query",
			"Docker",
		],
		githubUrl: "https://github.com/250908-NET/TheNightOwls",
		liveUrl: "https://github.com/250908-NET/TheNightOwls",
	},
	{
		title: "CareLink – Backend WebAPI With Database Persistence",
		description:
			"Built a RESTful WebAPI in C#/.NET 9 with Entity Framework Core and SQL Server for reliable data persistence. Containerized with Docker to ensure scalability and cross‑platform deployment. Unit tested with XUnit.",
		image:
			"https://images.unsplash.com/photo-1634838080334-28befa9efe80?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		technologies: [
			"C#",
			".NET 9",
			"SQL Server",
			"Entity Framework",
			"API",
			"Docker",
			"XUnit",
		],
		githubUrl:
			"https://github.com/250908-NET/TrangayC/tree/main/Projects/CareLink",
		liveUrl:
			"https://github.com/250908-NET/TrangayC/tree/main/Projects/CareLink",
	},
];
