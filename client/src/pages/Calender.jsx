// Imported plugins for ScheduleXCalendar and plugins
// docs from ScheduleXCalendar: https://schedule-x.dev/docs/frameworks/react
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { useState } from "react";

import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "@schedule-x/theme-default/dist/index.css";
import { useEffect } from "react";
import { getAllEvents } from "../services/eventService";

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useCalendarApp({
    firstDayOfWeek: 0,
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],

    plugins: [
      eventsService,
      createDragAndDropPlugin(),
      createEventModalPlugin(),
    ],
  });

  const fixDatetime = (datetime) => {
    const date = new Date(datetime)
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  const fetchEvents = async () => {
    const response = await getAllEvents();
    if (response.error != null) {
      // TODO: notify the user
      console.error(response.error);
      setEvents([]);
      calendar.eventsService.set([]);
      return;
    }
    calendar?.eventsService.set(
      response.map((event) => {
        const start = fixDatetime(event.start);
        const end = fixDatetime(event.end);
        return {
          id: event.id,
          title: event.title,
          start,
          end,
        };
      })
    );
  };

  useEffect(() => {
    fetchEvents();
  }, [calendar]);

  return (
    <>
      {
        // add Chocolate Sans in the future
      }
      <h1 className="text-center center text-4xl text-orange-600 py-10">
        Events Calendar
      </h1>
      <div className="font-(Chocolate-Classical-Sans) pt-15px max-w-90vw h-[60vh] overflow-y-auto mx-15">
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </>
  );
}

export default CalendarApp;
