import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function BlogCta() {
  const { t } = useTranslation("blogcta");
  return (
    <div className="">
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="grid max-w-md gap- row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-1 xl:max-w-screen-lg sm:mx-auto">
        <div className="relative flex flex-col justify-between p-8 transition-shadow bg-white border rounded-lg shadow-sm sm:justfy-center hover:shadow">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-base font-medium tracking-wider text-white uppercase rounded bg-stone-600">
              NEXT GENERATION RTLS
            </div>
          </div>
          <div className="text-center">
            <div className="pt-4 text-lg font-semibold">
              {t("sub-title-cta")}
            </div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">TRAILS</div>
            </div>
            <p className="">
            {t("call-to-action")}
            </p>
          </div>
          <div className="">
            <Link href="https://calendar.app.google/M3vmxbvKAuBBc39L9">
            <a className="no-underline my-4 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-color hover:bg-Secondary-color focus:shadow-outline focus:outline-none">
              {t("button_meeting")}
            </a>
            </Link>
            <Link href="/#contact-us">
              <a className="no-underline inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-primary-color transition duration-200 rounded shadow-md bg- hover:bg-Secondary-color focus:shadow-outline focus:outline-none">
                {t("button_contact")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
