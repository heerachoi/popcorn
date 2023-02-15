import { useEffect, useState } from 'react';
import { Calendar, Event,momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { BigCalendar} from './style';
import { MdHeight } from 'react-icons/md';

interface StoreEvent extends Event {
  title: string;
  open: Date;
  close: Date;
}

const localizer = momentLocalizer(moment);

const StoreCalendar = () => {
  const [events, setEvents] = useState<StoreEvent[]>([]);

  useEffect(() => {
    // Fetch data from JSON database
    fetch('../../../data/popupStore.json')
      .then(response => response.json())
      .then(data => {
        // Transform data into format expected by react-big-calendar
        const transformedData = data.map((event: StoreEvent) => ({
          ...event,
          open: new Date(event.open),
          close: new Date(event.close)
        }));
        setEvents(transformedData);
      });
  }, []);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      titleAccessor={(event: StoreEvent) => event.title}
      style={{ height: "100vh" }}
    />
  );
}

export default StoreCalendar;