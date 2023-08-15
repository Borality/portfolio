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
    <section className="bg-bg_white">
    <HeroShell id="hero">
      <HeroTextShell>
        <HeroTitle>Software Engineer</HeroTitle>
        <HeroSubTitle>Charles Trangay</HeroSubTitle>
        <HeroMessage className="mb-4 mt-2 md:mb-6 md:mt-3 lg:mb-12 lg:mt-6">
          Evolving through Obstacles.
          <br /> Empowering through Competition.
        </HeroMessage>
        <CustomButton
          className="text-md px-6 py-3 shadow-md shadow-subheading_color hover:shadow-xl hover:shadow-heading_color md:text-lg lg:text-xl"
          href="#projects"
        >
          PROJECTS
        </CustomButton>
      </HeroTextShell>
      <HeroImage src="https://firebasestorage.googleapis.com/v0/b/uploadingfiles-5bb89.appspot.com/o/Portfolio%2Fportfolio-hero-compressed.png?alt=media&token=1b1238a0-37c5-4bc7-bf8c-5774d5c288f0" />
    </HeroShell>
    </section>
  );
};

export default Hero;
