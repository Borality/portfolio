import Footer from "../components/Footer";
import Projects from "./projects/Projects";
import animationData from "../../public/stack_lottie.json";
import Lottie from "lottie-react";
import Hero from "../pages/hero/Hero";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-300 to-sky-200">
      <main className="flex flex-col items-center justify-center w-11/12 mx-auto">
        <Hero/>
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
