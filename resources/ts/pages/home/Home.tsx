import Calendar from "@/ts/components/calendar";
import { Event } from "@/ts/components/calendar/type";
import styles from "@/ts/pages/home/home.module.css";
import React from "react";
import Header from "../../components/header/Header";

const events: Event[] = [
  { title: "地惑BBQ", date: "2024-10-04" },
  { title: "履修登録", date: "2024-10-07" },
  { title: "おでん", date: "2024-10-22" },
  { title: "AtCoder", date: "2024-10-26" },
  { title: "Holton", date: "2024-10-18" },
  { title: "せいま colloquium", date: "2024-10-29" },
];

export default function Home() {
  return (
    <div className={styles.mainContentsArea}>
      <Header />
      <div className={styles.parent}>
        <div className={styles.calendarArea}>
          <Calendar eventObject={events} />
        </div>
      </div>
    </div>
  );
}
