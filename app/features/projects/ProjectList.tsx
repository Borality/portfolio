import { ExternalLink, Github } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { Tilt } from "~/components/ui/tilt";
import type { Project } from "~/data/projects";

export function ProjectList({ projects }: { projects: Project[] }) {
	return (
		<div className="grid max-w-6xl items-stretch gap-8 py-12 lg:grid-cols-2 xl:grid-cols-3">
			{projects.map((project, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: static list, safe to use index
				<Tilt key={index} rotationFactor={8} isRevese>
					<Card
						key={project.title}
						className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-lg max-w-xl"
					>
						<CardHeader className="p-0">
							<div className="relative aspect-video overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="absolute inset-0 h-full w-full object-cover"
									loading="lazy"
									decoding="async"
									sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
								/>
							</div>
						</CardHeader>
						<CardContent className="flex-1 p-6">
							<CardTitle className="mb-2">{project.title}</CardTitle>
							<CardDescription className="mb-4">
								{project.description}
							</CardDescription>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, techIndex) => (
									<span
										// biome-ignore lint/suspicious/noArrayIndexKey: static list, safe to use index
										key={techIndex}
										className="bg-primary/10 text-primary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
									>
										{tech}
									</span>
								))}
							</div>
						</CardContent>
						<CardFooter className="mt-auto flex gap-2 p-6 pt-0">
							<Button asChild variant="outline" size="sm" className="flex-1">
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`View ${project.title} code on GitHub`}
								>
									<Github className="mr-2 h-4 w-4" />
									Code
								</a>
							</Button>
							{project.liveUrl && (
								<Button asChild size="sm" className="flex-1">
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Open live demo of ${project.title}`}
									>
										<ExternalLink className="mr-2 h-4 w-4" />
										Live Demo
									</a>
								</Button>
							)}
						</CardFooter>
					</Card>
				</Tilt>
			))}
		</div>
	);
}
