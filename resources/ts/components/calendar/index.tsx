import styles from "@/ts/components/calendar/calendar.module.css";
import EventDisplay from "@/ts/components/calendar/components/Event";
import { Event } from "@/ts/components/calendar/type";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { useState } from "react";

export default function Calendar() {
  const events: Event[] = [
    { title: "地惑BBQ", date: "2024-10-04" },
    { title: "履修登録", date: "2024-10-07" },
    { title: "おでん", date: "2024-10-22" },
    { title: "AtCoder", date: "2024-10-26" },
    { title: "Holton", date: "2024-10-18" },
    { title: "せいま colloquium", date: "2024-10-29" },
  ];
  const [selectedDateEvent, setSelectedDateEvent] = useState<Event[]>([]);

  const handleDateClick = (arg: DateClickArg) => {
    const targetDateEvent = events.filter(
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
        events={events}
        dateClick={handleDateClick}
      />
      <EventDisplay eventObject={selectedDateEvent} />
    </div>
  );
}
