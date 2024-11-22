import { FetchContext } from "@/ts/pages/home/components/calendar";
import DatePickers from "@/ts/pages/home/components/calendar/event/components/registration_modal/date_picker";
import styles from "@/ts/pages/home/components/calendar/event/components/registration_modal/registration.module.css";
import { RegistrationModalProps } from "@/ts/pages/home/components/calendar/type";
import { addEvent } from "@/ts/services/api/api";
import { Event } from "@/ts/services/api/type";
import React, { ChangeEvent, Fragment, useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { stringToDate } from "./date_picker/helper/cast";

function EventRegistrationModal(props: RegistrationModalProps) {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error("FetchContext is not found");
  }
  const { setShouldFetch } = context;
  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
  const initialDatetime = stringToDate(props.dateInfo.date).toLocaleString();
  const [putform, setPutForm] = useState<Event>({
    title: "",
    start: initialDatetime,
    end: initialDatetime,
    is_allday: false,
    color: "orange",
    location: undefined,
    description: undefined,
  });

  const handleChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPutForm({ ...putform, [name]: value });
  };
  const handleAddEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addEvent(putform);
      props.setIsOpened(false);
      setShouldFetch(true);
    } catch {
      console.error("Registration failed", console.error());
    }
  };
  return (
    <Fragment>
      <div
        id={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.modalHeader}>予定を作成</h2>
        <form
          className={styles.form}
          onSubmit={handleAddEvent}
        >
          <div className={styles.formElement}>
            <input
              type="text"
              placeholder="タイトルを入力"
              className={styles.eventInput}
              name="title"
              onChange={handleChangeForm}
            ></input>
          </div>
          <div className={styles.dateInput}>
            <DatePickers
              {...props}
              putForm={putform}
              setPutForm={setPutForm}
            />
          </div>
          <div className={styles.formElement}>
            <textarea
              placeholder="メモ"
              rows={3}
              maxLength={50}
              className={styles.descriptionInput}
              onChange={handleChangeForm}
              name="description"
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
          >
            追加
          </button>
        </form>
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

export default EventRegistrationModal;
