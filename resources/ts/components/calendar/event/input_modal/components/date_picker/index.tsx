import "@/ts/components/calendar/event/input_modal/components/date_picker/datepicker.css";
import styles from "@/ts/components/calendar/event/input_modal/components/date_picker/datetime.module.css";
import { ModalProps } from "@/ts/components/calendar/type";
import { ja } from "date-fns/locale";
import React, { Fragment, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ja", ja);

export default function DatePickers(props: ModalProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const getDayClassName = (date: Date) => {
    const day = date.getDay();
    if (day === 0) return "sunday";
    if (day === 6) return "saturday";
    return "weekday";
  };
  return (
    <Fragment>
      <div className={styles.datetimePickers}>
        <DatePicker
          dateFormat={"MM/dd (eee)"}
          locale={"ja"}
          selected={startDate}
          onChange={(date) => setStartDate(date!)}
          dayClassName={getDayClassName}
        />
        <DatePicker
          dateFormat={"HH:mm"}
          locale={"ja"}
          selected={startDate}
          onChange={(date) => setStartDate(date!)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={10}
          timeFormat="HH:mm"
          timeCaption="start"
        />
      </div>
      <span className={styles.symbol}>{">"}</span>
      <div className={styles.datetimePickers}>
        <DatePicker
          dateFormat={"MM/dd (eee)"}
          locale={"ja"}
          selected={endDate}
          onChange={(date) => setEndDate(date!)}
          dayClassName={getDayClassName}
        />
        <DatePicker
          dateFormat={"HH:mm"}
          locale={"ja"}
          selected={endDate}
          onChange={(date) => setEndDate(date!)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={10}
          timeFormat="HH:mm"
          timeCaption="end"
        />
      </div>
    </Fragment>
  );
}
