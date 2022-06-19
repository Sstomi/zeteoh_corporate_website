import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("hero");
  return (
    <div className="">
      <div className="bg-BG-image">
        <div className="px-4 py-48 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="font-test max-w-xl mb-6 font-ud text-5xl font-bold leading-none tracking-tight text-gray-100 sm:text-7xl md:mx-auto">
                  We detect human activities on wearables with AI.
                </h2>
                <p className="pt-4 font-test font-bold text-base text-indigo-100 md:text-xl">
                  私たちは、小さなディープラーニングモデルを使い、<br></br>
                  スマートフォンで日常の身体活動を自動検知する技術を提供しています。
                  <br></br>
                  <br></br>
                  私たちはこれを、モバイルゲームや
                  <br></br>
                  ウェルビーイングの分野に実装していきます。
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
