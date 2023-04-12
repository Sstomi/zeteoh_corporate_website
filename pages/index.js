import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/TRAILS/Hero";
import Intro from "../components/TRAILS/Intro";
import Overview from "../components/TRAILS/Overview";
import Usecase from "../components/TRAILS/Usecase";
import Objects from "../components/TRAILS/Objects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { getSortedNewsPostsData } from "../lib/newsPosts";
import News from "../components/News";
import BlogPosts from "../components/BlogPosts";
import { getSortedBlogPostsData } from "../lib/blogPosts";

export async function getStaticProps({ locale }) {
  const allNewsData = getSortedNewsPostsData(locale);
  const allBlogPosts = getSortedBlogPostsData(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "hero_TRAILS",
        "intro",
        "overview",
        "usecase",
        "objects",
        "blog",
        "contact",
        "footer",
        "blog_list",
        "news_list",
      ])),
      allNewsData,
      allBlogPosts,
    },
  };
}

const Homepage = ({ allNewsData, allBlogPosts }) => {
  return (
    <div>
      <>
        <NextSeo
          title="zeteoh, Inc."
          description="Elevate human potential with the power of AI."
          canonical="https://www.canonical.ie/"
          openGraph={{
            url: "https://www.zeteoh.com/",
            title: "ホーム/Home",
            description: "ビーコン不要の屋内位置測位システムTRAILS",
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
        <Intro />
        <Overview />
        <Usecase />
        <Objects />

        <Contact />
        <BlogPosts allBlogPosts={allBlogPosts} />
        <News allNewsData={allNewsData} />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
