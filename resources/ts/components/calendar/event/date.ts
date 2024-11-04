import { formatDate } from "@fullcalendar/core";

export const formattJaDate = (date: string) =>
  formatDate(date, {
    month: "long",
    day: "numeric",
    weekday: "short",
    locale: "ja",
  });

export const formattJaTime = (datetime: string) =>
  formatDate(datetime, {
    hour: "2-digit",
    minute: "2-digit",
    locale: "ja",
  });
