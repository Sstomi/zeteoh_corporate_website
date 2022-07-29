import { useTranslation } from "next-i18next";
import Link from "next/link";
import ConvertDate from "./ConvertDate";
{
  /*
This component takes the news data `allNewsData` as input
and creates a list of news with titles and dates.
*/
}
export default function NewsList({ allNewsData }) {
  const { t } = useTranslation("news-list");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
      <div className="max-w-screen-sm sm:mx-auto">
        <h2 className="text-3xl text-center font-bold">News</h2>
        <p className="pt-2 text-center text-base">
          プレスリリース、イベントなど
        </p>
        <hr className="w-full my-8 border-gray-300" />
        <ul className="">
          {allNewsData.map(({ id, date, title }) => (
            <li className="py-2" key={id}>
              <Link href={`/news/${id}`}>
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
