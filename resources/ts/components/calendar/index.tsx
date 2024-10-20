import styles from "@/ts/components/calendar/calendar.module.css";
import Event from "@/ts/components/calendar/components/Event";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { useCallback } from "react";

export default function Calendar() {
  const handleDateClick = useCallback((arg: DateClickArg) => {
    alert(arg.dateStr);
  }, []);

  return (
    <div className={styles.calendar}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[{ title: "地惑BBQ", date: "2024-10-04" }]}
        dateClick={handleDateClick}
      />
      <Event />
    </div>
  );
}
