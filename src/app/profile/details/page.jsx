import React from "react";
import styles from "./details.module.css";
import Nav2 from "@/app/components/Nav2/Nav2";
import Link from "next/link";
const Page = () => {
  return (
    <div className={styles.wrapper}>
      <Nav2></Nav2>

      <div className={styles.container}>
        <h2 className={styles.title}>Profile Details</h2>

        <div className={styles.sections}>
          <div className={styles.section}>
            <h2>Full Name</h2>
            <h2>Someone</h2>
          </div>
          <div className={styles.section}>
            <h2>Mobile Number</h2>
            <h2>989222442</h2>
          </div>
          <div className={styles.section}>
            <h2>Email Id</h2>
            <h2>Someone@gmail.com</h2>
          </div>
          <div className={styles.section}>
            <h2>Gender</h2>
            <h2>Male</h2>
          </div>
          <div className={styles.section}>
            <h2>Date of Birth</h2>
            <h2>12/29/1999</h2>
          </div>
          <div className={styles.section}>
            <h2>Location</h2>
            <h2>Howrah</h2>
          </div>
          <div className={styles.section}>
            <h2>Alternate Mobile</h2>
            <h2>99822989</h2>
          </div>
        </div>

        <Link href={"/profile/details/edit"} className={styles.edit}>
          EDIT
        </Link>
      </div>
    </div>
  );
};

export default Page;
