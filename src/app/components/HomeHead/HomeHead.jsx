import React from "react";
import styles from "./homehead.module.css";
import Image from "next/image";
import rimg from "../../../../public/banner2.jpg";
export default function HomeHead() {
  return (
    <div className={styles.bannerSection}>
      <div className={styles.bennerImageBox}>
        <Image className={styles.bannerImage} objectFit="" src={rimg} alt="" />
      </div>
    </div>
  );
}
