import BlogLayout from "../../components/BlogLayout";
import { getAllBlogPostIds, getBlogPostData } from "../../lib/blogPosts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import Contact from "../../components/Contact";
import BlogCta from "../../components/BlogCta";
import Callout from "../../components/blog_components/Callout";
import ImageWithCaption from "../../components/blog_components/ImageWithCaption";

export async function getStaticProps({ params, locale }) {
  const postData = await getBlogPostData(params.slug[0], locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "hero",
        "merit",
        "team",
        "contact",
        "footer",
        "blog_list",
        "blogcta",
      ])),
      postData,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllBlogPostIds().map((post) => ({
      params: {
        id: post.id,
        slug: post.slug.split("/"),
      },
      locale: post.locale,
    })),
    fallback: "blocking",
  };
}

export default function Post({ postData }) {
  const { code, frontmatter } = postData;
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <BlogLayout>
      <div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-40">
        <div className="max-w-screen-sm sm:mx-auto">
          <div className="prose lg:prose-lg">
            <h2 className="text-left">{frontmatter.title}</h2>
            <p className="text-left">{frontmatter.description}</p>
            <p className="text-right">{frontmatter.date}</p>
            <article>
              <Component
                components={{
                  Contact,
                  BlogCta,
                  Callout,
                  ImageWithCaption,
                }}
              />
            </article>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
