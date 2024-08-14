"use client";
import LanguageContext from "../components/LanguageContext";
import { useContext } from "react";

const Footer = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }
  const { text } = context;
  return (
    <footer>
      <h4>{text.footerTitle}</h4>
    </footer>
  );
};

export default Footer;