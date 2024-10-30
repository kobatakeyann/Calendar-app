import styles from "@/ts/components/calendar/event/input_modal/input_modal.module.css";
import { ModalProps } from "@/ts/components/calendar/type";
import React, { Fragment } from "react";
import EventEdition from "./components/edition";
import EventRegistration from "./components/registration";

export default function EventInputModal(props: ModalProps) {
  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
  console.log(props);
  return (
    <Fragment>
      <div
        id={styles.overlayer}
        onClick={closeRegistrationModal}
      ></div>
      {props.isNewEvent ? (
        <EventRegistration
          date={props.dateInfo.date}
          setIsOpened={props.setIsOpened}
          isNewEvent={true}
        />
      ) : (
        <EventEdition
          date={props.dateInfo.date}
          setIsOpened={props.setIsOpened}
          isNewEvent={false}
          event={
            props.dateInfo.events.find((event) => event.id === props.eventId)!
          }
        />
      )}
      ;
    </Fragment>
  );
}
