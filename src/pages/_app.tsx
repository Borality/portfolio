import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FooterSection from "@/components/layouts/FooterSection";
import NavbarSection from "@/components/layouts/NavbarSection";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
// Fonts
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });
//import { Space_Grotesk } from "next/font/google";
//const space_grotesk = Space_Grotesk({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Charles Trangay</title>
        <meta name="description" content="Software Engineer | My portfolio" />
      </Head>
      <NavbarSection />
      <main className={rubik.className}>
        <Component {...pageProps} />
      </main>
      <FooterSection />
      <Analytics />
    </>
  );
}
