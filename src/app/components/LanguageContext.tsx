"use client";
import { createContext, useState, ChangeEvent } from "react";
import {LanguageContextType, LanguageProviderProps, TranslationType} from "../interfaces/LanguageInterface";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const initialLanguage = "es";

const translations: Record<string, TranslationType> = {
  es: {
    headerTitle: "Mi aplicacion CON Context Api",
    headerSubtitle: "Mi Cabecera",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina",
    textAbout: "Acerca",
    textContact: "Contacto"
  },
  en: {
    headerTitle: "My application WITH Context Api",
    headerSubtitle: "My Header",
    mainContent: "My main content",
    footerTitle: "My footer",
    textAbout: "About",
    textContact: "Contact",
  },
};
const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(translations[language]);

  const handleLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setText(translations.es);
    } else {
      setLanguage("en");
      setText(translations.en);
    }
  };
  const data = { handleLanguage, text };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
export { LanguageProvider };
export default LanguageContext;
