import React from "react";
import styles from "./ReviewInput.module.css";

const ReviewInput = () => {
  return (
    <div>
      <h1>Drop a review</h1>
      <div className={styles.form}>
        <input type="text" />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ReviewInput;
