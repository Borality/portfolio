import { FC } from "react";
import MakeCards from "./ui/MakeCards";
import { ProjectsShell, ProjectsTitle } from "./ui/Projects";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <ProjectsShell className="xl:py-28 lg:py-20 md:py-14 py-10" id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <MakeCards />
    </ProjectsShell>
  );
};

export default Projects;
