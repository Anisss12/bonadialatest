import React from "react";
import styles from "./address.module.css";
import Nav2 from "@/app/components/Nav2/Nav2";
import Address from "@/app/components/Address/Address";

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <Nav2></Nav2>

      <div className={styles.container}>
        <div className={styles.addNew}>
          <h2>+ ADD NEW ADDRESS</h2>
        </div>
        <h2 className={styles.default}>Default address</h2>
        <div className={styles.allAddresses}>
          <Address></Address>
          <Address></Address>
          <Address></Address>
          <Address></Address>
        </div>
      </div>
    </div>
  );
};

export default Page;
