import { Navigation } from "@/components/layouts/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/layouts/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="content" className="pt-16 md:pt-20">
        <section id="home" aria-labelledby="home-heading" className="scroll-mt-24">
          <HeroSection />
        </section>
        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24">
          <ProjectsSection />
        </section>
        <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
