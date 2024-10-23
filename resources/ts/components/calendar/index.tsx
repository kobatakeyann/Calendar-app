import styles from "@/ts/components/calendar/calendar.module.css";
import EventDisplay from "@/ts/components/calendar/components/event";
import { DateInformation, EventProps } from "@/ts/components/calendar/type";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { useState } from "react";

export default function Calendar(props: EventProps) {
  const today = new Date().toISOString();
  const [selectedDateInfo, setSelectedDateInfo] = useState<DateInformation>({
    date: today,
    events: [],
  });
  const handleDateClick = (arg: DateClickArg) => {
    const events = props.events.filter(
      (event) => event.extendedProps.date === arg.dateStr
    );
    setSelectedDateInfo({ date: arg.dateStr, events: events });
  };
  return (
    <div className={styles.calendarArea}>
      <div className={styles.calendar}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={props.events}
          dateClick={handleDateClick}
          eventDisplay="block"
          displayEventTime={false}
          dayMaxEventRows={true}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: false,
          }}
        />
      </div>
      <div className={styles.event}>
        <EventDisplay {...selectedDateInfo} />
      </div>
    </div>
  );
}
