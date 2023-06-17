import { FC } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/stack_lottie.json";
import CustomButton from "../components/CustomButton";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="xl:py-[18vh] lg:py-24 md:py-16 py-11" id="hero">
      <div className="flex items-center justify-center lg:flex-row flex-col xl:gap-48 lg:gap-20 md:gap-10 gap-4">
        <div>
          <h1
            className={`2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-gray-900 font-bold ${bangers.className}`}
          >
            Software Engineer
          </h1>
          <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl md:pt-0 pt-0 text-gray-700 font-semibold">
            Charles Trangay
          </h2>
          <div className="lg:mt-7 lg:mb-3 mt-2 mb-1">
            <p className="2xl:text-4xl xl:text-2xl lg:text-2xl md:text-xl text-lg lg:max-w-md max-w-xs leading-relaxed">
              Hi, I appreciate building things. Another day brings another
              challenge to seek.
            </p>
          </div>
          <div className="lg:py-2 py-1">
            <CustomButton href="#projects" text="PROJECTS" />
          </div>
        </div>
        <div className="lg:max-w-sm max-w-[40%] ">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
