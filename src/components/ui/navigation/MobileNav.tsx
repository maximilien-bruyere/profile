import { useLanguage } from "../../../hooks/useLanguage";
import { useTranslation } from "react-i18next";
// ...existing code...

type Props = {
  isOpen: boolean;
  close: () => void;
};

const MobileNav = ({ isOpen, close }: Props) => {
  // no local langRef needed for MobileNav
  const { t } = useTranslation();
  const { selectedLang, changeLanguage, languages } = useLanguage();
  // no local langOpen state in MobileNav; clicks outside language selector handled in parent if needed

  return (
    <>
      {isOpen && (
        <div aria-modal="true" className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="w-72 max-w-full bg-secondary text-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="text-color-text-secondary mb-6 text-sm underline underline-offset-6 active:text-accent transition-colors duration-200"
            >
              {t("menu.close")}
            </button>

            <nav className="flex flex-col gap-3">
              <a
                href="#home"
                onClick={close}
                className="active:text-color-text-secondary transition-colors duration-200"
              >
                {t("nav.home")}
              </a>
              <a
                href="#about"
                onClick={close}
                className="active:text-color-text-secondary transition-colors duration-200"
              >
                {t("nav.about")}
              </a>
              <a
                href="#portfolio"
                onClick={close}
                className="active:text-color-text-secondary transition-colors duration-200"
              >
                {t("nav.portfolio")}
              </a>
              <a
                href="#contact"
                onClick={close}
                className="active:text-color-text-secondary transition-colors duration-200"
              >
                {t("nav.contact")}
              </a>

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
                      className={`px-3 py-1 rounded-md text-sm active:text-color-text-secondary transition-colors duration-200 ${
                        selectedLang === l.code
                          ? "bg-white/10"
                          : "hover:bg-white/5"
                      }`}
                    >
                      {l.code}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <div className="flex-1 bg-black/40" onClick={close} />
        </div>
      )}
    </>
  );
};

export default MobileNav;
