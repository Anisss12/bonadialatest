"use client";
import React from "react";
import styles from "./confirmalert.module.css";
import { useState } from "react";
const ConfirmAlert = ({ show, handleCancel }) => {
  const handleDisplay = () => {
    if (show === "yes") {
      handleCancel("no");
    }
  };

  return (
    <div
      className={styles.confirm}
      style={{ display: show === "yes" ? "flex" : "none" }}
    >
      <div className={styles.box}>
        <h2 className={styles.info}>Are you sure to remove</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing, odit.</p>
        <div className={styles.btns}>
          <button onClick={handleDisplay}>CANCEL</button>
          <button>YES</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
