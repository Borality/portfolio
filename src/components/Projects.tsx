import { FC } from "react";
import MakeCustomCards from "./MakeCustomCards";
interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="my-8">
      <div className="text-center font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg pb-2 md:pb-8 lg:pb-10">
        Projects
      </div>
      <MakeCustomCards />
    </div>
  );
};

export default Projects;
