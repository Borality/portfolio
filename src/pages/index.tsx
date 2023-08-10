import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Navbar from "@/components/layouts/Navbar";
import { useState } from "react";

export default function Home() {
  const [pageFixed, setPageFixed] = useState("");

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
