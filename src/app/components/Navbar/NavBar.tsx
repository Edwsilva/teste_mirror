"use client";
// import Links from "./links/Links";
import styles from "./navbar.module.css";
// import Login from "../../app/(auth)/login/page";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/Hamburguer.png";

import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1>Minhas Empresas</h1>
      <Link href="/" className={styles.logo}>
        <Image className={styles.img} src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Navbar;
