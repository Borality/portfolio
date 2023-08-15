import ProjectsSection from "@/components/ProjectsSection";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {

  return (
      <main className="bg-bg_white text-paragraph_color">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
  );
}
