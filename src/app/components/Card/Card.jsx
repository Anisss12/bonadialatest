import React from "react";
import Image from "next/image";
import cloth from "../../../../public/cloth2.jpg";
import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ link }) => {
  return (
    <Link href={"/buy"} className={styles.card}>
      <div className={styles.imgBox}>
        <Image
          className={styles.image}
          src={link}
          width={300}
          height={400}
          alt="A young girl wearing a white headscarf standing next to a stone wall"
          priority
        ></Image>
        <div className={styles.rating}>
          4.4 <i className="fa-solid fa-star" style={{ color: "orange" }}></i> |
          1.3k
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.wishList}>
          <h1>Go Sriki</h1>
          <i
            className={`${"fa-regular fa-heart" + " " + styles.wish}  `}
            style={{ fontSize: "2vh" }}
          ></i>
        </div>

        <p>Embroidered Kurta Set</p>
        <h2 className={styles.price}> Rs. 890 -Rs.4345 </h2>
      </div>
    </Link>
  );
};

export default Card;
