import { Contact } from "../features/contact/contact";
import { Hero } from "../features/hero/hero";
import { Projects } from "../features/projects/projects";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
	return [
		{
			title: "Charles T. - Full Stack Developer",
			description:
				"Passionate full-stack developer creating beautiful, functional, and user-centered digital experiences. Specializing in React, Next.js, and modern web technologies.",
			keywords: [
				"developer",
				"full-stack",
				"react",
				"nextjs",
				"typescript",
				"portfolio",
			],
			authors: [{ name: "Charles T." }],
		},
	];
}

export default function Home() {
	return (
		<main
			aria-labelledby="home-heading"
			className="scroll-mt-21"
			style={{
				backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `,
			}}
		>
			<section
				id="hero"
				aria-labelledby="hero-heading"
				className="scroll-mt-21"
			>
				<Hero />
			</section>
			<section
				id="projects"
				aria-labelledby="projects-heading"
				className="scroll-mt-21"
			>
				<Projects />
			</section>
			<section
				id="contact"
				aria-labelledby="contact-heading"
				className="scroll-mt-21"
			>
				<Contact />
			</section>
		</main>
	);
}
