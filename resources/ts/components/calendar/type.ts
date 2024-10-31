import { Dispatch, SetStateAction } from "react";

export interface Event {
  id?: string;
  title: string;
  start: string;
  end: string;
  is_allday?: boolean;
  color: string;
  location?: string;
  description?: string;
  user_id?: string;
}

export interface EventProps {
  events: Event[];
}

export interface DateInformation {
  date: string;
  events: Event[];
}

export interface ModalProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  isNewEvent: boolean;
  dateInfo: DateInformation;
  eventId?: string;
}

export interface RegistrationModalProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  isNewEvent: boolean;
  date: string;
  putForm: Event;
  setPutForm?: Dispatch<SetStateAction<Event>>;
}

export interface EditModalProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  isNewEvent: boolean;
  date: string;
  event: Event;
  putForm: Event;
  setPutForm?: Dispatch<SetStateAction<Event>>;
}

export type DatePickerProps = RegistrationModalProps | EditModalProps;

export type FetchContextType = {
  shouldFetch: boolean;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
};
