import { FC } from "react";
import MakeCustomCards from "./MakeCustomCards";
interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="xl:my-20 lg:my-15 md:my-10 sm:md-8 my-5" id="projects">
      <div className="text-center font-semibold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:pb-14 md:pb-8 pb-4">
        Projects
      </div>
      <MakeCustomCards />
    </div>
  );
};

export default Projects;
