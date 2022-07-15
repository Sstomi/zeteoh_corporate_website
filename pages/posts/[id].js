import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import Contact from "../../components/Contact";

export async function getStaticProps({ params, locale }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "hero",
        "merit",
        "team",
        "contact",
        "footer",
      ])),
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  const {code, frontmatter} = postData
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout>
      <div className="prose lg:prose-xl">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <p>{frontmatter.date}</p>
      <article>
        <Component components={{
          Contact
        }}/>
      </article>
      </div>
    </Layout>
  );
}