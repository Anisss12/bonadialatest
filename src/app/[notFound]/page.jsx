import React from "react";
import styles from "./notFound.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" className={styles.homeLink}>
        Go back to Home
      </a>
    </div>
  );
};

export default Page;
