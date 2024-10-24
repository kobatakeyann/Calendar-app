import {
  getFormattedDate,
  getFormattedtime,
} from "@/ts/components/calendar/components/event/date";
import styles from "@/ts/components/calendar/components/event/event.module.css";
import EventRegistrationModal from "@/ts/components/calendar/components/event_registration_modal";
import { DateInformation } from "@/ts/components/calendar/type";
import React, { useState } from "react";

export default function EventDisplay(props: DateInformation) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const handleRegistrationModal = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className={styles.eventArea}>
      <div className={styles.barArea}>
        <p className={styles.date}>{getFormattedDate(props.date)}</p>
        <button
          onClick={handleRegistrationModal}
          className={styles.addButton}
        >
          予定を追加
        </button>
      </div>
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
      {isOpened && <EventRegistrationModal setIsOpened={setIsOpened} />}
    </div>
  );
}
