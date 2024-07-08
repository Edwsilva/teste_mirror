import type { Metadata } from "next";
import Header from "./components/Layout/Header/Header";
import Navbar from "./components/Layout/Navbar/Navbar";
import "./globals.css";
import Footer from "./components/Layout/Footer/Footer";
import { roboto, open_sans } from "@/utils/fonts";
import SimpleSlider from "./components/Layout/Slick/SimpleSlider";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "Minhas Empresas",
  description:
    "Serviço para emitir procurações virtuais para empresas das quais o cidadão representa legalmente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} ${styles.backgroundLayout}`}>
        <Header />
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
