import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const DatePickerContainer = styled(DatePicker)`
  outline: none;
  border: none;
`

export const SearchContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
`

export const SearchContainerTop = styled.div`
  display: flex;
  border: 8px solid #E6EBFA;
  height: 36px;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 50%;
  border: none;
  border-right: 1px solid #E6EBFA;
  font-size: 16px;
  outline: none;
  margin-left: 10px;
`

export const StartingDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  margin-left: 10px;
  border-right: 1px solid #E6EBFA;
`

export const SearchEventPeriod = styled.select`
  width: 200px;
  margin-left: 10px;
  border: none;
  outline: none;
`

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ToggleCalendar = styled.div`
  /* display: flex; */
  margin-top: 40px;
  box-sizing: border-box;
`

export const SearchContainerBottom = styled(SearchContainerTop)`
  border-top: none;
`

export const DepartmentStoreCategory = styled.select`
  width: 33%;
  margin-left: 10px;
  border: none;
  outline: none;
  border-right: 1px solid #E6EBFA;
  padding-right: 40px;
  box-sizing: border-box;
`

export const ItemCategory = styled.div`
  width: 33%;
  margin-left: 10px;
  border-right: 1px solid #E6EBFA;
`

export const EtcCategory = styled(ItemCategory)`
  border: none;
`

export const FilterTypes = styled.div`
`

export const SelectDate = styled.div`
`

export const PosterImg = styled.img`
  width: 100%;
  border-radius: 8px 8px 0px 0px;
`;

export const StoreTitle = styled.div`
  font-weight: 800;
  font-size: 17px;
  line-height: 29px;
  color: #323232;
`

export const EventPeriod = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #A6A6A6;
`
export const FilterResult = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;
`

export const StoreContainer = styled.div`
  width: 259px;
  border: 1px solid #A6A6A6;
  border-radius: 8px;
`