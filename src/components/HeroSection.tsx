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
      <HeroImage src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/portfolio-hero-compressed.png?alt=media&token=784548cb-4dbb-49cc-adc1-9554cfadc30d" />
    </HeroShell>
  );
};

export default Hero;
