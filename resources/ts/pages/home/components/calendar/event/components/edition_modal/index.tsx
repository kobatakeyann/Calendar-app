import { FetchContext } from "@/ts/pages/home/components/calendar";
import ColorPicker from "@/ts/pages/home/components/calendar/event/components/edition_modal/color_picker";
import DatePickers from "@/ts/pages/home/components/calendar/event/components/edition_modal/date_picker";
import styles from "@/ts/pages/home/components/calendar/event/components/edition_modal/edition.module.css";
import { EditionModalProps } from "@/ts/pages/home/components/calendar/type";
import { deleteEvent, updateEvent } from "@/ts/services/api/api";
import { Event } from "@/ts/services/api/type";
import React, { ChangeEvent, Fragment, useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function EventEditionModal(props: EditionModalProps) {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error("FetchContext is not found");
  }
  const { setShouldFetch } = context;
  const closeRegistrationModal = () => {
    props.setIsOpened(false);
  };
  const targetEvent = props.dateInfo.events.find(
    (event) => event.id === props.eventId
  );
  const [putForm, setPutForm] = useState<Event>({
    title: targetEvent!.title,
    start: targetEvent!.start,
    end: targetEvent!.end,
    is_allday: targetEvent!.is_allday,
    color: targetEvent!.color,
    location: targetEvent!.location,
    description: targetEvent!.description,
    user_id: targetEvent!.user_id,
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
    try {
      await updateEvent(props.eventId, putForm);
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
              defaultValue={targetEvent!.title}
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
              targetEvent={targetEvent}
            />
          </div>
          <div className={styles.colorPalette}>
            <ColorPicker
              putForm={putForm}
              setPutForm={setPutForm}
              targetEvent={targetEvent}
            />
          </div>
          <div className={styles.formElement}>
            <textarea
              placeholder="メモ"
              name="description"
              defaultValue={targetEvent!.description}
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
          onClick={() => handleDeleteEvent(props.eventId)}
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
