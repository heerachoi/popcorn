import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import COLORS from '../../assets/CSS/colors';

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

export const SearchInputContainer = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
  border: 1px solid ${COLORS.gray6};
  border-radius: 20px;
  width: 293px;
  height: 30px;
  padding: 8px 16px;
  cursor:pointer;
  gap: 4px;
`

export const InputTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  min-width: 54px;
  display: flex;  
  justify-content: center;
`

export const FilterTitle = styled(InputTitle)`
   &:hover{
    color: ${COLORS.white}; 
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  color: ${COLORS.gray6};
  width: 300px;
`

export const SearchItemContainer = styled.div`
`

export const SearchTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px 3px;
  gap: 4px;
  height: 40px;
  background: ${COLORS.orange4};
  border: 1px solid ${COLORS.orange2};
  border-radius: 20px;
  color: ${COLORS.orange1}; 
  &:hover{
    background: ${COLORS.orange2};
    color: ${COLORS.white}; 
  }
`

export const SearchEventPeriod = styled.select`
  outline: none;
  border: none;
  background-color: transparent; 
`;

export const Option = styled.option`
  background: #fff;
  color: #fff;
  padding: 3px 0;
  font-size: 16px;
`

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DatePickerContainer = styled(DatePicker)`
  outline: none;
  border: none;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: 100px;
`

export const ToggleCalendar = styled.div`
  /* display: flex; */
  margin-top: 40px;
  box-sizing: border-box;
  
`

export const DepartmentStoreCategory = styled.select`
  outline: none;
  box-sizing: border-box;
  height: 100px;
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
export const InformationContainer = styled.div`
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
  color: ${COLORS.gray1};
`

export const EventPeriod = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #A6A6A6;
`
export const FilterResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:16px;
`

export const StoreContainer = styled.div`
  border: 1px solid ${COLORS.gray7};
  background-color: ${COLORS.gray8};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 175px;
  &:hover{
    border: 1px solid ${COLORS.orange3};
    background-color: ${COLORS.orange4}; 
  }
`

export const StoreInformation = styled.div`
  display:flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
`

export const CalendarContainer = styled.div`
  width: 100%;
`

export const FilterResultAndCalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap:14px;
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  float: right;
`;

export const Category = styled.div`
  padding: 4px 16px 3px;
  height: 21px;
  background:${COLORS.gray3};
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 12px;  
  display: flex;
  align-items: center;
  &:hover{
    background-color: ${COLORS.orange2};
  }
`;