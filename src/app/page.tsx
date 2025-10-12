import { Navigation } from "@/components/layouts/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/layouts/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="content" className="px-4 md:px-6">
        <section id="home" aria-labelledby="home-heading">
          <HeroSection />
        </section>
        <section id="projects" aria-labelledby="projects-heading">
          <ProjectsSection />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
