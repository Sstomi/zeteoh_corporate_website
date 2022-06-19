import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Navbar from "../components/Navbar";
import Pagetitle from "../components/company/Pagetitle";
import Intro from "../components/company/Intro";
import Mission from "../components/company/Mission";
import Team from "../components/company/Team";

import Footer from "../components/Footer";

const Homepage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      <main>
        <Navbar />
        <Pagetitle />
        <Intro />
        <Mission />
        <Team />
        
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "hero"])),
  },
});

export default Homepage;