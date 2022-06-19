import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Mission() {
  const { t } = useTranslation("mission");
  return (
    <div className="bg-mission-image">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl sm:leading-none">
          OUR MISSION
        </h2>
        <p className=" text-left text-base text-gray-700 md:text-lg sm:px-4">
          研究によると、年間530万人もの死亡者数は、もっと運動をしていれば減らすことができると分かっています。この数字はコロナウイルスによる2年間の世界の死者数に匹敵するとされています。
          <br></br>
          <br></br>
          運動不足がもたらすのは死だけではありません。幸福感や仕事での生産性にも影響が出ます。テレワークが普及した今、この問題はさらに深刻になります。私たちはこの状況を変えなければなりません。
          <br></br>
          <br></br>
          技術革新の一つ一つのステップが、社会に大きな影響を与える可能性を秘めています。私たちのソリューションは、「多くの人の運動を促進する」という理念のもとで開発されています。
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
    </div>
  );
}
