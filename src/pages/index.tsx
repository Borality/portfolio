import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-300 to-sky-200 text-gray-600">
      <main className="flex flex-col items-center justify-center w-11/12 mx-auto">
        <Hero />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
