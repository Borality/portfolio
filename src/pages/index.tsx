import ProjectsSection from "@/components/ProjectsSection";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {

  return (
    <div className={`bg-bg_color text-paragraph_color`}>
      <main className="mx-auto flex w-11/12 flex-col items-center justify-center">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
