"use client";
import React, { useState, useEffect } from "react";
import styles from "./order.module.css";
import Ordercard from "./Ordercard/Ordercard";
import Nav2 from "@/app/components/Nav2/Nav2";

const Page = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [filterVisible, setFilterVisible] = useState(false);

  const images = [
    "https://plus.unsplash.com/premium_photo-1724296696869-59cc80d104c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697183203294-f846144fde19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1698305282759-0d295cbb96d6?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1638110006382-1480f3d4b98c?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697183203524-3e7c6da4d4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1723575737806-ecd7f74bf3a1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1723575737806-ecd7f74bf3a1?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1686823939646-69f76240e778?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1728163807630-0f30b4eb9390?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1583656345883-5189c01c024f?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664982803698-b6b514e9928b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1578897367002-2873f26520fd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1661776091539-f6f0874d14b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697183203538-08c30b0a6709?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1714889307579-3dabfd972c49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697183202005-0f506eb7d014?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1722859248384-8cfdcaaa9ce1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1707816501026-e618c34026da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1707816501030-d931ca6a5354?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1630345910963-1a697bb5262d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const showFilter = () => {
    setFilterVisible(true);
  };

  const hideFilter = () => {
    setFilterVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <Nav2></Nav2>
      <div className={styles.container}>
        <div className={styles.searchBar}>
          <div className={styles.inputBox}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search orders" />
          </div>
          <div onClick={showFilter} className={styles.filter}>
            <i className="fa-solid fa-filter"></i>
            <h2>Filter</h2>
          </div>
        </div>

        {error ? (
          <p className={styles.error}>Error: {error}</p>
        ) : (
          <div className={styles.cardBox}>
            {images.map((item, index) => (
              <Ordercard item={item} key={index}></Ordercard>
            ))}
          </div>
        )}
      </div>
      <h2 className={styles.end}>You have reached end of your orders</h2>

      <div
        className={`${styles.filterOtion} ${
          filterVisible ? styles.filterOtionShow : ""
        }`}
      >
        <div className={styles.title}>
          <h2>Filter orders </h2>
          <i className="fa-solid fa-xmark" onClick={hideFilter}></i>
        </div>
        <div className={styles.filterStatus}>
          <h2 className={styles.statusTitle}> Status</h2>
          <div className={styles.checkItem}>
            <input type="radio" />
            <h2> All</h2>
          </div>
          <div className={styles.checkItem}>
            <input type="radio" />
            <h2> On the way</h2>
          </div>
          <div className={styles.checkItem}>
            <input type="radio" />
            <h2> Delivered</h2>
          </div>
          <div className={styles.checkItem}>
            <input type="radio" />
            <h2> Cancelled</h2>
          </div>
        </div>

        <div className={styles.time}>
          <h2 className={styles.timeTitle}>Time</h2>
          <div className={styles.titmeItem}>
            <input type="radio" />
            <h2> Anytime</h2>
          </div>
          <div className={styles.titmeItem}>
            <input type="radio" />
            <h2> Last 30 day</h2>
          </div>
          <div className={styles.titmeItem}>
            <input type="radio" />
            <h2> Last 6 months</h2>
          </div>
          <div className={styles.titmeItem}>
            <input type="radio" />
            <h2> Last year</h2>
          </div>
        </div>

        <div className={styles.filterBtns}>
          <button className={styles.clear}>CLEAR FILTERS</button>
          <button className={styles.apply}>APPLY</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
