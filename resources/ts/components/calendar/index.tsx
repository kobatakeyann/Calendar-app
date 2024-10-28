import styles from "@/ts/components/calendar/calendar.module.css";
import EventDisplay from "@/ts/components/calendar/event";
import { DateInformation, Event } from "@/ts/components/calendar/type";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

// const events: Event[] = [
//   {
//     title: "地惑BBQ",
//     start: "2024-10-04T17:00:00",
//     end: "2024-10-04T20:00:00",
//     allDay: false,
//     extendedProps: {
//       date: "2024-10-04",
//       description: "キャンパスコモンで15時から準備する",
//     },
//   },
//   {
//     title: "履修登録",
//     start: "2024-10-07",
//     allDay: true,
//     extendedProps: {
//       date: "2024-10-07",
//       description: "リサーチレビューも忘れないように登録する",
//     },
//   },
//   {
//     title: "夏休みお疲れ会",
//     start: "2024-10-18T19:00:00",
//     end: "2024-10-18T22:00:00",
//     allDay: false,
//     extendedProps: {
//       date: "2024-10-18",
//       // description: "バルお店予約する",
//     },
//   },
//   {
//     title: "おでん",
//     start: "2024-10-22T19:00:00",
//     allDay: false,
//     end: "2024-10-22T22:00:00",
//     extendedProps: {
//       date: "2024-10-22",
//       description: "天神に19時に着くバスに乗る",
//     },
//   },
//   {
//     title: "AtCoder",
//     start: "2024-10-26T21:00:00",
//     allDay: false,
//     end: "2024-10-26T22:40:00",
//     extendedProps: {
//       date: "2024-10-26",
//       description: "今週はちゃんと専念する",
//     },
//   },
//   {
//     title: "Holton",
//     start: "2024-10-18T13:00:00",
//     allDay: false,
//     end: "2024-10-18T15:00:00",
//     extendedProps: {
//       date: "2024-10-18",
//       description: "後期１回目",
//     },
//   },
//   {
//     title: "せいま colloquium",
//     start: "2024-10-29",
//     allDay: true,
//     extendedProps: {
//       date: "2024-10-29",
//       description: "あと1週間で発表スライドをまとめる",
//     },
//   },
// ];

export default function Calendar() {
  const today = new Date().toISOString();
  const [selectedDateInfo, setSelectedDateInfo] = useState<DateInformation>({
    date: today,
    events: [],
  });
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/events", {
          headers: {
            "X-XSRF-TOKEN": document.cookie.match(/XSRF-TOKEN=([^;]+)/)![1],
          },
        });
        setEvents(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, []);
  const handleDateClick = (arg: DateClickArg) => {
    const tagergetEvents = events.filter(
      (event) => event.extendedProps.date === arg.dateStr
    );
    setSelectedDateInfo({ date: arg.dateStr, events: tagergetEvents });
  };

  return (
    <div className={styles.calendarArea}>
      <div className={styles.calendar}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
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
