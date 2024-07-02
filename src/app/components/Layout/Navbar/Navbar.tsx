'use client'
import styles from "./navbar.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAVBARITEMS = [
  {
    id: 1,
    title: "Incluir empresa",
    path: "/"
  },
  {
    id: 2,
    title: "Gerenciar empresa",
    path: "/gerenciar-empresa"
  }
]

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const pathname = usePathname();

  const handleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarActive}>
        <div className={styles.container} onClick={handleDropdown}>
          <div className={styles.navbarContent}>
            <h2 className={styles.linkTitle}>{NAVBARITEMS.find(item => item.path === pathname)?.title}</h2>
            <button
              className={`${styles.iconButton} ${dropdownVisible ? styles.open : ""}`}
            >
              <div className={styles.menuIcon}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.dropdown} ${dropdownVisible && styles.dropdownVisible}`}>
        <div className={styles.dropdownContainer}>
          {NAVBARITEMS.map(item => {
            if (item.path !== pathname) {
              return <Link href={item.path} key={item.id} className={styles.linkTitleInactive} onClick={handleDropdown}>{item.title}</Link>
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
