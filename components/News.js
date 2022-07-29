import Link from "next/link";
import ConvertDate from "./ConvertDate";

export default function News({ allNewsData }) {
  return (
    <div className="py-16 bg-gray-200" id="last-news">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <section>
          <div className="grid grid-cols-12">
            <div className="col-start-4 col-span-6">
              <h2>
                <span className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  News
                </span>
              </h2>
              <hr className="w-full my-4 border-gray-300" />
              <ul>
                {allNewsData.slice(0, 3).map(({ id, date, title }) => (
                  <li key={id}>
                    <Link href={`/news/${id}`} locale="en">
                      <a className="text-xl font-bold my-4">{title}</a>
                    </Link>
                    <br />
                    <small>
                      <p className="text-base mb-4">
                        <ConvertDate dateString={date} />
                      </p>
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
