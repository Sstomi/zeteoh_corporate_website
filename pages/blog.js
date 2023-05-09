import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import NavbarNews from "../components/NavbarNews";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";
import { getSortedBlogPostsData } from "../lib/blogPosts";
{
  /* 
When nextjs build the website, this runs
and will output the necessary data for the translation
and the blog data.
*/
}
export async function getStaticProps({ locale }) {
  const allBlogData = getSortedBlogPostsData(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      allBlogData,
      locale,
    },
  };
}
{
  /* 
BlogPage will take the `allBlogData` created above
by `getStaticProps` and send this to the component
`BlogList`.
*/
}
const BlogPage = ({ allBlogData, locale }) => {
  // if the locale is "en", we return the NextSeo in english, otherwise we return it in japanese
  if (locale === "ja") {
  return (
    <div>
      <>
        <NextSeo
          title="ブログ"
          description="当社は、最新の屋内位置測位システムを提供しています。当社のブログでは、革新的な技術を駆使したビジネスの効率化や顧客体験の向上について紹介しています。また、屋内位置測位システムに関する情報や、事例研究などを通じて、ビジネスにおける当技術の利用方法もご紹介しています。"
          canonical="https://www.canonical.ie/" //FIXME: Change this to the correct canonical url
          openGraph={{
            url: "https://www.zeteoh.com/news",
            title: "NIHONGO", // FIXME: translate this
            description: "test", // FIXME: translate this
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
            handle: "@Satomi48650478", // FIXME: this should be zeteoh's handler
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
        <NavbarNews />
        {/* We pass `allBlogData` to the component `BlogList` */}
        <BlogList allBlogData={allBlogData} />
      </main>
      <Footer />
    </div>
  );
  } else {
    return (
      <div>
        <>
          <NextSeo
            title="Blog"
            description="Discover how indoor location systems can revolutionize your business operations. Our expert insights and case studies showcase the benefits of this innovative technology for improving productivity and enhancing customer experiences."
            canonical="https://www.canonical.ie/" //FIXME: Change this to the correct canonical url
            openGraph={{
              url: "https://www.zeteoh.com/news",
              title: "ENGLISH", // FIXME: translate this
              description: "test", // FIXME: translate this
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
              handle: "@Satomi48650478", // FIXME: this should be zeteoh's handler
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
          <NavbarNews />
          {/* We pass `allBlogData` to the component `BlogList` */}
          <BlogList allBlogData={allBlogData} />
        </main>
        <Footer />
      </div>
    );
  }
};
export default BlogPage;
