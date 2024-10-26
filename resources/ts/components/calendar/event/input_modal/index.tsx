import styles from "@/ts/components/calendar/event/input_modal/input_modal.module.css";
import { ModalProps } from "@/ts/components/calendar/type";
import React, { Fragment } from "react";
import EventEdition from "./components/edition";
import EventRegistration from "./components/registration";

export default function EventInputModal(props: ModalProps) {
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
        <EventRegistration {...props} />
      ) : (
        <EventEdition {...props} />
      )}
      ;
    </Fragment>
  );
}
