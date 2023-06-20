import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import { useState } from "react";
export default function Home() {
  // Used to set page in a fixed position if menu is enabled in Navbar
  const [pageFixed, setPageFixed] = useState("");
  return (
    <div
      className={`bg-gradient-to-r from-[#2980B9] via-[#6DD5FA] to-[#FFFFFF] text-gray-700 ${pageFixed}`}
    >
      <Navbar setPageFixed={setPageFixed} />
      <main className="flex flex-col items-center justify-center w-11/12 mx-auto">
        <Hero />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
