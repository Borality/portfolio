import { FC } from "react";
import MakeCards from "@/components/ui/MakeCards";
import { ProjectsShell, ProjectsTitle } from "@/components/ui/Projects";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <ProjectsShell id="projects">
      <ProjectsTitle className="mb-6 text-center md:mb-10 lg:mb-20">
        Projects
      </ProjectsTitle>
      <MakeCards />
    </ProjectsShell>
  );
};

export default Projects;
