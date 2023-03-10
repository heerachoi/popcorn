// library
import moment from 'moment';
import { useCallback, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useNavigate } from 'react-router-dom';
// types
import { Store } from '../../types/data/storeInterface';
// style
import COLORS from '../../assets/CSS/colors';
import 'react-big-calendar/lib/css/react-big-calendar.css';

interface Props {
  storeList: Store[];
}

const localizer = momentLocalizer(moment);

const StoreCalendar = ({ storeList }: Props) => {
  const navigate = useNavigate();

  // 오른쪽 탭 설정하기
  const { views } = useMemo(
    () => ({
      views: {
        month: true,
      },
    }),
    [],
  );

  const events = storeList.map((store: Store) => {
    return {
      ...store,
      start: new Date(store.open),
      end: new Date(store.close),
    };
  });

  // 달력에서 클릭시 페이지 이동
  const handleSelectEvent = useCallback(
    (event: Store) => navigate(`/detail/${event.id}`, { state: event }),
    [],
  );

  // 조건에 따른 그래프 색깔
  const eventPropGetter = useCallback(
    (event: Store) => ({
      style: {
        backgroundColor: `${COLORS.green1}`,
      },
      ...(event.item === '패션' && {
        style: {
          backgroundColor: `${COLORS.green3}`,
        },
      }),
      ...(event.item === '식음료' && {
        style: {
          backgroundColor: `${COLORS.orange3}`,
        },
      }),
      ...(event.item === '캐릭터' && {
        style: {
          backgroundColor: `${COLORS.orange4}`,
        },
      }),
      ...(event.item === '소품' && {
        style: {
          backgroundColor: `${COLORS.orange2}`,
        },
      }),
      ...(event.item === '주류' && {
        style: {
          backgroundColor: `${COLORS.pink}`,
        },
      }),
    }),
    [],
  );

  return (
    <Calendar
      localizer={localizer}
      events={events}
      style={{ height: '100vh' }}
      views={views}
      onSelectEvent={handleSelectEvent}
      eventPropGetter={eventPropGetter}
      popup
    />
  );
};

export default StoreCalendar;
