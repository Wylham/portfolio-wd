import { useEffect, useState } from "react";

import { LanguageContext } from "./languageContext";
import { defaultLanguage, translations } from "./translations";

const LANGUAGE_STORAGE_KEY = "wylham-language";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return defaultLanguage;
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === "en" ? "en" : defaultLanguage;
  });

  useEffect(() => {
    const currentTranslations = translations[language];
    const descriptionTag = document.querySelector('meta[name="description"]');

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = currentTranslations.metadata.title;

    if (descriptionTag) {
      descriptionTag.setAttribute("content", currentTranslations.metadata.description);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
