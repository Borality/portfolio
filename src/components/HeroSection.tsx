import { FC } from "react";
import CustomButton from "@/components/ui/CustomButton";
import {
  HeroShell,
  HeroTextShell,
  HeroTitle,
  HeroSubTitle,
  HeroMessage,
  HeroImage,
} from "@/components/ui/Hero";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <HeroShell id="hero">
      <HeroTextShell>
        <HeroTitle>Software Engineer</HeroTitle>
        <HeroSubTitle>Charles Trangay</HeroSubTitle>
        <HeroMessage className="mt-3 mb-6 lg:mt-6 lg:mb-12">
          Evolving through Obstacles.
          <br /> Empowering through Competition.
        </HeroMessage>
        <CustomButton
          className="text-md px-6 py-3 md:text-lg lg:text-xl shadow-md shadow-subheading_color hover:shadow-xl hover:shadow-heading_color"
          href="#projects"
        >
          PROJECTS
        </CustomButton>
      </HeroTextShell>
      <HeroImage src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/hero3-transformed.jpeg?alt=media&token=4de0110a-f24c-4eec-a9ee-b5a0468a6fbd" />
    </HeroShell>
  );
};

export default Hero;
