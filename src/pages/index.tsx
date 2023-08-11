import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export default function Home() {

  return (
    <div className={`bg-bg_color text-paragraph_color`}>
      <main className="mx-auto flex w-11/12 flex-col items-center justify-center">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
