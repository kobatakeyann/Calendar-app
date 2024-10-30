import { FetchContext } from "@/ts/components/calendar";
import styles from "@/ts/components/calendar/event/input_modal/components/edition/edition.module.css";
import { EditModalProps } from "@/ts/components/calendar/type";
import { deleteData } from "@/ts/services/api/apiRequest";
import { ja } from "date-fns/locale";
import React, { Dispatch, Fragment, SetStateAction, useContext } from "react";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickers from "../date_picker";

registerLocale("ja", ja);

export default function EventEdition(props: EditModalProps) {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error("FetchContext is not found");
  }
  const { setShouldFetch } = context;

  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
  const deleteEvent = async (
    id: string,
    setShouldFetch: Dispatch<SetStateAction<boolean>>
  ) => {
    try {
      await deleteData(`/api/events/${id}`);
      props.setIsOpened(false);
      setShouldFetch(true);
    } catch (error) {
      console.error("API request error:", error);
    }
  };
  const handleDelete = (eventId: string) => {
    deleteEvent(eventId, setShouldFetch);
  };

  return (
    <Fragment>
      <div
        id={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.modalHeader}>予定を編集</h2>
        <form className={styles.form}>
          <div className={styles.formElement}>
            <input
              type="text"
              defaultValue={props.event.title}
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
              defaultValue={props.event.description}
              rows={3}
              maxLength={50}
              className={styles.descriptionInput}
            ></textarea>
          </div>
        </form>
        <button
          type="submit"
          className={styles.deleteButton}
          onClick={() => handleDelete(props.event.id)}
        >
          削除
        </button>
        <button
          type="submit"
          className={styles.submitButton}
        >
          決定
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
