"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Menu, Heart, Bell, Search, MoveLeft } from "lucide-react";

import logo from "../../../../public/logos/navlogo1.svg";
import banner from "../../../../public/banner.jpg";

const Nav2 = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let storedHistory = JSON.parse(sessionStorage.getItem("pageHistory")) || [];

    if (
      storedHistory.length === 0 ||
      storedHistory[storedHistory.length - 1] !== pathname
    ) {
      storedHistory.push(pathname);
      sessionStorage.setItem("pageHistory", JSON.stringify(storedHistory));
    }

    setHistory(storedHistory);
  }, [pathname]);

  const handleBackNavigation = () => {
    let storedHistory = JSON.parse(sessionStorage.getItem("pageHistory")) || [];

    if (storedHistory.length > 1) {
      storedHistory.pop();
      const previousPage = storedHistory[storedHistory.length - 1];
      sessionStorage.setItem("pageHistory", JSON.stringify(storedHistory));
      router.push(previousPage);
    } else {
      router.push("/");
    }
  };

  return (
    <nav className={styles.nav}>
      <section className={styles.logo}>
        <div className={styles.menubar}>
          <p onClick={handleBackNavigation}>
            <MoveLeft size={32} strokeWidth={2} absoluteStrokeWidth />{" "}
          </p>
        </div>

        <Image className={styles.logoImage} src={logo} alt="Logo" />
      </section>

      <section className={styles.menu}>
        <div className={styles.linkBoxeses}>
          <div className={styles.advertise}>
            <Image className={styles.adImg} src={banner} alt="Banner" />
          </div>

          {["MAN", "WOMAN", "KIDS", "BEAUTY", "STUDIO"].map((category) => (
            <div key={category} className={styles.menuLinkBox}>
              <Link className={styles.menuLink} href="/category">
                {category}
              </Link>
              <h1 className={styles.arrow}>{">"}</h1>
            </div>
          ))}

          <div className={styles.othersLinkBox}>
            <Link className={styles.otherlink} href="/about">
              About
            </Link>
            <Link className={styles.otherlink} href="/contact">
              Contact Us
            </Link>
            <Link className={styles.otherlink} href="/privacy-policy">
              Privacy & Policy
            </Link>
            <Link className={styles.otherlink} href="/faq">
              FAQ
            </Link>
            <Link className={styles.otherlink} href="/useful-links">
              Useful Links
            </Link>
          </div>
        </div>
        <div className={styles.closeBox}></div>
      </section>

      <section className={styles.search}>
        <div className={styles.searchIcon}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Search clothes..."
        />
      </section>

      <section className={styles.tools}>
        <Link href={"/searches"} className={styles.toolsLink}>
          <Search size={20} strokeWidth={2} absoluteStrokeWidth />{" "}
        </Link>
        <Link href={"/wishlist"} className={styles.toolsLink}>
          <Heart size={20} strokeWidth={2} absoluteStrokeWidth />
        </Link>

        <Link href={"/"} className={styles.toolsLink}>
          <Bell size={20} strokeWidth={2} absoluteStrokeWidth />
        </Link>
      </section>
    </nav>
  );
};

export default Nav2;
