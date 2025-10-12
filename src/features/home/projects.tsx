import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Tilt } from "@/components/ui/tilt";
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";

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

        <div className="grid max-w-6xl items-stretch gap-8 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Tilt key={index} rotationFactor={8} isRevese>
              <Card
                key={project.title}
                className="group flex h-full flex-col overflow-hidden transition-all hover:shadow-lg"
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                      priority={index === 0}
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
                        key={techIndex}
                        className="bg-primary/10 text-primary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto flex gap-2 p-6 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
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
      </div>
    </div>
  );
}
