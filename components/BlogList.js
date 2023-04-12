import { useTranslation } from "next-i18next";
import Link from "next/link";
import ConvertDate from "./ConvertDate";

/*
This component takes the blog data `allBlogData` as input
and creates a list of blog articles with titles and dates.
*/
export default function BlogList({ allBlogData }) {
  const { t } = useTranslation("blog-list");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
      <div className="py-16 max-w-screen-sm sm:mx-auto">
        <h2 className="text-3xl text-center font-bold">Blog</h2>
        <p className="pt-2 text-center text-base">A blog.</p>
        <hr className="w-full my-8 border-gray-300" />
        <ul className="">
          {allBlogData.map(({ id, date, title }) => (
            <li className="py-2" key={id}>
              <Link href={`/blog/${id}`}>
                <p className="text-xl font-bold">
                  <a className="hover:text-primary-color">{title}</a>
                </p>
              </Link>
              <small className="text-base">
                <ConvertDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
