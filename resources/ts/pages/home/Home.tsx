import Calendar from "@/ts/components/calendar";
import { Event } from "@/ts/components/calendar/type";
import styles from "@/ts/pages/home/home.module.css";
import React from "react";
import Header from "../../components/header/Header";

const events: Event[] = [
  {
    title: "地惑BBQ",
    start: "2024-10-04T17:00:00",
    end: "2024-10-04T20:00:00",
    allDay: false,
    extendedProps: {
      date: "2024-10-04",
      description: "キャンパスコモンで15時から準備する",
    },
  },
  {
    title: "履修登録",
    start: "2024-10-07",
    allDay: true,
    extendedProps: {
      date: "2024-10-07",
      description: "リサーチレビューも忘れないように登録する",
    },
  },
  {
    title: "夏休みお疲れ会",
    start: "2024-10-18T19:00:00",
    end: "2024-10-18T22:00:00",
    allDay: false,
    extendedProps: {
      date: "2024-10-18",
      // description: "バルお店予約する",
    },
  },
  {
    title: "おでん",
    start: "2024-10-22T19:00:00",
    allDay: false,
    end: "2024-10-22T22:00:00",
    extendedProps: {
      date: "2024-10-22",
      description: "天神に19時に着くバスに乗る",
    },
  },
  {
    title: "AtCoder",
    start: "2024-10-26T21:00:00",
    allDay: false,
    end: "2024-10-26T22:40:00",
    extendedProps: {
      date: "2024-10-26",
      description: "今週はちゃんと専念する",
    },
  },
  {
    title: "Holton",
    start: "2024-10-18T13:00:00",
    allDay: false,
    end: "2024-10-18T15:00:00",
    extendedProps: {
      date: "2024-10-18",
      description: "後期１回目",
    },
  },
  {
    title: "せいま colloquium",
    start: "2024-10-29",
    allDay: true,
    extendedProps: {
      date: "2024-10-29",
      description: "あと1週間で発表スライドをまとめる",
    },
  },
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
