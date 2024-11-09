import styles from "@/ts/pages/home/components/calendar/event/event.module.css";
import {
  formatJaDate,
  formatJaTime,
} from "@/ts/pages/home/components/calendar/event/helper/date";
import EventInputModal from "@/ts/pages/home/components/calendar/event/modal";
import { DateInformation } from "@/ts/pages/home/components/calendar/type";
import React, { useState } from "react";

function EventDisplay(props: DateInformation) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isNewEvent, setIsNewEvent] = useState<boolean>(true);
  const [targetEventId, setTargetEventId] = useState<string>("");
  const handleRegistrationModal = () => {
    setIsOpened(!isOpened);
    setIsNewEvent(true);
  };
  const handleEditModal = (id: string) => {
    setIsOpened(!isOpened);
    setIsNewEvent(false);
    setTargetEventId(id);
  };
  return (
    <div className={styles.eventArea}>
      <div className={styles.barArea}>
        <p className={styles.date}>{formatJaDate(props.date)}</p>
        <button
          onClick={handleRegistrationModal}
          className={styles.addButton}
        >
          予定を追加
        </button>
      </div>
      <ul className={styles.eventList}>
        {props.events.length === 0 && (
          <li className={styles.noEventItem}>
            <div className={styles.timeArea}>
              <p>終日</p>
            </div>
            <p className={styles.eventContent}>予定はありません</p>
          </li>
        )}
        {props.events.map((event) => (
          <li
            key={event.id}
            onClick={() => {
              handleEditModal(event.id);
            }}
            className={styles.eventItem}
          >
            <div className={styles.timeArea}>
              {event.is_allday ? (
                <p>終日</p>
              ) : (
                <>
                  <p className={styles.time}>{formatJaTime(event.start)}</p>
                  <p className={styles.time}>
                    {event.end && formatJaTime(event.end)}
                  </p>
                </>
              )}
            </div>
            <div className={styles.eventContent}>
              <p className={styles.eventName}>{event.title}</p>
              {event.description && (
                <p className={styles.eventDescription}>{event.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      {isOpened && (
        <EventInputModal
          setIsOpened={setIsOpened}
          dateInfo={props}
          isNewEvent={isNewEvent}
          eventId={targetEventId}
        />
      )}
    </div>
  );
}

export default EventDisplay;
