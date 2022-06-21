import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Message() {
  const { t } = useTranslation("message");
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white">
          <div className="pt-1 flex flex-shrink-0">
            {/* <Image
            src="/images/Footer/logo.svg" // Route of the image file
            height={31.7} // Desired size with correct aspect ratio
            width={100} // Desired size with correct aspect ratio
            alt="bcore_logo"
          /> */}
          </div>
        </div>
        <h2 className="mb-4 font-noto text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          お問い合わせありがとうございます
        </h2>
        <p className="font-ud text-base text-gray-700 md:text-lg sm:px-4">
          お問い合わせいただきありがとうございます。<br></br>
          2～3営業日以内に、担当よりメールにて返信させていただきます。
        </p>
        <hr className="w-full my-8 border-gray-300" />
        <Link href="/">
          <a className="font-ud">トップページへ戻る</a>
        </Link>
      </div>
    </div>
  );
}
