import Link from "next/link";
import Date from "./date";

export default function News({ allPostData }) {
  return (
    <div className="py-16 bg-gray-200">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <section>
          <div className="grid grid-cols-12">
            <div className="col-start-4 col-span-6">
              <h2>
                <span className="">ニュース</span>
              </h2>
              <ul>
                {allPostData.slice(0, 3).map(({ id, date, title }) => (
                  <li key={id}>
                    <Link href={`/posts/${id}`}>
                      <a className="">{title}</a>
                    </Link>
                    <br />
                    <small>
                      <p className="">
                        <Date dateString={date} />
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
