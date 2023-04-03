import { useRouter } from "next/router";
import * as React from "react";
import { useTranslation } from "next-i18next";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const router = useRouter();
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => router.push(form.getAttribute("action")))
      .catch((error) => alert(error));
  };
  const { t } = useTranslation("contact");

  return (
    <form
      className="container px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      method="POST"
      name="contact-form"
      action="thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <div className="py-12 mx-auto">
        <div id="contact-us">
          <p className="text-3xl font-bold text-center md:text-4xl leading-none tracking-tight text-gray-900 sm:text-4xl">
            {t("contact_title")}
          </p>
          <p className="font-ud mt-2 pt-8 text-lg text-gray-600 md:text-center">
            {t("contact_text-1")}
            <br></br>
            {t("contact_text-2")}
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid md:grid-cols-8">
            <label className="pt-4 block md:col-start-3 col-span-4">
              <span className="font-ud text-gray-700">{t("contact_name")}</span>
              <input
                type="text"
                className="bg-gray-100 mt-1 block w-full border border-gray-200 py-3 px-2"
                name="お名前"
                placeholder={t("contact_placeholder_name")}
                onChange={handleChange}
              />
            </label>
            <label className="pt-4 block md:col-start-3 col-span-4">
              <span className="text-gray-700">{t("contact_company")}</span>
              <input
                type="text"
                className="bg-gray-100 mt-1 block w-full border border-gray-200 py-3 px-2"
                name="会社名"
                placeholder={t("contact_placeholder_company")}
                onChange={handleChange}
              />
            </label>
            <label className="pt-4 block md:col-start-3 col-span-4">
              <span className="text-gray-700">{t("contact_email")}</span>
              <input
                type="email"
                className="bg-gray-100 mt-1 block w-full border border-gray-200 py-3 px-2"
                name="email"
                placeholder={t("contact_placeholder_email")}
                onChange={handleChange}
              />
            </label>
            <label className="pt-4 block md:col-start-3 col-span-4">
              <span className="text-gray-700">{t("contact_message")}</span>
              <textarea
                className="bg-gray-100 mt-1 block w-full border border-gray-200 py-3 px-2"
                rows="6"
                name="ご相談内容"
                onChange={handleChange}
              />
            </label>
            <div className="pt-8 block mx-auto md:col-start-3 col-span-4">
              <button type="submit">
                <a className="bg-primary-color inline-flex items-center w-full justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-stone-400 focus:shadow-outline focus:outline-none">
                  {t("contact_submit")}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
