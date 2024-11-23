import EventEditionModal from "@/ts/pages/home/components/calendar/event/components/edition_modal";
import EventRegistrationModal from "@/ts/pages/home/components/calendar/event/components/registration_modal";
import styles from "@/ts/pages/home/components/calendar/event/event.module.css";
import {
  formatJaDate,
  formatJaTime,
} from "@/ts/pages/home/components/calendar/event/helper/date";
import { DateInformation } from "@/ts/pages/home/components/calendar/type";
import React, { Fragment, useState } from "react";

function EventDisplay(props: DateInformation) {
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [targetEventId, setTargetEventId] = useState<string>("");
  const handleRegistrationModal = () => {
    setIsRegistering(!isRegistering);
  };
  const handleEditionModal = (id: string) => {
    setIsEditing(!isEditing);
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
              handleEditionModal(event.id!);
            }}
            className={styles.eventItem}
          >
            <div
              className={styles.timeArea}
              style={{ borderRight: `${event.color} 1.2px solid` }}
            >
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
      {isRegistering && (
        <Fragment>
          <div
            id={styles.overlayer}
            onClick={() => {
              setIsRegistering(false);
            }}
          ></div>
          <EventRegistrationModal
            setIsOpened={setIsRegistering}
            dateInfo={props}
          />
        </Fragment>
      )}
      {isEditing && (
        <Fragment>
          <div
            id={styles.overlayer}
            onClick={() => {
              setIsEditing(false);
            }}
          ></div>
          <EventEditionModal
            setIsOpened={setIsEditing}
            dateInfo={props}
            eventId={targetEventId}
          />
        </Fragment>
      )}
    </div>
  );
}

export default EventDisplay;
