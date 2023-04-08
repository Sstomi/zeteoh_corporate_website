import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero_company from "../components/COMPANY/Hero_company";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getSortedNewsPostsData } from "../lib/newsPosts";
import News from "../components/News";

export async function getStaticProps({ locale }) {
  const allNewsData = getSortedNewsPostsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "hero_company",
        "team",
        "contact",
        "footer",
      ])),
      allNewsData,
    },
  };
}

const Companypage = ({ allNewsData }) => {
  const router = useRouter();
  return (
    <div>
      <>
        <NextSeo
          title="zeteoh, Inc."
          description="Elevate human potential with the power of AI."
          canonical="https://www.canonical.ie/"
          openGraph={{
            url: "https://www.zeteoh.com/company",
            title: "企業情報/Company",
            description: "企業理念とビジョンを知ることができます",
            images: [
              {
                url: "https://www.zeteoh.com/images/Home/card-01.png",
                width: 800,
                height: 600,
                alt: "zeteoh-card",
                type: "image/jpeg",
              },
              {
                url: "https://www.zeteoh.com/images/Home/card-01.png",
                width: 900,
                height: 800,
                alt: "zeteoh-card",
                type: "image/jpeg",
              },
            ],
            site_name: "zeteoh",
          }}
          twitter={{
            handle: "@Satomi48650478",
            site: "@zeteoh_ai",
            cardType: "summary_large_image",
          }}
        />
      </>
      <Head>
        <title>zeteoh, Inc.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <Navbar />
        <Hero_company />
        <Team />
        <Contact />
        <News allNewsData={allNewsData} />
      </main>
      <Footer />
    </div>
  );
};

export default Companypage;
