import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Layout/Header/Header";
import Navbar from "./components/Layout/Navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minhas Empresas",
  description: "Serviço para emitir procurações virtuais para empresas das quais o cidadão representa legalmente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
