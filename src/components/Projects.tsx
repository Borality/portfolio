import { FC } from "react";
import MakeCards from "./ui/makecards";
import { ProjectsShell, ProjectsTitle } from "./ui/projects";

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
