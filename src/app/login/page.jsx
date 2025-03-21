"use client";
import React from "react";
import styles from "./signin.module.css";
import Image from "next/image";
import banner from "../../../public/slide/slide2.jpg";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleBackNavigation = () => {
    let storedHistory = JSON.parse(sessionStorage.getItem("pageHistory")) || [];

    if (storedHistory.length > 1) {
      storedHistory.pop();
      const previousPage = storedHistory[storedHistory.length - 1];
      sessionStorage.setItem("pageHistory", JSON.stringify(storedHistory));
      router.push(previousPage);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.top}>
        <div className={styles.banner}>
          <div onClick={handleBackNavigation} className={styles.back}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <Image className={styles.bannerImg} src={banner} alt=""></Image>
        </div>
      </div>

      <div className={styles.bottom}>
        <h2 className={styles.loginTitle}>
          Login <span>or</span> Signup
        </h2>

        <div className={styles.phoneBox}>
          <input type="text" placeholder="Mobile Number*" />
          <h2>91 |</h2>
        </div>
        <h1 className={styles.warnning}>
          By continuing, I agree to the <span>Terms of use </span> &
          <span> Privacy policy</span>
        </h1>

        <button className={styles.Continue}>CONTINUE</button>
      </div>
    </div>
  );
};

export default page;
