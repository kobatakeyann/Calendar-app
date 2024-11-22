import { FetchContext } from "@/ts/pages/home/components/calendar";
import DatePickers from "@/ts/pages/home/components/calendar/event/components/edition_modal/date_picker";
import styles from "@/ts/pages/home/components/calendar/event/components/edition_modal/edition.module.css";
import { EditModalProps } from "@/ts/pages/home/components/calendar/type";
import { deleteEvent, updateEvent } from "@/ts/services/api/api";
import React, { ChangeEvent, Fragment, useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function EventEditionModal(props: EditModalProps) {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error("FetchContext is not found");
  }
  const { setShouldFetch } = context;
  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
  const [putForm, setPutForm] = useState({
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
    setPutForm({ ...putForm, [name]: value });
  };

  const handleDeleteEvent = async (eventId: string) => {
    try {
      await deleteEvent(eventId);
      props.setIsOpened(false);
      setShouldFetch(true);
    } catch (error) {
      console.error("API request error:", error);
    }
  };
  const handleUpdateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
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
          onSubmit={handleUpdateEvent}
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
              setPutForm={setPutForm}
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
          onClick={() => handleDeleteEvent(props.event.id!)}
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
