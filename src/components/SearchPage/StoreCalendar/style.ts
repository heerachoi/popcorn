import styled from 'styled-components';
import { Calendar, Event,momentLocalizer } from 'react-big-calendar';

export const BigCalendar = styled(Calendar)`
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
`