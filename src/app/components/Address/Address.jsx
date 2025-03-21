import React from "react";
import styles from "./address.module.css";

const Address = () => {
  return (
    <div className={styles.addressItem}>
      <div className={styles.namePlace}>
        <h2 className={styles.name}>SOMEONE NAME</h2>
        <h2 className={styles.place}>Home</h2>
      </div>
      <div className={styles.details}>
        <h2 className={styles.vill}>Sultanpur</h2>
        <h2 className={styles.post}>Santragachi</h2>
        <h2 className={styles.city}>Howrah 711111</h2>
        <h2 className={styles.state}>West Bengal</h2>
        <h2 className={styles.mob}>Mobile: 9729879297</h2>
      </div>
      <div className={styles.btns}>
        <button>EDIT</button>
        <button>REMOVE</button>
      </div>
    </div>
  );
};

export default Address;
