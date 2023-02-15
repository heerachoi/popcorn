import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const SearchPageContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
`
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap:10px;
`

export const SearchItemContainer = styled.div`
  border: 1px solid #000;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 7px 20px;
`

export const SearchTagContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FilterTitle = styled.div`
  
`

export const SearchInput = styled.input`
  font-size: 13px;
  border: none;
  outline: none;
  
  border-radius: 3px;
`

export const SearchEventPeriod = styled.select`
  outline: none;
  
  border-radius: 3px;
`

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DatePickerContainer = styled(DatePicker)`
  outline: none;
  display: flex;
  flex-direction: column;
  
  
`

export const ToggleCalendar = styled.div`
  /* display: flex; */
  margin-top: 40px;
  box-sizing: border-box;
  
`

export const DepartmentStoreCategory = styled.select`
  outline: none;
  box-sizing: border-box;
`

export const ItemCategory = styled.div`
  
  border: 1px solid black;
  border-radius: 3px;
`

export const LocationCategory = styled.div`
  
`


export const EtcCategory = styled(ItemCategory)`
  border: 1px solid black;
  border-radius: 3px;
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
  width: 50%;
`

export const StoreContainer = styled.div`
  width: 259px;
  border: 1px solid #A6A6A6;
  border-radius: 8px;
`

export const CalendarContainer = styled.div`
  width: 50%;
`

export const FilterItemHolder = styled.div`
  color: rgba(0,0,0,0.5);
`


export const FilterResultAndCalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
`