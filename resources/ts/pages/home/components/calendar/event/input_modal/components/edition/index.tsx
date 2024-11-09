import { FetchContext } from "@/ts/pages/home/components/calendar";
import styles from "@/ts/pages/home/components/calendar/event/input_modal/components/edition/edition.module.css";
import { EditModalProps } from "@/ts/pages/home/components/calendar/type";
import { deleteEvent, updateEvent } from "@/ts/services/api/api";
import { ja } from "date-fns/locale";
import React, { ChangeEvent, Fragment, useContext, useState } from "react";
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
  const [putForm, SetPutForm] = useState({
    title: props.event.title,
    start: props.event.start,
    end: props.event.end,
    isallday: props.event.is_allday,
    color: props.event.color,
    location: props.event.location,
    description: props.event.description,
    userId: props.event.user_id,
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    SetPutForm({ ...putForm, [name]: value });
  };

  const handleDelete = async (eventId: string) => {
    try {
      await deleteEvent(eventId);
      props.setIsOpened(false);
      setShouldFetch(true);
    } catch (error) {
      console.error("API request error:", error);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("putForm", putForm);
    try {
      await updateEvent(props.event.id!, putForm);
      props.setIsOpened(false);
      setShouldFetch(true);
    } catch {
      console.error("Update failed", console.error());
    }
  };

  return (
    <Fragment>
      <div
        id={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.modalHeader}>予定を編集</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.formElement}>
            <input
              type="text"
              name="title"
              defaultValue={props.event.title}
              placeholder="タイトルを入力"
              className={styles.eventInput}
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
              name="description"
              defaultValue={props.event.description}
              rows={3}
              maxLength={50}
              className={styles.descriptionInput}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.submitButton}
          >
            決定
          </button>
        </form>
        <button
          type="submit"
          className={styles.deleteButton}
          onClick={() => handleDelete(props.event.id!)}
        >
          削除
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
