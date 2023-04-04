import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const { t } = useTranslation("hero_TRAILS");
  return (
    <div className="bg-BG-color py-12">
      <div className="flex flex-col justify-between max-w-xl px-4 py-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl">
        <div className="pt-16 mb-16 lg:mb-0 lg:pt-8 lg:max-w-xl lg:pr-5">
          <div className="max-w-7xl mb-6">
            <h1 className="max-w-2xl mb-6 font-sans text-4xl font-bold leading-none text-white sm:text-6xl md:mx-auto">
              {t("main-title-1")}
              <br></br>
              {t("main-title-2")}
              <br></br>
              {t("main-title-3")}
            </h1>
            <p className="text-base text-gray-100 md:text-lg">
              {t("sub-1")}
              <br></br>
              {t("sub-2")}
              <br></br>
              {t("sub-3")}
            </p>
          </div>
          <div className="flex items-center">
            <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-color hover:bg-Secondary-color focus:shadow-outline focus:outline-none">
              {t("button_meeting")}
            </a>
            <Link href="/#contact-us">
            <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-primary-color transition duration-200 rounded shadow-md bg-white hover:bg-Secondary-color focus:shadow-outline focus:outline-none">
              {t("button_contact")}
            </a>
            </Link>
          </div>
        </div>
        <div className="lg:pt-8">
          <Image
            className=""
            src="/images/hero-top.png" // Route of the image file
            height={1000} // Desired size with correct aspect ratio
            width={1600} // Desired size with correct aspect ratio
            alt="TRAILS_image"
          />
        </div>
      </div>
    </div>
  );
}
