import { FC } from "react";
import MakeCustomCards from "./MakeCustomCards";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="xl:my-28 lg:my-20 md:my-14 my-10" id="projects">
      <div
        className={`text-center font-semibold 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl lg:pb-14 md:pb-8 pb-5 text-gray-800 ${bangers.className}`}
      >
        Projects
      </div>
      <MakeCustomCards />
    </div>
  );
};

export default Projects;
