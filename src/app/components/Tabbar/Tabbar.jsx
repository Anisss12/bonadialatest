"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./tabbar.module.css"; // Ensure CSS module is imported
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Flame } from "lucide-react";
import { User } from "lucide-react";

import homeIcon from "../../../../public/logos/homeicon3.svg";

const TabBar = ({ category }) => {
  const [hoverIndex, setHoverIndex] = useState(category || null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const blocks = [
    {
      href: "/category",
      icon: (
        <div
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image style={{ height: "3.5vh" }} alt="Home" src={homeIcon}></Image>
        </div>
      ),
      lebel: "Home",
    },

    {
      href: "/category",
      icon: (
        <Flame
          size={25}
          strokeWidth={2}
          absoluteStrokeWidth
          className={styles.icon}
        />
      ),
      lebel: "Trending",
    },
    {
      href: "/cart",
      icon: (
        <ShoppingCart
          size={25}
          strokeWidth={2}
          absoluteStrokeWidth
          className={styles.icon}
        />
      ),
      lebel: "Cart",
    },
    {
      href: "/profile",
      icon: (
        <User
          size={25}
          strokeWidth={2}
          absoluteStrokeWidth
          className={styles.icon}
        />
      ),
      lebel: "Profile",
    },
  ];

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className={styles.tabbar}>
      {/* Moving Indicator */}
      <div
        className={styles.indicator}
        style={{
          left: hoverIndex !== null ? `${hoverIndex * 25}%` : "0%",
          transition: "left 0.3s ease-in-out",
        }}
      ></div>

      {blocks.map((item, index) => (
        <Link
          key={index}
          className={styles.block}
          href={item.href}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div
            className={styles.lebel}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.3vh",
            }}
          >
            {item.icon}
            {item.lebel}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TabBar;
