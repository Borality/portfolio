import { FC } from "react";
import Button from "@/components/ui/Button";
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
        <HeroMessage className="lg:my-7 my-3">
          Evolving through Obstacles.
          <br /> Empowering through Competition.
        </HeroMessage>
        <Button
          className="lg:text-xl md:text-lg text-md px-6 py-3"
          href="#projects"
        >
          PROJECTS
        </Button>
      </HeroTextShell>
      <HeroImage src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/hero3-transformed.jpeg?alt=media&token=4de0110a-f24c-4eec-a9ee-b5a0468a6fbd" />
    </HeroShell>
  );
};

export default Hero;
