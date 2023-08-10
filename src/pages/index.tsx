import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div
      className={`bg-gradient-to-r from-[#2980B9] via-[#6DD5FA] to-[#FFFFFF] text-gray-700`}
    >
      <main className="flex flex-col items-center justify-center w-11/12 mx-auto">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
