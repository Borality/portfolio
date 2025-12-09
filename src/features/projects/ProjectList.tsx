import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tilt } from "@/components/ui/tilt";
import type { Project } from "@/data/projects";

export function ProjectList({ projects }: { projects: Project[] }) {
	return (
		<div className="mx-auto grid max-w-6xl items-stretch gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
			{projects.map((project, index) => (
				<motion.div
					key={project.title}
					initial={{ opacity: 0, y: 32, scale: 0.95 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{
						duration: 0.5,
						delay: index * 0.08,
						ease: [0.21, 0.47, 0.32, 0.98],
					}}
					className="flex"
				>
					<Tilt rotationFactor={6} isRevese className="flex w-full">
						<Card className="group relative flex h-full w-full flex-col overflow-hidden pt-0 transition-shadow duration-300 hover:shadow-lg">
							{/* Image */}
							<CardHeader className="p-0">
								<div className="relative aspect-16/10 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
										loading="lazy"
										decoding="async"
										sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
									/>
								</div>
							</CardHeader>

							{/* Content */}
							<CardContent className="flex flex-1 flex-col p-6 pb-0">
								{/* Title */}
								<CardTitle className="text-lg font-semibold leading-7 tracking-tight md:text-xl">
									{project.title}
								</CardTitle>

								{/* Description */}
								<CardDescription className="mt-3 text-sm leading-relaxed">
									{project.description}
								</CardDescription>

								{/* Tech stack */}
								<div className="mt-4 flex flex-wrap gap-2">
									{project.technologies.map((tech, techIndex) => (
										<span
											// biome-ignore lint/suspicious/noArrayIndexKey: static list
											key={techIndex}
											className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Spacer to push footer down */}
								<div className="flex-1" />
							</CardContent>

							{/* Footer */}
							<CardFooter className="flex gap-3 border-t border-border/50 p-4 mt-6">
								<Button
									asChild
									variant="ghost"
									size="sm"
									className="group/btn flex-1 gap-2 text-muted-foreground hover:text-foreground"
								>
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`View ${project.title} source code`}
									>
										<Github className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-[-8deg] group-hover/btn:scale-110" />
										Source
									</a>
								</Button>
								{project.liveUrl && (
									<Button asChild size="sm" className="group/btn flex-1 gap-2">
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`View ${project.title} live demo`}
										>
											Demo
											<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
										</a>
									</Button>
								)}
							</CardFooter>
						</Card>
					</Tilt>
				</motion.div>
			))}
		</div>
	);
}
