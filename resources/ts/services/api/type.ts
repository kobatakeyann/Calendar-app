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
