"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Navigation() {
  const closeMenu = () => {
    setTimeout(() => {
      const menuToggle = document.getElementById(
        "menu-toggle",
      ) as HTMLInputElement;
      if (menuToggle) {
        menuToggle.checked = false;
      }
    }, 150);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.brand}>
        Mateusz Lisowski
      </Link>

      <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />

      <label htmlFor="menu-toggle" className={styles.hamburger}>
        ☰
      </label>

      <label htmlFor="menu-toggle" className={styles.overlay}></label>

      <div>
        <label htmlFor="menu-toggle" className={styles.closeBtn}>
          ✕
        </label>

        <div onClick={closeMenu}>
          <Link href="/o-mnie" className={styles.link}>
            O mnie
          </Link>
        </div>
        <div onClick={closeMenu}>
          <Link href="/oferta" className={styles.link}>
            Oferta
          </Link>
        </div>
        <div onClick={closeMenu}>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>
        </div>
        <div onClick={closeMenu}>
          <Link href="/kontakt" className={styles.link}>
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
