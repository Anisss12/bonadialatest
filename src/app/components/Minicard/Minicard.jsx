import React from "react";
import styles from "./minicard.module.css";
import Image from "next/image";
import kids from "../../../../public/kids.jpg";
import Link from "next/link";
const Minicard = ({ link }) => {
  return (
    <Link href={"/category"}>
      <div className={styles.minicard}>
        <div className={styles.imgBox}>
          <Image
            className={styles.img}
            src={link}
            width={900}
            height={900}
            alt="A young girl wearing a white headscarf standing next to a stone wall"
            priority
          ></Image>
        </div>
        <h4 className={styles.title}>Title</h4>
      </div>
    </Link>
  );
};

export default Minicard;
