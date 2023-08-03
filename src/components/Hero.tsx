import { FC } from "react";
import CustomButton from "@/components/CustomButton";
import {
  HeroShell,
  HeroTextShell,
  HeroTitle,
  HeroSubTitle,
  HeroMessageShell,
  HeroMessage,
  HeroImage,
} from "./ui/Hero";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <HeroShell id="hero">
      <HeroTextShell>
        <HeroTitle>Software Engineer</HeroTitle>
        <HeroSubTitle>Charles Trangay</HeroSubTitle>
        <HeroMessageShell>
          <HeroMessage>
            Hi, I appreciate building things. Another day brings another
            challenge to seek.
          </HeroMessage>
        </HeroMessageShell>
        <div className="lg:py-2 py-1">
          <CustomButton
            className="lg:text-xl md:text-lg text-md px-6 py-3"
            href="#projects"
          >
            PROJECTS
          </CustomButton>
        </div>
      </HeroTextShell>
      <HeroImage src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/hero3-transformed.jpeg?alt=media&token=4de0110a-f24c-4eec-a9ee-b5a0468a6fbd" />
    </HeroShell>
  );
};

export default Hero;
