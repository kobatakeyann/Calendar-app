import styles from "@/ts/pages/home/components/calendar/event/modal/modal.module.css";
import { ModalProps } from "@/ts/pages/home/components/calendar/type";
import React, { Fragment } from "react";
import EventEdition from "./components/edition";
import EventRegistration from "./components/registration";

function EventInputModal(props: ModalProps) {
  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
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

export default EventInputModal;
