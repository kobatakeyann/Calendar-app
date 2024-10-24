import styles from "@/ts/components/calendar/components/event_registration_modal/event_registration_modal.module.css";
import { ModalProps } from "@/ts/components/calendar/type";
import React from "react";

export default function EventRegistrationModal(props: ModalProps) {
  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
  return (
    <div
      id={styles.overlayer}
      onClick={closeRegistrationModal}
    >
      <div
        id={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeRegistrationModal}>閉じる</button>
      </div>
    </div>
  );
}
