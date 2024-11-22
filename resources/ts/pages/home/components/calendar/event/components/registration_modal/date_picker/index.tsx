import "@/ts/pages/home/components/calendar/event/components/registration_modal/date_picker/datetime.module.css";
import styles from "@/ts/pages/home/components/calendar/event/components/registration_modal/date_picker/datetime.module.css";
import { stringToDate } from "@/ts/pages/home/components/calendar/event/components/registration_modal/date_picker/helper/cast";
import { getDayClassName } from "@/ts/pages/home/components/calendar/event/components/registration_modal/date_picker/helper/date_handler";
import { DatePickerProps } from "@/ts/pages/home/components/calendar/type";
import { ja } from "date-fns/locale";
import React, { Fragment, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickers(props: DatePickerProps) {
  registerLocale("ja", ja);
  const targetDate = props.dateInfo.date;
  const [startDate, setStartDate] = useState(stringToDate(targetDate));
  const [endDate, setEndDate] = useState(stringToDate(targetDate));
  const [isAllday, setIsAllday] = useState(false);
  const handleIsAllday = () => {
    setIsAllday(!isAllday);
  };
  const handleStartChange = (date: Date) => {
    setStartDate(date!);
    props.setPutForm!({
      ...props.putForm,
      ["start"]: date.toLocaleString(),
    });
  };
  const handleEndChange = (date: Date) => {
    setEndDate(date!);
    props.setPutForm!({
      ...props.putForm,
      ["end"]: date.toLocaleString(),
    });
  };
  useEffect(() => {
    props.setPutForm!({
      ...props.putForm,
      ["is_allday"]: isAllday,
    });
  }, [isAllday]);
  return (
    <Fragment>
      <div className={styles.datetimePickers}>
        <DatePicker
          dateFormat={"MM/dd (eee)"}
          locale={"ja"}
          selected={startDate}
          onChange={handleStartChange}
          dayClassName={getDayClassName}
          name="startDay"
        />
        {!isAllday && (
          <DatePicker
            dateFormat={"HH:mm"}
            locale={"ja"}
            selected={startDate}
            onChange={handleStartChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={10}
            timeFormat="HH:mm"
            timeCaption="startHour"
            name="start"
          />
        )}
      </div>
      <span className={styles.symbol}>{">"}</span>
      <div className={styles.datetimePickers}>
        <DatePicker
          dateFormat={"MM/dd (eee)"}
          locale={"ja"}
          selected={endDate}
          onChange={handleEndChange}
          dayClassName={getDayClassName}
          name="endDay"
        />
        {!isAllday && (
          <DatePicker
            dateFormat={"HH:mm"}
            locale={"ja"}
            selected={endDate}
            onChange={handleEndChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={10}
            timeFormat="HH:mm"
            timeCaption="endHour"
            name="end"
          />
        )}
      </div>
      <div className={styles.switchContainer}>
        <div className={styles.switchTitle}>終日</div>
        <label className={styles.switch}>
          <input
            type="checkbox"
            onChange={handleIsAllday}
            name="is_allday"
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </Fragment>
  );
}

export default DatePickers;
