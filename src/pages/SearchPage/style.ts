import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  border: 1px solid #A6A6A6;
  border-radius: 8px;
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
  font-size: 16px;
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
  width: 175px;
  height: 175px;
  border-radius: 8px 0px 0px 8px;
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
  border: 1px solid #A6A6A6;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 175px;
`

export const StoreInformation = styled.div`
  display:flex;
  flex-direction: column;
  padding: 16px;
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

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Category = styled.div`
  padding: 4px 16px 3px;
  height: 21px;
  background: #676767;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 12px;  
  display: flex;
  align-items: center;
  &:hover{
    background-color: #FFB321;
  }
`;