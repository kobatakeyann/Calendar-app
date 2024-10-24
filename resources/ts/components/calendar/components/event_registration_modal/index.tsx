import styles from "@/ts/components/calendar/components/event_registration_modal/event_registration_modal.module.css";
import { ModalProps } from "@/ts/components/calendar/type";
import React, { Fragment } from "react";

export default function EventRegistrationModal(props: ModalProps) {
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
        <h2>予定を作成</h2>
        <form>
          <input
            type="text"
            placeholder="タイトルを入力"
          />
          <label>日付</label>
          <input type="date" />
          <label>説明</label>
          <textarea></textarea>
        </form>
        <button type="submit">追加</button>
        <button onClick={closeRegistrationModal}>閉じる</button>
      </div>
    </Fragment>
  );
}
