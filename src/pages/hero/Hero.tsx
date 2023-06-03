import { FC } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/stack_lottie.json";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="md:mt-32 mt-20 lg:mb-36 mb-10 flex items-center justify-center lg:flex-row flex-col lg:gap-36 gap-2">
      <div className="text-center mt-10">
        <h1 className="font-bold 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
          Charles Trangay
        </h1>
        <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg md:py-5 py-1">
          A Software Engineer
        </h2>
      </div>
      <div className="lg:max-w-sm max-w-[40%] ">
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
};

export default Hero;
