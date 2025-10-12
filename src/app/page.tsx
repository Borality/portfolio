import { Header } from "@/components/layouts/header";
import { Hero } from "@/features/home/hero";
import { Projects } from "@/features/home/projects";
import { Contact } from "@/features/home/contact";
import { Footer } from "@/components/layouts/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="content" className="">
        <section
          id="home"
          aria-labelledby="home-heading"
          className="scroll-mt-21"
          style={{
            backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `,
          }}
        >
          <Hero />
        </section>
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="bg-muted/30 scroll-mt-21"
        >
          <Projects />
        </section>
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-21"
        >
          <Contact />
        </section>    
      </main>
      <Footer />
    </>
  );
}
