"use client";
import React from "react";
import styles from "./nav.module.css";

export const Cross = (props) => {
  const show = () => {
    console.log(props);
  };

  return (
    <div onClick={show} className={styles.cross}>
      CrossX
    </div>
  );
};
