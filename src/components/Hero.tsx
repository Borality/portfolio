import { FC } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/stack_lottie.json";
import CustomButton from "../components/CustomButton";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="xl:my-[24vh] lg:my-28 md:my-16 my-12 flex items-center justify-center lg:flex-row flex-col xl:gap-48 lg:gap-20 md:gap-10 gap-4">
      <div className="">
        <h1
          className={`2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-gray-900 font-bold ${bangers.className}`}
        >
          Charles Trangay
        </h1>
        <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl md:pt-1 pt-0 text-gray-700 font-semibold">
          Software Engineer
        </h2>
        <div className="lg:mt-7 lg:mb-3 mt-2 mb-1">
          <h3 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg">
            I <b>BUILD</b>
          </h3>
          <h3 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg">
            I <b>INNOVATE</b>
          </h3>
          <h3 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg">
            I <b>DELIVER</b>
          </h3>
        </div>
        <div className="lg:py-2 py-1">
          <CustomButton href="#projects" text="PROJECTS" />
        </div>
      </div>
      <div className="lg:max-w-sm max-w-[40%] ">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Hero;
