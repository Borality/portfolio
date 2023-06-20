import { FC } from "react";
import Image from "next/image";
import CustomButton from "../components/CustomButton";
import { Bangers } from "next/font/google";
const bangers = Bangers({ weight: "400", subsets: ["latin"] });
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="xl:py-[10vh] lg:py-24 md:py-14 py-11 " id="hero">
      <div className=" flex items-center justify-center lg:flex-row flex-col xl:gap-10 lg:gap-20 md:gap-10 gap-4">
        <div className="xl:mb-24">
          <h1
            className={`2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl text-5xl text-gray-900 font-bold ${bangers.className}`}
          >
            Software Engineer
          </h1>
          <h2 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl md:pt-0 pt-0 text-gray-800 font-semibold">
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
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/hero3-transformed.jpeg?alt=media&token=4de0110a-f24c-4eec-a9ee-b5a0468a6fbd"
          width={550}
          height={550}
          alt="Hero image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
          className="lg:max-h-full md:max-h-96 max-h-72 lg:max-w-3xl md:max-w-md max-w-xs object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Hero;
