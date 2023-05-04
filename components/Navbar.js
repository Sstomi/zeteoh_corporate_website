import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const changeTo = router.locale === "en" ? "ja" : "en";

  return (
    <div className="">
      <nav className="fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/">
                  <a>
                    <Image
                      className="rounded"
                      src="/images/Home/zeteoh_kana_logo.png" // Route of the image file
                      height={39} // Desired size with correct aspect ratio
                      width={138} // Desired size with correct aspect ratio
                      alt="Home"
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/company">
                    <a className="cursor-pointer text-lg text-white hover:text-gray-400 px-3 py-2 rounded-md font-medium">
                      Company
                    </a>
                  </Link>
                  <Link href="/news">
                    <a className="cursor-pointer text-lg text-white hover:text-gray-400 px-3 py-2 rounded-md font-medium">
                      News
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a className="cursor-pointer text-lg text-white hover:text-gray-400 px-3 py-2 rounded-md font-medium">
                      Blog
                    </a>
                  </Link>
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/#contact-us">
                      <a className="cursor-pointer bg-primary-color text-white px-3 py-2 rounded-md text-base font-medium hover:bg-black shadow-lg">
                        CONTACT
                      </a>
                    </Link>
                  </div>
                  <button onClick={() => onToggleLanguageClick(changeTo)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-700  hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-700"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link href="/company">
                  <a className="cursor-pointer text-stone-800 hover:text-stone-400 block px-3 py-2 rounded-md text-base font-medium">
                    COMPANY
                  </a>
                </Link>
                <Link href="/news">
                  <a className="cursor-pointer text-stone-800 hover:text-stone-400 block px-3 py-2 rounded-md text-base font-medium">
                    NEWS
                  </a>
                </Link>
                <Link href="/#contact-us">
                  <a className="cursor-pointer text-stone-800 hover:text-stone-400 block px-3 py-2 rounded-md text-base font-medium">
                    CONTACT
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
