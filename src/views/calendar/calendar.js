import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import heLocale from '@fullcalendar/core/locales/he';

const Calendar = () => {

    function renderEventContent(eventInfo) {
        return(
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        )
      }

  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      locale={heLocale}
      initialView="dayGridMonth"
      events={[
        { title: 'יומולדת לחיים כהן', date: '2024-04-01' },
        { title: 'יומולדת למשה לוי', date: '2024-04-02' },
        { title: 'יום נישואין דוד ורחל כהן', date: '2024-04-02' },
        { title: 'event 2', date: '2024-04-02' },
        { title: 'event 3', date: '2024-04-02' }
      ]}
      eventContent={renderEventContent}
    />
  )
}
export default Calendar;