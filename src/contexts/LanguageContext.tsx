import { createContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import i18n from "../i18n";
import { languages, toLocale, toUICode } from "./languageConstants";
import type { Lang } from "./languageConstants";

type LanguageContextType = {
  selectedLang: Lang;
  changeLanguage: (code: Lang) => void;
  languages: { code: Lang; label: string }[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const getInitial = (): Lang => {
    try {
      const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
      if (stored) return toUICode(stored) as Lang;
    } catch (e) {
      if (typeof window !== "undefined") console.warn("Failed to read localStorage lang", e);
    }
    const i18nLang = i18n?.language;
    if (i18nLang) return toUICode(i18nLang) as Lang;
    const nav = typeof navigator !== "undefined" ? navigator.language || navigator.languages?.[0] : "fr";
    return toUICode(nav) as Lang;
  };

  const [selectedLang, setSelectedLang] = useState<Lang>(getInitial);

  const changeLanguage = (code: Lang) => {
    const locale = toLocale(code);
    setSelectedLang(code);
    try {
      localStorage.setItem("lang", locale);
    } catch (e) {
      if (typeof window !== "undefined") console.warn("Failed to write localStorage lang", e);
    }
    if (typeof document !== "undefined") document.documentElement.lang = locale;
    i18n.changeLanguage(locale).catch(() => {});
  };
  useEffect(() => {
    changeLanguage(selectedLang);
  }, [selectedLang]);

  const value = useMemo(() => ({ selectedLang, changeLanguage, languages }), [selectedLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
export { LanguageProvider };
