import { montserrat } from "@/utils/fonts";
import type { Metadata } from "next";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import "./globals.css";
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
      <body className={`${montserrat.className} ${styles.backgroundLayout}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
