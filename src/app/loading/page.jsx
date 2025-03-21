import React from "react";
import styles from "./loading.module.css";
import loadingImg from "../../../public/loading.svg";
import Image from "next/image";

const loading = () => {
  return (
    <div className={styles.loading}>
      <Image
        className={styles.loadingImg}
        alt="Loading..."
        src={loadingImg}
        width={500}
        height={500}
      ></Image>
      <h1 className={styles.spinner}>
        <div className={styles.loader}></div>
      </h1>
    </div>
  );
};

export default loading;
