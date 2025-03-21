"use client"; // ✅ Ensure this is a Client Component

import { useTheme } from "@/app/context/ThemeProvider";
import styles from "./admin.module.css";
import { Sun, Moon } from "lucide-react";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      {theme === "light" ? (
        <Moon size={20} strokeWidth={2} absoluteStrokeWidth />
      ) : (
        <Sun size={20} strokeWidth={2} absoluteStrokeWidth />
      )}
    </button>
  );
}
