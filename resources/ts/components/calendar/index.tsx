import styles from "@/ts/components/calendar/calendar.module.css";
import EventDisplay from "@/ts/components/calendar/event";
import {
  DateInformation,
  Event,
  FetchContextType,
} from "@/ts/components/calendar/type";
import { fetchData } from "@/ts/services/api/apiRequest";
import { formatEvents } from "@/ts/services/api/eventService";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { createContext, useEffect, useState } from "react";

export const FetchContext = createContext<FetchContextType | undefined>(
  undefined
);

export default function Calendar() {
  const today = new Date().toISOString();
  const [selectedDateInfo, setSelectedDateInfo] = useState<DateInformation>({
    date: today,
    events: [],
  });
  const [events, setEvents] = useState<Event[]>([]);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const fetchEvents = async () => {
    try {
      const response = await fetchData<Event[]>("/api/events");
      setEvents(response);
    } catch (error) {
      console.log("API request error:", error);
    } finally {
      setShouldFetch(false);
    }
  };
  useEffect(() => {
    if (shouldFetch) {
      fetchEvents();
    }
  }, [shouldFetch]);

  const handleDateClick = async (arg: DateClickArg) => {
    try {
      const response = await fetchData<Event[]>(
        `/api/events/on-date?date=${arg.dateStr}`
      );
      setSelectedDateInfo({ date: arg.dateStr, events: response });
    } catch (error) {
      console.log("API request error:", error);
    }
  };

  return (
    <div className={styles.calendarArea}>
      <div className={styles.calendar}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={formatEvents(events)}
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
      <FetchContext.Provider value={{ shouldFetch, setShouldFetch }}>
        <div className={styles.event}>
          <EventDisplay {...selectedDateInfo} />
        </div>
      </FetchContext.Provider>
    </div>
  );
}
