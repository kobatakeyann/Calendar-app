import styles from "@/ts/pages/home/components/calendar/calendar.module.css";
import EventDisplay from "@/ts/pages/home/components/calendar/event";
import {
  DateInformation,
  FetchContextType,
} from "@/ts/pages/home/components/calendar/type";
import { Event } from "@/ts/services/api/type";

import { formatEvents } from "@/ts/pages/home/components/calendar/helper/eventService";
import { fetchEvents, fetchOnDateEvents } from "@/ts/services/api/api";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { createContext, useEffect, useState } from "react";

export const FetchContext = createContext<FetchContextType | undefined>(
  undefined
);

function Calendar() {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDateInfo, setSelectedDateInfo] = useState<DateInformation>({
    date: today,
    events: [],
  });
  const [events, setEvents] = useState<Event[]>([]);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const handleFetchEvents = async () => {
    const e = await fetchEvents();
    setEvents(e);
    setShouldFetch(false);
  };
  useEffect(() => {
    if (shouldFetch) {
      handleFetchEvents();
    }
  }, [shouldFetch]);

  const handleDateClick = async (arg: DateClickArg) => {
    try {
      const onDateEvents = await fetchOnDateEvents(arg.dateStr);
      setSelectedDateInfo({ date: arg.dateStr, events: onDateEvents });
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

export default Calendar;
