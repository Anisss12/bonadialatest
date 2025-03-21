import React from "react";
import styles from "./profile.module.css"; // Importing CSS Module
import Nav2 from "../components/Nav2/Nav2";
import Image from "next/image";
import kids from "../../../public/user.png";
import Link from "next/link";
import {
  PackageOpen,
  ListTodo,
  MapPin,
  Ticket,
  ContactRound,
} from "lucide-react";

const page = () => {
  return (
    <div className={styles.profileContainer}>
      <Nav2 />

      <div className={styles.topSection}>
        <div className={styles.topBackground}></div>
        <div className={styles.bottomBackground}></div>
        <div className={styles.profileImage}>
          <Image src={kids} alt="Profile" />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <Link href={"/profile/orders"} className={styles.options}>
          <div className={styles.left}>
            <PackageOpen size={30} strokeWidth={2} absoluteStrokeWidth />{" "}
          </div>
          <div className={styles.right}>
            <h1>Orders</h1>
            <p>Check your orders</p>
          </div>
          <div className={styles.angle}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Link>
        <Link href={"/wishlist"} className={styles.options}>
          <div className={styles.left}>
            <ListTodo size={30} strokeWidth={2} absoluteStrokeWidth />{" "}
          </div>
          <div className={styles.right}>
            <h1>Collections & Wishlist</h1>
            <p>All your product collections</p>
          </div>
          <div className={styles.angle}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Link>
        <Link href={"/profile/addresses"} className={styles.options}>
          <div className={styles.left}>
            <MapPin size={30} strokeWidth={2} absoluteStrokeWidth />{" "}
          </div>
          <div className={styles.right}>
            <h1>Addresses</h1>
            <p>Save addresses for easy checkout</p>
          </div>
          <div className={styles.angle}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Link>
        <div className={styles.options}>
          <div className={styles.left}>
            <Ticket size={30} strokeWidth={2} absoluteStrokeWidth />{" "}
          </div>
          <div className={styles.right}>
            <h1>Coupons</h1>
            <p>Manage coupons for additional discounts</p>
          </div>
          <div className={styles.angle}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
        <Link href={"/profile/details"} className={styles.options}>
          <div className={styles.left}>
            <ContactRound size={30} strokeWidth={2} absoluteStrokeWidth />{" "}
          </div>
          <div className={styles.right}>
            <h1>Profile Details</h1>
            <p>Change your profile details</p>
          </div>
          <div className={styles.angle}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </Link>

        <div className={styles.moreLinks}>
          <Link className={styles.link} href={""}>
            ABOUT US
          </Link>
          <Link className={styles.link} href={""}>
            TERMS OF USE
          </Link>
          <Link className={styles.link} href={""}>
            CUSTOMER POLICIES
          </Link>
          <Link className={styles.link} href={""}>
            USEFUL LINKS
          </Link>
        </div>
        <div className={styles.lgBtn}>
          <button className={styles.btn}>LOGOUT</button>
        </div>
      </div>
    </div>
  );
};

export default page;
