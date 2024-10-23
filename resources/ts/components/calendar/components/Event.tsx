import {
  getFormattedDate,
  getFormattedtime,
} from "@/ts/components/calendar/components/date";
import styles from "@/ts/components/calendar/components/event.module.css";
import { DateInformation } from "@/ts/components/calendar/type";
import React from "react";

export default function EventDisplay(props: DateInformation) {
  return (
    <div className={styles.eventArea}>
      <div className={styles.dateArea}>{getFormattedDate(props.date)}</div>
      <ul className={styles.eventList}>
        {props.events.length === 0 && (
          <li className={styles.eventItem}>
            <div className={styles.timeArea}>
              <p>終日</p>
            </div>
            <p className={styles.eventContent}>予定はありません</p>
          </li>
        )}
        {props.events.map((event, index) => (
          <li
            key={index}
            className={styles.eventItem}
          >
            <div className={styles.timeArea}>
              {event.allDay ? (
                <p>終日</p>
              ) : (
                <>
                  <p className={styles.time}>{getFormattedtime(event.start)}</p>
                  <p className={styles.time}>
                    {event.end && getFormattedtime(event.end)}
                  </p>
                </>
              )}
            </div>
            <div className={styles.eventContent}>
              <p className={styles.eventName}>{event.title}</p>
              {event.extendedProps?.description && (
                <p className={styles.eventDescription}>
                  {event.extendedProps?.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
