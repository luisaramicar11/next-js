import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {LanguageProvider} from "./components/LanguageContext"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer> 
        </LanguageProvider>
        </body>
    </html>
  );
}
