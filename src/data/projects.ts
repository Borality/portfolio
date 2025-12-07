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
			"Engineered a seamless file-sharing solution that works across mobile and desktop. Leveraged WebSocket technology for instant transfers with zero configuration—just scan, connect, and share.",
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
			"Designed a culinary companion that transforms meal planning. Features intelligent recipe search, personal collections, and community sharing—all backed by secure authentication and real-time sync.",
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
			"Architected a live multiplayer trivia experience supporting concurrent players. Integrated AI-powered question generation, real-time leaderboards, and comprehensive analytics dashboard.",
		image: "/pangolivia.jpg",
		technologies: [
			"React",
			"TypeScript",
			"Vite",
			"TailwindCSS",
			"shadcn/ui",
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
			"Developed an end-to-end booking system that streamlines barbershop operations. Delivers intuitive appointment scheduling, customer management, and business analytics with a polished, accessible interface.",
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
		title: "CareLink – Healthcare API Backend",
		description:
			"Built a production-ready RESTful API following clean architecture principles. Features comprehensive test coverage, containerized deployment, and optimized database queries for healthcare data management.",
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
