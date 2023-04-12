import Link from "next/link";
import ConvertDate from "./ConvertDate";
import Image from "next/image";

export default function BlogPosts({ allBlogPosts }) {
  return (
    <div class="py-16 bg-gray-200" id="last-news">
      <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <section>
          <div class="grid grid-cols-12">
            <div class="col-start-4 col-span-6">
              <h2>
                <span class="pt-16 mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Latest Blog Articles
                </span>
              </h2>
              <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"></div>
                {allBlogPosts
                  .slice(0, 3)
                  .map(({ id, date, title, thumbnail, summary }) => (
                    <div>
                      {/* Generate a card for each blog article with the title and the date */}
                      <div class="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <Link href={`/blog/${id}`}>
                          <Image
                            className="object-cover w-full h-64 rounded"
                            src={thumbnail} // Route of the image file
                            height={750} // Desired size with correct aspect ratio
                            width={1260} // Desired size with correct aspect ratio
                            alt="Blog Article's thumbnail."
                          />
                          {/* <img
                          src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                          class="object-cover w-full h-64 rounded"
                          alt=""
                        /> */}
                        </Link>
                        <div class="py-5">
                          <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
                            {date}
                          </p>
                          <Link href={`/blog/${id}`}>
                            <p class="text-lg font-bold leading-5">{title}</p>
                          </Link>
                          <p class="mb-4 text-gray-700">{summary}</p>
                        </div>
                      </div>
                      {/* // <Link href={`/blog/${id}`}>
                    //   <a class="text-xl font-bold my-4">{title}</a>
                    // </Link>
                    // <br />
                    // <small>
                    //   <p class="text-base mb-4">
                    //     <ConvertDate dateString={date} />
                    //   </p>
                    // </small> */}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
