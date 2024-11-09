import { formatDate } from "@fullcalendar/core";

export const formatJaDate = (date: string) =>
  formatDate(date, {
    month: "long",
    day: "numeric",
    weekday: "short",
    locale: "ja",
  });

export const formatJaTime = (datetime: string) =>
  formatDate(datetime, {
    hour: "2-digit",
    minute: "2-digit",
    locale: "ja",
  });
