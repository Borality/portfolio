import { FC } from "react";
import Card from "@/components/ui/Card";
import Data from "@/components/Data";
import { ProjectsShell, ProjectsTitle } from "@/components/ui/Projects";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <ProjectsShell id="projects">
      <ProjectsTitle className="mb-6 text-center md:mb-10 lg:mb-20">
        Projects
      </ProjectsTitle>
      <div className="grid grid-cols-1 gap-5 md:gap-9 lg:grid-cols-2">
        {Data.map((props) => (
          <Card key={props.id} {...props}></Card>
        ))}
      </div>
    </ProjectsShell>
  );
};

export default Projects;
