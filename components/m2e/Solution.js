import { useTranslation } from "next-i18next";

export default function Solution() {
  const { t } = useTranslation("m2e-solution");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-primary-color uppercase rounded-full border border-primary-color">
            solution
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">zeteohRISE</span>
          </span>{" "}
          
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          スマートフォンで複数の身体活動を検知（歩く・走る・自転車・階段昇り降り）します。
          スマートフォンシェイクなどのチート行為も自動検知します。
          zeteohRISEだけで、歩数計やGPSに頼らずに身体活動を検知できる。
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">コストを削減できる</h6>
            <p className="text-sm text-gray-900">
              zeteohPLAYはチート行為を検知するので、チート行為を防ぐための開発コストを削減します。
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">一つのツールで完結</h6>
            <p className="text-sm text-gray-900">
              zeteohPLAYを実装するだけで、プレイヤーのスマートフォンが複数の身体活動を検知。チート行為も検知します。
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
            実装が簡単
            </h6>
            <p className="text-sm text-gray-900">
              ゲームエンジン
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Privacy by design</h6>
            <p className="text-sm text-gray-900">
            モーションセンサーデータを使用しているので、センシティブではない
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
