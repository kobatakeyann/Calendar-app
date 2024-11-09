import { FetchContext } from "@/ts/pages/home/components/calendar";
import styles from "@/ts/pages/home/components/calendar/event/modal/components/registration/registration.module.css";
import { RegistrationModalProps } from "@/ts/pages/home/components/calendar/type";
import { addEvent } from "@/ts/services/api/api";
import { Event } from "@/ts/services/api/type";
import { ja } from "date-fns/locale";
import React, { ChangeEvent, Fragment, useContext, useState } from "react";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickers from "../date_picker";

registerLocale("ja", ja);

function EventRegistration(props: RegistrationModalProps) {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error("FetchContext is not found");
  }
  const { setShouldFetch } = context;
  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
  const [putForm, SetPutForm] = useState<Event>({
    title: "",
    start: "",
    end: "",
    is_allday: false,
    color: "orange",
    location: undefined,
    description: undefined,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    SetPutForm({ ...putForm, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("putForm", putForm);
    try {
      await addEvent(putForm);
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
          onSubmit={handleSubmit}
        >
          <div className={styles.formElement}>
            <input
              type="text"
              placeholder="タイトルを入力"
              className={styles.eventInput}
              name="title"
              onChange={handleChange}
            ></input>
          </div>
          <div className={styles.dateInput}>
            <DatePickers
              {...props}
              putForm={putForm}
              setPutForm={SetPutForm}
            />
          </div>
          <div className={styles.formElement}>
            <textarea
              placeholder="メモ"
              rows={3}
              maxLength={50}
              className={styles.descriptionInput}
              onChange={handleChange}
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

export default EventRegistration;
