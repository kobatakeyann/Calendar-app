import { Event } from "@/ts/services/api/type";
import { Dispatch, SetStateAction } from "react";

export interface DateInformation {
  date: string;
  events: Event[];
}

export interface RegistrationModalProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  dateInfo: DateInformation;
}

export interface EditionModalProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  dateInfo: DateInformation;
  eventId: string;
}

export interface DatePickerProps {
  dateInfo: DateInformation;
  putForm: Event;
  setPutForm: Dispatch<SetStateAction<Event>>;
  targetEvent?: Event;
}

export type FetchContextType = {
  shouldFetch: boolean;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
};
