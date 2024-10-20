import styles from "@/ts/components/calendar/calendar.module.css";
import EventDisplay from "@/ts/components/calendar/components/Event";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import React, { useCallback, useState } from "react";

export interface EventObject {
	title: string;
	date: string;
}

export interface EventProps {
	eventObject: EventObject[];
}

export default function Calendar() {
	const events: EventObject[] = [
		{ title: "地惑BBQ", date: "2024-10-04" },
		{ title: "履修登録", date: "2024-10-07" },
		{ title: "おでん", date: "2024-10-22" },
		{ title: "AtCoder", date: "2024-10-26" },
		{ title: "Holton", date: "2024-10-18" },
	];
	const [selectedDateEvent, setSelectedDateEvent] = useState<EventObject[]>([]);

	const handleDateClick = useCallback((arg: DateClickArg) => {
		const targetDateEvent = events.filter(
			(event) => event.date === arg.dateStr
		);
		targetDateEvent
			? setSelectedDateEvent(targetDateEvent)
			: setSelectedDateEvent([]);
	}, []);

	return (
		<div className={styles.calendar}>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				events={events}
				dateClick={handleDateClick}
			/>
			<EventDisplay eventObject={selectedDateEvent} />
		</div>
	);
}
