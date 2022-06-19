import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Intro() {
  const { t } = useTranslation("intro");
  return (
    <div className="relative flex flex-col-reverse py-16 lg:my-40 lg:py-0 lg:flex-col">
         <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
          <p className="mb-2 text-base font-semibold tracking-wide text-primary-color uppercase">
            私たちについて
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            We Encourage
            <br className="hidden md:block" />
            Millions of People to Exercise
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg">
            データと人工知能（AI）によって、個人や組織がより効率的に、より迅速に意思決定を行うことができ、また健康的なライフスタイルをサポートすることができると考えています。
            特に、ディープラーニングを小型デバイス（スマートフォン、IoT、マイコン）上で使用する、革新的な製品開発を進めています
          </p>
        </div>
      </div>
      <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
      <Image
            className="rounded"
            src="/images/Company/touch-the-earth.png" // Route of the image file
            height={658} // Desired size with correct aspect ratio
            width={920} // Desired size with correct aspect ratio
            alt="Intro-image"
          />
      </div>
     
    </div>
  );
}
