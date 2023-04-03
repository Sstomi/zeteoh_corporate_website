import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Intro() {
  const { t } = useTranslation("intro");
  return (
    <div className="bg-particle-background bg-cover bg-center">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
            <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-5xl md:mx-auto">
            {t("intro-title")}
          </h2>
              <p className="text-base text-gray-100 md:text-lg">
              {t("intro-content")}
                
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                  {t("feature-1")}
                  </h6>
                  <p className="text-sm text-gray-900">
                  {t("feature-1-content")}
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5">
                  {t("feature-2")}
                  </h6>
                  <p className="text-sm text-gray-900">
                  {t("feature-2-content")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="grayscale"
              src="/images/firefighters.jpg" // Route of the image file
              height={3376} // Desired size with correct aspect ratio
              width={6000} // Desired size with correct aspect ratio
              alt="firefighters_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
