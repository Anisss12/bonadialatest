import Image from "next/image";
import React from "react";
import cloth from "../../../../public/product.jpg";
import styles from "./hcard.module.css";
import Link from "next/link";

export default function Hcard({ link }) {
  return (
    <Link href={"/category"} className={styles.hcard}>
      <div className={styles.imgBox}>
        <Image
          className={styles.hcardImage}
          src={link ? link : null}
          width={500}
          height={500}
          alt="hi"
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>This is title</h2>
        <h3 className={styles.description}>This is description</h3>
      </div>
    </Link>
  );
}
