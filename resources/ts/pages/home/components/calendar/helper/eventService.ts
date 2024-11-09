import { Event } from "@/ts/services/api/type";

export const formatEvents = (apiResponse: any[]): Event[] => {
  return apiResponse.map((event) => ({
    id: event.id,
    title: event.title,
    start: event.start,
    end: event.end,
    isallday: event.is_allday,
    color: event.color,
    extendedProps: {
      location: event.location,
      description: event.description,
      userId: event.user_id,
    },
  }));
};
