import { Event } from "@/ts/services/api/type";
import { Dispatch, SetStateAction } from "react";

export interface DateInformation {
  date: string;
  events: Event[];
}

export interface RegistrationModalProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  dateInfo: DateInformation;
  // putForm: Event;
  // setPutForm?: Dispatch<SetStateAction<Event>>;
}

export interface RegistrationDatepickerProps {
  dateInfo: DateInformation;
  putForm: Event;
  setPutForm?: Dispatch<SetStateAction<Event>>;
}

export interface EditModalProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  isNewEvent: boolean;
  date: string;
  eventId?: string;
  event: Event;
  putForm: Event;
  setPutForm?: Dispatch<SetStateAction<Event>>;
}

export type DatePickerProps = RegistrationModalProps | EditModalProps;

export type FetchContextType = {
  shouldFetch: boolean;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
};
