import { useLanguage } from "../../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

type Props = {
  isOpen: boolean;
  close: () => void;
};
const MobileNav = ({ isOpen, close }: Props) => {
  const { t } = useTranslation();
  const { selectedLang, changeLanguage, languages } = useLanguage();

  return (
    <>
      {/* Backdrop noir qui couvre toute la page */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />
      
      {/* Sidebar */}
      <div
        aria-modal="true"
        role="dialog"
        aria-hidden={!isOpen}
        className={`fixed top-0 left-0 z-50 w-72 min-w-[270px] h-full max-w-full bg-secondary text-white p-6 shadow-xl md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="text-color-text-secondary mb-6 text-sm underline underline-offset-6 active:text-accent transition-colors duration-200 hover:text-color-text-secondary/80 hover:cursor-pointer"
        >
          {t("menu.close")}
        </button>

        <nav className="flex flex-col gap-3">
          <Link
            to="home"
            onClick={close}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-min hover:text-color-text-primary/80 active:text-color-text-secondary/90 transition-colors duration-200 hover:cursor-pointer"
          >
            {t("nav.home")}
          </Link>
          <Link
            to="about"
            onClick={close}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-18 hover:text-color-text-primary/80 active:text-color-text-secondary/90  transition-colors duration-200 hover:cursor-pointer"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="portfolio"
            onClick={close}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-min hover:text-color-text-primary/80 active:text-color-text-secondary/90  transition-colors duration-200 hover:cursor-pointer"
          >
            {t("nav.portfolio")}
          </Link>
          <Link
            to="contact"
            onClick={close}
            smooth={true}
            offset={-70}
            duration={500}
            className="w-min hover:text-color-text-primary/80 active:text-color-text-secondary/90  transition-colors duration-200 hover:cursor-pointer"
          >
            {t("nav.contact")}
          </Link>

          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-sm mb-2">{t("menu.language")}</p>
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    changeLanguage(l.code);
                    close();
                  }}
                  className={`hover:cursor-pointer px-3 py-1 rounded-md text-sm active:text-color-text-secondary transition-colors duration-200 ${
                    selectedLang === l.code ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  {l.code}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
