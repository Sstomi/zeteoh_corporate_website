import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Merit from "../components/Merit";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  const router = useRouter();
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <Merit />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "hero",
      "merit",
      "team",
      "contact",
      "footer",
    ])),
  },
});

export default Homepage;
