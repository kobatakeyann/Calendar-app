import { Event } from "@/ts/components/calendar/type";

export const formatEvents = (apiResponse: any[]): Event[] => {
  return apiResponse.map((event) => ({
    title: event.title,
    start: event.start,
    end: event.end,
    allDay: event.is_all_day,
    color: event.color,
    extendedProps: {
      date: event.start,
      description: event.description,
    },
  }));
};
