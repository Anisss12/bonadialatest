import React from "react";
import styles from "./page.module.css";
import loadingImg from "../../public/logos/loadinglogo.svg";
import Image from "next/image";

const loading = () => {
  return (
    <div className={styles.loading}>
      <Image
        className={styles.loadingImg}
        alt=""
        src={loadingImg}
        width={500}
        height={500}
      ></Image>

      <div className={styles.loader}></div>
    </div>
  );
};

export default loading;
