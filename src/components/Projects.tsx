import { FC } from "react";
import MakeCards from "@/components/ui/MakeCards";
import { ProjectsShell, ProjectsTitle } from "@/components/ui/Projects";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <ProjectsShell id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <MakeCards />
    </ProjectsShell>
  );
};

export default Projects;
