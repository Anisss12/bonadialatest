import React from "react";
import styles from "./Reviews.module.css";
const Reviews = () => {
  return (
    <div className={styles.customerFeedback}>
      <div className={styles.starText}>
        <div className={styles.star}>
          {" "}
          <h2 className={styles.icon}>
            4
            <span>
              <i className="fa-solid fa-star"></i>
            </span>
          </h2>
          <h3> 8 months ago</h3>
        </div>
        <p className={styles.message}>
          The quality is alright, not great, but good enough. The front part has
          a weird fit, not uncomfortable, maybe try a size smaller.
        </p>
      </div>
      <div className={styles.nameDate}>
        <h2 className={styles.name}>Abhilash Suryan | 2 Oct 2022</h2>

        <div className={styles.likeDislike}>
          <div className={styles.countIcon}>
            <h3>
              <i className="fa-regular fa-thumbs-up"></i>5
            </h3>
          </div>
          <div className={styles.countIcon}>
            <h3>
              <i className="fa-regular fa-thumbs-down"></i> 1
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
