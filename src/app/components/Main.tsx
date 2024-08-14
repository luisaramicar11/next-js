"use client";
import LanguageContext from "../components/LanguageContext";
import { useContext, ReactNode } from "react";

interface MainProps {
    children: ReactNode;
}

const Main = ({children}: MainProps) => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }
  const { text } = context;
  return (
    <main>
      <p>{text.mainContent}</p>
      {children}
    </main>
  );
};

export default Main;