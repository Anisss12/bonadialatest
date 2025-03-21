"use client";

import React, { useState } from "react";
import {
  FaBars,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaCog,
  FaChartPie,
  FaTimes,
} from "react-icons/fa";
import styles from "./admin.module.css";

const AdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.adminWrapper}>
      {/* Sidebar Navigation */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <h2 className={styles.logo}>Admin Panel</h2>
        <button className={styles.menuButton} onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <ul>
          <li>
            <a href="/admin/dashboard">
              <FaChartPie /> Dashboard
            </a>
          </li>
          <li>
            <a href="/admin/users">
              <FaUsers /> Manage Users
            </a>
          </li>
          <li>
            <a href="/admin/products">
              <FaBoxOpen /> Manage Products
            </a>
          </li>
          <li>
            <a href="/admin/orders">
              <FaShoppingCart /> Manage Orders
            </a>
          </li>
          <li>
            <a href="/admin/settings">
              <FaCog /> Settings
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            <FaBars />
          </button>
          <h1>Admin Dashboard</h1>
        </header>

        {/* Dashboard Cards */}
        <section className={styles.dashboardCards}>
          <div className={styles.card}>
            <FaUsers className={styles.cardIcon} />
            <h3>1,200</h3>
            <p>Total Users</p>
          </div>
          <div className={styles.card}>
            <FaBoxOpen className={styles.cardIcon} />
            <h3>450</h3>
            <p>Products Listed</p>
          </div>
          <div className={styles.card}>
            <FaShoppingCart className={styles.cardIcon} />
            <h3>320</h3>
            <p>Orders Processed</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
