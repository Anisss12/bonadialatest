import React from "react";
import Image from "next/image";
import styles from "./ordercard.module.css";

const Ordercard = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.icon}>
          <i className="fa-solid fa-box"></i>
        </div>
        <div className={styles.status}>
          <h2>Confirmed</h2>
          <p>Arriving by wed, 12 mar</p>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.item}>
          <div className={styles.imgBox}>
            <Image
              className={styles.img}
              width={500}
              height={500}
              src={item}
              alt="Image"
            />
          </div>

          <div className={styles.info}>
            <h2>Sonata</h2>
            <p>
              Volt Men Black Analogue watch...{" "}
              <i className="fa-solid fa-angle-right"></i>
            </p>
            <p>Size: Onesize</p>
          </div>
        </div>
        <div className={styles.btns}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.track}>Track</button>
        </div>
      </div>
    </div>
  );
};

export default Ordercard;
