"use client";

import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../../../public/logos/navlogo1.svg";
import banner from "../../../../public/banner.jpg";
import { Menu, Heart, Bell, BaggageClaim, Search } from "lucide-react";

const Nav = ({ children }) => {
  const [className, setClassName] = useState("Box");
  const [margin, setMargin] = useState("200vw");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setMargin(mobile ? "200vw" : "0vw");
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showMenu = () => {
    if (isMobile) {
      setMargin(margin === "200vw" ? "0vw" : "200vw");
      setClassName(margin === "200vw" ? "" : "Box");
    }
  };

  return (
    <nav className={styles.nav}>
      <section className={styles.logo}>
        <div onClick={showMenu} className={styles.menubar}>
          <Menu size={35} strokeWidth={2} absoluteStrokeWidth />
        </div>
        <Image className={styles.logoImage} src={logo} alt="Logo" />
      </section>

      <section className={styles.menu} style={{ marginRight: margin }}>
        <div className={styles.linkBoxeses}>
          <div className={styles.advertise}>
            <Image className={styles.adImg} src={banner} alt="Banner" />
          </div>

          {["MAN", "WOMAN", "KIDS", "BEAUTY", "STUDIO"].map((category) => (
            <div className={styles.menuLinkBox} key={category}>
              <Link className={styles.menuLink} href="/category">
                {category}
              </Link>
              <h1 className={styles.arrow}>
                <i className="fa-solid fa-angle-right"></i>
              </h1>
            </div>
          ))}

          <div className={styles.othersLinkBox}>
            <Link className={styles.otherlink} href="/login">
              Login
            </Link>
            <Link className={styles.otherlink} href="/contact">
              Contact Us
            </Link>
            <Link className={styles.otherlink} href="/privacy">
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
        <div onClick={showMenu} className={styles.closeBox}></div>
      </section>

      <section className={styles.search}>
        <div className={styles.searchIcon}>
          <Search size={20} strokeWidth={2} absoluteStrokeWidth />
        </div>
        <Link href="/searches" className={styles.inputText}>
          <p>Search clothes...</p>
        </Link>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Search clothes..."
        />
      </section>

      <section className={styles.tools}>
        <Link href="/wishlist" className={styles.toolsLink}>
          <Heart size={20} strokeWidth={2} absoluteStrokeWidth />
        </Link>
        <Link href="/cart" className={styles.toolsLink}>
          <BaggageClaim size={20} strokeWidth={2} absoluteStrokeWidth />
        </Link>
        <Link href="/notifications" className={styles.toolsLink}>
          <Bell size={20} strokeWidth={2} absoluteStrokeWidth />
        </Link>
      </section>
    </nav>
  );
};

export default Nav;
