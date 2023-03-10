import styled from 'styled-components';
import { Calendar, } from 'react-big-calendar';
import COLORS from '../../assets/CSS/colors';

export const BigCalendar = styled(Calendar)`
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
`

// Color box
export const ColorInformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
  gap: 20px;
  border: 1px solid ${COLORS.orange3};
  border-radius: 40px;
  padding-top: 10px;
  box-sizing: border-box;
`

export const ColorInformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 10px;
`

export const CategoryColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius:30px;
`
export const CategoryTitle = styled.div`
  font-size: 14px;
`