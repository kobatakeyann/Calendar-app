import { Dispatch, SetStateAction } from "react";

export interface Event {
  id: string;
  title: string;
  start: string;
  end: string;
  isallday: boolean;
  color: string;
  location?: string;
  description?: string;
  userId: string;
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
}

export interface EditModalProps {
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  isNewEvent: boolean;
  date: string;
  event: Event;
}

export type FetchContextType = {
  shouldFetch: boolean;
  setShouldFetch: Dispatch<SetStateAction<boolean>>;
};
