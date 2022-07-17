import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { NextSeo } from "next-seo";
import Image from "next/image";

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Newslist({ allPostData }) {
  return (
    <div className="">
      <>
        <NextSeo
          title="zeteoh's News"
          description="News about zeteoh"
          openGraph={{
            url: "https://www.zeteoh.com/newslist",
            title: "News",
            description: "Check our news",
            images: [
              {
                url: "",
                width: 800,
                height: 600,
                alt: "",
                type: "image/png",
              },
              {
                url: "",
                width: 900,
                height: 800,
                alt: "",
                type: "large_image/png",
              },
            ],
            site_name: "",
          }}
          twitter={{
            handle: "",
            site: "",
            cardType: "summary_large_image",
          }}
        />
      </>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd} py-24>
            <p className="text-center text-gray-800"></p>
            zeteohのニュース
            <hr className="w-full my-8 border-gray-300" />
          </section>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <span className="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-cyan-600 text-white rounded">
              New
            </span>
            <h2 className={utilStyles.headingLg}>
              <span className=""></span>
            </h2>
            <ul className={utilStyles.list}>
              {allPostData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/blogs/${id}`}>
                    <a className="font-ud hover:text-cyan-600">{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </Layout>
      </div>
    </div>
  );
}
