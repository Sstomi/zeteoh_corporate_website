import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Merit from "../components/Merit";
import Team from "../components/company/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <Merit />
        <Team />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "hero", "merit", "team", "contact", "footer",])),
  },
});

export default Homepage;
