import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Navbar from "../components/Navbar";
import Message from "../components/Message";

import Footer from "../components/Footer";

const Thanks = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      <main>
        <Navbar />
        <Message />
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

export default Thanks;
