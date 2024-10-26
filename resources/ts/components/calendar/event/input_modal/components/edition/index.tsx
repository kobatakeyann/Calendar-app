import styles from "@/ts/components/calendar/event/input_modal/components/edition/edition.module.css";
import { ModalProps } from "@/ts/components/calendar/type";
import React, { Fragment } from "react";

export default function EventEdition(props: ModalProps) {
  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
  return (
    <Fragment>
      <div
        id={styles.overlayer}
        onClick={closeRegistrationModal}
      ></div>
      <div
        id={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.modalHeader}>予定を編集</h2>
        <form className={styles.form}>
          <div className={styles.formElement}>
            <input
              type="text"
              placeholder="タイトルを入力"
              className={styles.eventInput}
            ></input>
          </div>
          <div className={styles.formElement}>
            <input
              type="date"
              className={styles.dateInput}
            />
            <input
              type="date"
              className={styles.dateInput}
            />
          </div>
          <div className={styles.formElement}>
            <textarea
              placeholder="メモを入力"
              rows={3}
              maxLength={50}
              className={styles.descriptionInput}
            ></textarea>
          </div>
        </form>
        <button
          type="submit"
          className={styles.submitButton}
        >
          追加
        </button>
        <button
          onClick={closeRegistrationModal}
          className={styles.closeButton}
        >
          ✖
        </button>
      </div>
    </Fragment>
  );
}
