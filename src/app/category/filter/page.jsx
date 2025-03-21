"use client";
import React, { useEffect, useState } from "react";
import styles from "./filter.module.css";
import Link from "next/link";

const page = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`${styles.filter} ${isExpanded ? styles.show : styles.show}`}
    >
      <div className={styles.heading}>
        <h1>Filter</h1>
        <h1>Clear all</h1>
      </div>
      <div className={styles.middle}>
        <div className={styles.left}>
          {Array(30)
            .fill("Price")
            .map((item, index) => (
              <div key={index} className={styles.h1}>
                {item}
              </div>
            ))}
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" />
          </div>

          <div className={styles.optionBox}>
            {Array(25)
              .fill("3xs")
              .map((item, index) => (
                <div key={index} className={styles.option}>
                  <i className="fa-solid fa-check"></i>
                  <h1>{item}</h1>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.tab}>
        <Link
          href={"/category"}
          className={styles.buttons}
          onClick={() => setIsExpanded(false)}
        >
          Close
        </Link>
        <button className={styles.buttons}>Apply</button>
      </div>
    </div>
  );
};

export default page;
