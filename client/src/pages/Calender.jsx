// Imported plugins for ScheduleXCalendar and plugins
// docs from ScheduleXCalendar: https://schedule-x.dev/docs/frameworks/react
import React, { useState }from 'react';
import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin  } from '@schedule-x/events-service'
 
import '@schedule-x/theme-default/dist/index.css'
import { useEffect } from 'react';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from '@schedule-x/event-modal'


 
function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0]
 
  const calendar = useCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    // 'events' are used to create an Event
    events: [
      {
        id: '1',
        title: 'First 1',
        start: '2025-07-19 00:00',
        end: '2025-07-19 05:00',
        description: 'Really cool event'
      },
    ],

    plugins: [eventsService, createDragAndDropPlugin(), createEventModalPlugin()]
  })

 
  useEffect(() => {
    // get all events
    eventsService.getAll()
  }, [])
 
  return (
    <>
      {// add Chocolate Sans in the future
      }
      <h1 class="text-center center text-3xl text-orange-600 ">Events Calendar</h1>
      <div class="font-(Chocolate-Classical-Sans) pt-15px w-1200px max-w-100vw h-800px max-h-90vh ">
      <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </>
  )
}
 
export default CalendarApp