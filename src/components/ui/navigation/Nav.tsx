import { useState, useRef } from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  const { selectedLang, changeLanguage, languages } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  return (
    <nav className="hidden md:flex gap-6 items-center justify-center text-color-text-primary text-sm">
      <a href="#home" className="hover:cursor-pointer hover:underline underline-offset-10 active:text-color-text-secondary transition-colors duration-200">
        {t("nav.home")}
      </a>
      <a href="#about" className="hover:cursor-pointer hover:underline underline-offset-10 active:text-color-text-secondary transition-colors duration-200">
        {t("nav.about")}
      </a>
      <a href="#portfolio" className="hover:cursor-pointer hover:underline underline-offset-10 active:text-color-text-secondary transition-colors duration-200">
        {t("nav.portfolio")}
      </a>
      <a href="#contact" className="hover:cursor-pointer hover:underline underline-offset-10 active:text-color-text-secondary transition-colors duration-200">
        {t("nav.contact")}
      </a>

      <div ref={langRef} className="relative ml-4">
        <button
          type="button"
          onClick={() => setLangOpen((s) => !s)}
          aria-expanded={langOpen}
          className="flex items-center gap-2 px-3 py-1 border border-white/30 rounded-md text-sm bg-white/5 hover:bg-white/10 hover:cursor-pointer"
        >
          <span className="font-medium text-accent">{selectedLang}</span>
          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.25 7.5L10 12.25 14.75 7.5z" />
          </svg>
        </button>

        {langOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-secondary text-white rounded-md shadow-lg overflow-hidden z-10">
            {languages.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  onClick={() => {
                    changeLanguage(l.code);
                    setLangOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-white/10 hover:cursor-pointer"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
