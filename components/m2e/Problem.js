import { useTranslation } from "next-i18next";

export default function Problem() {
  const { t } = useTranslation("problem");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-base font-semibold tracking-wider text-primary-color uppercase rounded-full border border-primary-color">
            problem
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            Cheating is a serious problem for game developers to solve, and
            preventing it is a top priority.
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-5xl font-semibold tracking-wide text-gray-600 uppercase">
            💸
          </p>
          <p className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200">
            Increasing Developing cost for "Bad Actors"
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700 text-base">
            Many game developers devote nearly half of their development
            resources to developing anti-fraud systems.
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-5xl font-semibold tracking-wide text-gray-600 uppercase">
            💀
          </p>
          <p className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200">
            Destroy ecosystem in your game
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Cheating undermines the credibility of the game and can destroy the
            game's ecosystem through player defections.
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-5xl font-semibold tracking-wide text-gray-600 uppercase">
            🤕
          </p>
          <p className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400">
            Hurting your branding
            <br></br>
            <br></br>
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Taking the mick middle className bog roll bow ties are cool posh
            nosh off t'shop, stew and dumps.
          </p>
        </div>
      </div>
      <div className="pt-12 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            Additionally, technology had its limitations to detect physical
            activities.
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          The following technolofies are mainly used in M2E games for physical
          activity detection. However, these methods have these disadvantages.
        </p>
        <p className="py-8 text-xl text-gray-900 md:text-3xl font-bold">
          🛰️<span className="">GPS</span>
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          多くのアプリやゲームで身体活動検知に使われているGPSは、位置情報に測位した時間や属性データが紐づくと、個人特定に繋がるセンシティブなデータになります。GPSの使用が規制の対象となりゲーム内のトークンが1日で30%も下落した例もあります。
        </p>
        <p className="py-8 text-xl text-gray-900 md:text-3xl font-bold">
          👟<span className="">Step counter</span>
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          歩数計から得られるデータは、チートが簡単にできるので信頼性の低いデータとも言えます。
        </p>
        <br></br>
        <p className="text-base text-gray-700 md:text-lg">
          これらの方法では、<br></br>
          ・デバイスごとでデータの定義が異なり、プレイヤーに対して公平性を損なう。
          <br></br>
          ・プレイヤーにとって良いユーザー体験を提供しているとは言えないことも挙げられます。
        </p>
      </div>
    </div>
  );
}
