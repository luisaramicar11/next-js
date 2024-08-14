"use client";
import Link from 'next/link';
import { useContext } from 'react';
import LanguageContext from './LanguageContext';

const Header = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { text, handleLanguage } = context;

  return (
    <header>
      <h2>{text.headerTitle}</h2>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <nav>
        <Link href="/about">{text.textAbout}</Link>
        <br />
        <Link href="/contact">{text.textContact}</Link>
      </nav>
    </header>
  );
};

export default Header;
