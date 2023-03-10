import styled from 'styled-components';
import { HiLocationMarker } from 'react-icons/hi';
import COLORS from '../../../assets/CSS/colors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${COLORS.orange2};
  border-top-left-radius: 60px;
  border-bottom-left-radius: 60px;
  padding: 18px 36px;
  font-size: 16px;
  gap: 48px;
  max-width: 890px;
  width: 100%;
  box-sizing: border-box;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(HiLocationMarker)`
  color: ${COLORS.orange2};
  font-size: 30px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  min-width: 342px;
  width: 100%;
  &::placeholder {
    color: ${COLORS.gray5};
    font-size: 14px;
  }
  @media screen and (max-width: 1000px) {
    min-width: 180px;
  }
  @media screen and (max-width: 450px) {
    min-width: 142px;
  }
`;

export const IconTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;
  @media screen and (max-width: 790px) {
    display: none;
  }
`;

export const FilterTitle = styled.div`
  cursor: pointer;
  min-width: 60px;
  width: 100%;
  color: ${COLORS.orange3};
  font-weight: 700;
`;

export const SearchEventPeriod = styled.select`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${COLORS.gray5};
`;

export const SearchButton = styled.div`
  cursor: pointer;
  width: 142px;
  height: 68px;
  background-color: ${COLORS.orange2};
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};
  font-weight: 600;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 999;
  @media screen and (max-width: 790px) {
    display: none;
  }
`;

export const DatePickerContainer = styled(DatePicker)`
  outline: none;
  border: none;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: 100px;
  &::placeholder {
    color: ${COLORS.gray5};
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;
