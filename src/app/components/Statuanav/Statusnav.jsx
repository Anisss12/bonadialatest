"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Statusnav.module.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { MoveLeft } from "lucide-react";

const Statusnav = ({ children }) => {
  const pathname = usePathname();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("pageHistory") || "[]"
    );
    if (storedHistory[storedHistory.length - 1] !== pathname) {
      const updatedHistory = [...storedHistory, pathname];
      localStorage.setItem("pageHistory", JSON.stringify(updatedHistory));
      setHistory(updatedHistory);
    }
  }, [pathname]);
  console.log(history);

  const router = useRouter();

  return (
    <nav className={styles.statusNav}>
      <div onClick={() => router.back()} className={styles.back}>
        <MoveLeft />
      </div>

      <div className={styles.title}>
        <h2> SHOPPING CART</h2>
      </div>

      <div className={styles.status}>
        <h3>STEP 1/3</h3>
      </div>
    </nav>
  );
};

export default Statusnav;
