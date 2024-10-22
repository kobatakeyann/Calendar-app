export interface Event {
  title: string;
  start: string;
  allDay: boolean;
  end?: string;
  extendedProps: {
    date: string;
    description?: string;
  };
}

export interface EventProps {
  eventObject: Event[];
}

export interface DateInformation {
  date: string;
  events: Event[];
}
