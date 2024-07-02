"use client";
// import Links from "./links/Links";
import styles from "./header.module.css";
// import Login from "../../app/(auth)/login/page";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logocarioca digital.png";
// import MobileNavbar from "./MobileNavbar";
// import MobileNavbarButton from "./MobileNavbarButton";
import { useState } from "react";
import Container from "../Container/Container";
// import Login from "./login/Login";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoLink}>
          <Link href="/" className={styles.logo}>
            <Image className={styles.img} src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.logoutButton}>
          <span className={styles.spanContainer}>Olámm Edwilson</span>
        </div>
        {/* <Links />
        <MobileNavbarButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <MobileNavbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <div className={styles.loginDesktop}>
          <Login />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
