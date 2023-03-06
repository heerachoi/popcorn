import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import COLORS from '../../assets/CSS/colors';

export const SearchPageContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 10px;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    max-width: 800px;
    width: 100%;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${COLORS.green};
  border-radius: 20px;
  width: 283px;
  height: 30px;
  padding: 8px 16px;
  cursor: pointer;
  gap: 4px;
  @media screen and (max-width: 1100px) {
    width: 95%;
    max-width: 800px;
    justify-content: flex-start;
    height: 28px;
  }
`;

export const KeyWordInputTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  min-width: 54px;
  max-width: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${COLORS.green1};
  @media screen and (max-width: 1100px) {
    /* word-break: keep-all; */
    font-size: 12px;
  }
`;

export const FilterTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  min-width: 90px;
  display: flex;
  justify-content: center;
  color: ${COLORS.orange6};
  &:hover {
    color: ${COLORS.white};
  }
  @media screen and (max-width: 1100px) {
    word-break: keep-all;
    font-size: 12px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  color: ${COLORS.gray6};
  min-width: 150px;
  width: 100%;
  @media screen and (max-width: 1100px) {
    font-size: 12px;
  }
`;

export const SearchItemContainer = styled.div`
  width: 100%;
`;

export const DateSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const CategorySearchContainer = styled.div`
  display:flex;
  flex-direction: row;
  gap: 10px;
`;




export const SearchTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px 3px;
  box-sizing: border-box;
  gap: 4px;
  height: 40px;
  background: ${COLORS.orange4};
  border: 1px solid ${COLORS.orange2};
  border-radius: 20px;
  color: ${COLORS.orange1};
  &:hover {
    background: ${COLORS.orange2};
    color: ${COLORS.white};
  }
  @media screen and (max-width: 1430px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1100px) {
    flex-direction: row;
    height: 28px;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const FilterWithIcon = styled(SearchTagContainer)`
  @media screen and (max-width: 1430px) {
      height: 48px;

  }
`

export const LocationFilterTitle = styled(SearchTagContainer)`
  @media screen and (max-width: 480px) {
    max-width: 40px;
  }
`

export const IconTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;



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
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index:999;
`;

export const DatePickerContainer = styled(DatePicker)`
  outline: none;
  border: none;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: 100px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const ToggleCalendar = styled.div`
  margin-top: 40px;
  box-sizing: border-box;
`;

export const DepartmentStoreCategory = styled.select`
  outline: none;
  box-sizing: border-box;
  height: 100px;
`;

export const ItemCategory = styled.div`
  border: 1px solid ${COLORS.black};
  border-radius: 3px;
`;

export const LocationCategory = styled.div``;

export const EtcCategory = styled(ItemCategory)`
  border: 1px solid ${COLORS.black};
  border-radius: 3px;
`;

export const FilterTypes = styled.div``;

export const SelectDate = styled.div``;
export const InformationContainer = styled.div``;

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
`;

export const EventPeriod = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #a6a6a6;
`;
export const FilterResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

export const StoreContainer = styled.div`
  border: 1px solid ${COLORS.gray7};
  background-color: ${COLORS.gray8};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 600px;
  min-width: 450px;
  height: 175px;
  &:hover {
    border: 1px solid ${COLORS.orange3};
    background-color: ${COLORS.orange4};
  }
`;

export const StoreInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 500px;
  @media screen and (max-width: 1100px) {
    max-width:800px;
  }
`;

export const FilterResultAndCalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  max-width: 1100px;
  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  float: right;
`;

export const Category = styled.div`
  padding: 4px 16px 3px;
  height: 21px;
  background: ${COLORS.gray3};
  border-radius: 20px;
  color: ${COLORS.white};
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${COLORS.orange2};
  }
  @media screen and (max-width: 1100px) {
    padding: 4px 8px 3px;
  }
`;
