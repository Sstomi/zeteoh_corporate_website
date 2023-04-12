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
const BlogPage = ({ allBlogData }) => {
  return (
    <div>
      <>
        <NextSeo
          title="zeteoh, Inc."
          description="Elevate human potential with the power of AI."
          canonical="https://www.canonical.ie/" //FIXME: Change this to the correct canonical url
          openGraph={{
            url: "https://www.zeteoh.com/news",
            title: "ニュース", // FIXME: translate this
            description: "ニュースやイベントの情報を知ることができます", // FIXME: translate this
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
};

export default BlogPage;
