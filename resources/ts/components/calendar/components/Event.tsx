import styles from "@/ts/components/calendar/components/event.module.css";
import { EventProps } from "@/ts/components/calendar/type";
import { formatDate } from "@fullcalendar/core";
import React from "react";

export default function EventDisplay(props: EventProps) {
  const getFormattedDate = (date: string) =>
    formatDate(date, {
      month: "long",
      year: "numeric",
      day: "numeric",
      locale: "ja",
    });
  return (
    <>
      <div className={styles.eventArea}>Event area!</div>
      <ul className={styles.eventList}>
        {props.eventObject.map((event, index) => (
          <li
            key={index}
            className={styles.eventItem}
          >
            {getFormattedDate(event.date)}: {event.title}
          </li>
        ))}
      </ul>
    </>
  );
}
