import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "./components/Layout/Header/Header";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import "./globals.css";

const open_sans = Open_Sans({ weight: "400", subsets: ["latin"] });

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
      <body className={open_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
