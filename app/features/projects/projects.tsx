import { TextShimmerWave } from "~/components/ui/text-shimmer-wave";
import { projects } from "~/data/projects";
import { ProjectList } from "~/features/projects/ProjectList";

export function Projects() {
	return (
		<div className="min-h-screen flex items-center justify-center max-w-7xl mx-auto px-4">
			<div>
				<div className="flex flex-col items-center justify-center text-center">
					<div className="space-y-2">
						<h2
							id="projects-heading"
							className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
						>
							<TextShimmerWave duration={2}>Featured Projects</TextShimmerWave>
						</h2>
						<p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Here are some of my memorable projects I enjoyed working on.
						</p>
					</div>
				</div>

				<ProjectList projects={projects} />
			</div>
		</div>
	);
}
