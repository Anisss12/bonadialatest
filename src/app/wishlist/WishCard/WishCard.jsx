"use client";

import { useState } from "react";
import styles from "./wishcard.module.css";
import Image from "next/image";
import kidimg from "../../../../public/kid.jpg";

const WishCard = ({ item, display, whishCardClick }) => {
  const handleCancel = () => {
    whishCardClick("yes");
  };

  return (
    <div
      className={styles.card}
      style={{ height: display == "none" ? "35vh" : null }}
    >
      <div
        className={styles.imgBox}
        style={{ height: display == "none" ? "80%" : null }}
      >
        <Image
          src={item}
          width={500}
          height={500}
          alt={"img"}
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>This is title</h3>
        <p className={styles.price}>Rs.4000</p>

        <button style={{ display: display }} className={styles.cartButton}>
          MOVE TO CART
        </button>
        <button
          onClick={handleCancel}
          style={{ display: display }}
          className={styles.removeButton}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};

export default WishCard;
