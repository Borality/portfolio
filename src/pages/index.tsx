import Footer from "../components/Footer";
import Projects from "../components/Projects";
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-300 to-sky-200">
      <main className="flex flex-col items-center justify-center w-4/5 mx-auto">
        <div className="text-center my-36">
          <h1 className="font-bold 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Charles Trangay
          </h1>
          <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg md:py-5 py-3">
            A Software Engineer
          </h2>
        </div>
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
