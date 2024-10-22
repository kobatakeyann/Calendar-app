import styles from "@/ts/components/calendar/calendar.module.css";
import EventDisplay from "@/ts/components/calendar/components/Event";
import { Event, EventProps } from "@/ts/components/calendar/type";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { useState } from "react";

export default function Calendar(props: EventProps) {
  const [selectedDateEvent, setSelectedDateEvent] = useState<Event[]>([]);
  const handleDateClick = (arg: DateClickArg) => {
    const targetDateEvent = props.eventObject.filter(
      (event) => event.date === arg.dateStr
    );
    targetDateEvent
      ? setSelectedDateEvent(targetDateEvent)
      : setSelectedDateEvent([]);
  };
  return (
    <div className={styles.calendar}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={props.eventObject}
        dateClick={handleDateClick}
      />
      <EventDisplay eventObject={selectedDateEvent} />
    </div>
  );
}
