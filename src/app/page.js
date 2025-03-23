import React from "react";
import styles from "./page.module.css";
import HomeHead from "./components/HomeHead/HomeHead"; // Ensure correct import
import Vcard from "./components/Vcard/Vcard"; // Ensure correct import
import Slider from "./components/Slider/Slider";
import Hcard from "./components/Hcard/Hcard";
import Hslider from "./components/Hslider/Hslider";
import Hproduct from "./components/Hproduct/Hproduct";
import Minicard from "./components/Minicard/Minicard";
import Nav from "./components/Nav/Nav";
import TabBar from "./components/Tabbar/Tabbar";
import Homeslider from "./components/Homeslider/Homeslider";
import ManualSlider from "./components/Mannualslider/Mannualslider";
import Effectivehead from "./components/Effectivehead/Effectivehead";
import connect from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
const Page = async () => {
  const kidcloth = [
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

  const sections = [
    { component: <Nav />, key: "nav" },
    {
      component: (
        <div className={styles.effectivehead}>
          <Effectivehead />
        </div>
      ),
      key: "effectivehead",
    },
    { component: <ManualSlider />, key: "mannualslider" },

    {
      component: (
        <div className={styles.mainSlide}>
          <Homeslider />
        </div>
      ),
      key: "homeslider",
    },

    {
      component: (
        <div className={styles.mincardSection}>
          {kidcloth.map((link, index) => (
            <Minicard link={link} key={index} />
          ))}
        </div>
      ),
      key: "mincard",
    },

    {
      component: (
        <div className={styles.hcardSection}>
          <Hslider />
        </div>
      ),
      key: "hslider",
    },
    {
      component: <h1 className={styles.title}>TODAY'S EXCITING DEAL</h1>,
      key: "title",
    },
    {
      component: (
        <div className={styles.hproductSection}>
          {kidcloth.map((link, index) => (
            <Hproduct link={link} key={index} />
          ))}
        </div>
      ),
      key: "hproduct",
    },
    {
      component: <div className={styles.hcardSection}></div>,
      key: "empty-card",
    },
    {
      component: (
        <div className={styles.vcardSection}>
          <Slider />
        </div>
      ),
      key: "slider",
    },
    { component: <TabBar />, key: "tabbar" },
  ];
  Array(1)
    .fill()
    .map((_, index) =>
      sections.push({ component: <HomeHead />, key: "homehead2" + index })
    );
  return (
    <div className={styles.wrapper}>
      <div className={styles.home}>
        {sections.map(({ component, key }) => (
          <div key={key}>{component}</div>
        ))}
      </div>
    </div>
  );
};

export default Page;
