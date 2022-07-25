import { useTranslation } from "next-i18next";
import Link from "next/link";

{
  /*
This component takes the news data `allNewsData` as input
and creates a list of news with titles and dates.
*/
}
export default function NewsList({ allNewsData }) {
  const { t } = useTranslation("news-list");
  return (
    <div className="px-4 py-16 mx-auto">
      <ul className="">
        {allNewsData.map(({ id, date, title }) => (
          <li className="" key={id}>
            <Link href={`/news/${id}`}>
              <a className="font-ud hover:text-cyan-600">{title}</a>
            </Link>
            <br />
            <small className="">
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
