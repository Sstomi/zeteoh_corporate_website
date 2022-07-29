import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Merit from "../components/Merit";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getSortedPostsData } from "../lib/posts";
import News from "../components/News";

export async function getStaticProps({ locale }) {
  const allNewsData = getSortedPostsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "hero",
        "merit",
        "team",
        "contact",
        "footer",
      ])),
      allNewsData,
    },
  };
}

const Homepage = ({ allNewsData }) => {
  const router = useRouter();
  return (
    <div>
      <>
        <NextSeo
          title="zeteoh, Inc."
          description="We detect human activities on wearables with AI."
          canonical="https://www.canonical.ie/"
          openGraph={{
            url: "https://www.zeteoh.com/",
            title: "zeteoh株式会社",
            description: "AIを使ってウェアラブルで身体活動を検知する",
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
        <Hero />
        <Merit />
        <Team />
        <Contact />
        <News allNewsData={allNewsData} />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
