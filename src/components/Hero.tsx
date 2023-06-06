import { FC } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/stack_lottie.json";
import { Button } from "@mui/material";
import CustomButton from "../components/CustomButton";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="xl:mt-52 lg:mt-40 md:mt-20 mt-10 lg:mb-72 md:mb-28 sm:mb-20 mb-10 flex items-center justify-center lg:flex-row flex-col xl:gap-48 lg:gap-20 md:gap-10 gap-4">
      <div className="lg:mt-24 md:mt-4">
        <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold">
          Charles Trangay
        </h1>
        <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl md:pt-5 pt-1">
          Software Engineer
        </h2>
        <div className="my-3">
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
        <div className="py-2">
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
