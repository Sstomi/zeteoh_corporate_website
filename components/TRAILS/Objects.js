import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Objects() {
  const { t } = useTranslation("objects");
  return (
    <div className="bg-hero-background">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-2xl mb-6 font-sans text-3xl font-bold tracking-normal text-gray-100 sm:text-5xl md:mx-auto">
            {t("main-title-1")}
            <br></br>
            {t("main-title-2")}
            <br></br>
            {t("main-title-3")}
          </h2>
        </div>
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full">
                <Image
                  className=""
                  src="/images/Const_dx.png" // Route of the image file
                  height={500} // Desired size with correct aspect ratio
                  width={500} // Desired size with correct aspect ratio
                  alt="ConstructionDX.image"
                />
              </div>
              <h6 className="text-xl mb-2 font-semibold leading-5 text-gray-100">
                {t("object1-title")}
              </h6>
              <ol class="list-disc mb-3 text-base text-gray-100">
                <li>{t("object1-list1")}</li>
                <li>{t("object1-list2")}</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4">
                <Image
                  className=""
                  src="/images/Safety.png" // Route of the image file
                  height={500} // Desired size with correct aspect ratio
                  width={500} // Desired size with correct aspect ratio
                  alt="Helmet.image"
                />
              </div>
              <h6 className="text-xl mb-2 font-semibold leading-5 text-gray-100">
                {t("object2-title")}
              </h6>
              <ol class="list-disc mb-3 text-base text-gray-100">
                <li>{t("object2-list1")}</li>
                <li>{t("object2-list2")}</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4">
                <Image
                  className=""
                  src="/images/Industry4.png" // Route of the image file
                  height={500} // Desired size with correct aspect ratio
                  width={500} // Desired size with correct aspect ratio
                  alt="Industory.image"
                />
              </div>
              <h6 className="text-xl mb-2 font-semibold leading-5 text-gray-100">
                {t("object3-title")}
              </h6>
              <ol class="list-disc mb-3 text-base text-gray-100">
                <li>{t("object3-list1")}</li>
                <li>{t("object3-list2")}</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4">
                <Image
                  className=""
                  src="/images/Smart_city.png" // Route of the image file
                  height={500} // Desired size with correct aspect ratio
                  width={500} // Desired size with correct aspect ratio
                  alt="Smart_city.image"
                />
              </div>
            </div>
            <h6 className="text-xl mb-2 font-semibold leading-5 text-gray-100">
              {t("object4-title")}
            </h6>
            <ol class="list-disc mb-3 text-base text-gray-100">
              <li>{t("object4-list1")}</li>
              <li>{t("object4-list2")}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
