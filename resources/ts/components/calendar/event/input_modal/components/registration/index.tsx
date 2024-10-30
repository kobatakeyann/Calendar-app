import styles from "@/ts/components/calendar/event/input_modal/components/registration/registration.module.css";
import { RegistrationModalProps } from "@/ts/components/calendar/type";
import { ja } from "date-fns/locale";
import React, { Fragment } from "react";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickers from "../date_picker";

registerLocale("ja", ja);

export default function EventRegistration(props: RegistrationModalProps) {
  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
  return (
    <Fragment>
      <div
        id={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.modalHeader}>予定を作成</h2>
        <form className={styles.form}>
          <div className={styles.formElement}>
            <input
              type="text"
              placeholder="タイトルを入力"
              className={styles.eventInput}
            ></input>
          </div>
          <div className={styles.dateInput}>
            <DatePickers {...props} />
          </div>
          <div className={styles.formElement}>
            <textarea
              placeholder="メモ"
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
