import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { useState } from "react";

// Fonts
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });
//import { Space_Grotesk } from "next/font/google";
//const space_grotesk = Space_Grotesk({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [pageFixed, setPageFixed] = useState("");

  return (
    <>
      <Navbar setPageFixed={setPageFixed} />
      <main className={rubik.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
