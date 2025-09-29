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
    image:
      "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/Portfolio%2Funidrop-project-compressed.png?alt=media&token=8057d3ad-3f9e-40d8-8d5d-486a008427d1",
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
    image:
      "https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/Portfolio%2Fwecook-project-compressed.png?alt=media&token=851971d1-23aa-4626-bc0d-f1dbc4ac8cf9",
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
