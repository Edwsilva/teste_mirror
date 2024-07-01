import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Navbar />
    </main>
  );
}
