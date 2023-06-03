import { FC } from "react";
import MakeCustomCards from "../../components/MakeCustomCards";
interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="lg:my-14 md:my-10 my-5">
      <div className="text-center font-semibold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl pb-2 md:pb-8 lg:pb-10">
        Projects
      </div>
      <MakeCustomCards />
    </div>
  );
};

export default Projects;
