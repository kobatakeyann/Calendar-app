import Header from "@/ts/components/header";
import Calendar from "@/ts/pages/home/components/calendar";
import styles from "@/ts/pages/home/home.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={styles.mainContentsArea}>
      <Header />
      <div className={styles.pageContent}>
        <Calendar />
      </div>
    </div>
  );
}
