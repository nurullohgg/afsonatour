import { useTranslations } from "next-intl";
import React from "react";

const DownloadApp = () => {
  const t = useTranslations("Layout.downloadApp");
  return (
    <div className="bg-[#23bfef] flex items-center justify-center px-[5%] py-[20px] flex-wrap gap-4 font-arsenal">
      <span className="text-white font-bold text-lg">{t("text")}</span>
      <a
        href="https://ulugbekweb.uz/afsona-apk/afsonatour.apk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-white text-[#23bfef] px-4 py-2 rounded shadow hover:bg-gray-200">
          {t("buttonText")}
        </button>
      </a>
    </div>
  );
};

export default DownloadApp;
