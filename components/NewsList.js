import { useTranslation } from "next-i18next";
import { getSortedNewsData } from "../lib/posts";

export async function getStaticProps({locale}) {
  const allNewsData = getSortedNewsData();
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "footer",
      ])),
      allNewsData,
    },
  };
}


export default function NewsList({allNewsData}) {
  const { t } = useTranslation("newslist");
  return (
    <div className="">
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

export default NewsList;