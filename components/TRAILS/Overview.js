import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Overview() {
  const { t } = useTranslation("overview");
  return (
    <div className="bg-team-background">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-6">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-gray-100  uppercase rounded-full bg-primary-color">
              SYSTEM OVERVIEW
            </p>
          </div>
          <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-5xl md:mx-auto">
          {t("overview-title")}
          </h2>
          <Image
            className=""
            src="/images/overview.png" // Route of the image file
            height={571} // Desired size with correct aspect ratio
            width={1174} // Desired size with correct aspect ratio
            alt="overview.image"
          />
        </div>
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3 sm:grid-cols-2">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          </div>
          <div className="p-5 duration-300 transform bg-gray-300 border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xl font-bold leading-5">{t("step-1")}</p>
            </div>
            <p className="text-base text-gray-900">
            {t("step-1-content")}
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-gray-300 border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">{t("step-2")}</p>
            </div>
            <p className="text-base text-gray-900">
            {t("step-2-content")}
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-gray-300 border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-lg font-bold leading-5">{t("step-3")}</p>
            </div>
            <p className="text-base text-gray-900">
            {t("step-3-content")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
