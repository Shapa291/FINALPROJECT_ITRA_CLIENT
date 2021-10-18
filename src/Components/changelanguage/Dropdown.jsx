import { useTranslation } from "react-i18next";

export default function Dropdown() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (ln) => {
    localStorage.setItem("lang", JSON.stringify(i18n.language));
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  return (
    <div className="dropdown mx-3">
      <img
        src={t("changelang")}
        alt="1"
        width="40px"
        onClick={
          i18n.language === "ru" ? changeLanguage("en") : changeLanguage("ru")
        }
      />
    </div>
  );
}