import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

export default function Usecase() {
  const { t } = useTranslation("usecase");
  return (
    <div className="bg-earth-background bg-cover">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-6">
          <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-5xl md:mx-auto">
          {t("usecase-title")}
          </h2>
          <p className="text-base text-gray-100">
          {t("usecase-sub")}
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              className=""
              src="/images/coming_soon.png" // Route of the image file
              height={675} // Desired size with correct aspect ratio
              width={1200} // Desired size with correct aspect ratio
              alt="comingsoon.image"
            />
            <div className="p-5 border border-t-0">
              <a
                aria-label="Category"
                title="Use Case 1"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {t("usecase-name")}
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              className=""
              src="/images/coming_soon.png" // Route of the image file
              height={675} // Desired size with correct aspect ratio
              width={1200} // Desired size with correct aspect ratio
              alt="comingsoon.image"
            />
            <div className="p-5 border border-t-0">
              <a
                aria-label="Category"
                title="Use Case 2"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {t("usecase-name")}
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              className=""
              src="/images/coming_soon.png" // Route of the image file
              height={675} // Desired size with correct aspect ratio
              width={1200} // Desired size with correct aspect ratio
              alt="comingsoon.image"
            />
            <div className="p-5 border border-t-0">
              <a
                aria-label="Category"
                title="Use Case 3"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {t("usecase-name")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
