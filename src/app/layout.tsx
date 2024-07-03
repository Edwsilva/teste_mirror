import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
import Header from "./components/Layout/Header/Header";
import Navbar from "./components/Layout/Navbar/Navbar";
import "./globals.css";
import Footer from "./components/Layout/Footer/Footer";
import { roboto } from "@/utils/fonts";
import SimpleSlider from "./components/Layout/Slick/SimpleSlider";
// const roboto = Roboto({ weight: "400", subsets: ["latin"] });

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
      <body className={roboto.className}>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
