import { FC } from "react";
import MakeCustomCards from "./MakeCustomCards";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
import { ProjectsShell, ProjectsTitle } from "./ui/Projects";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <ProjectsShell className="xl:py-28 lg:py-20 md:py-14 py-10" id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <MakeCustomCards />
    </ProjectsShell>
  );
};

export default Projects;
