import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const HomePageContainer = styled.div`
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 89px;
  margin: 59px 20px;
  @media screen and (max-width: 870px) {
    margin: 0px 20px;
  }
  @media screen and (max-width: 420px) {
    margin: 32px 20px;
  }
`;

export const HomePageContentContainer = styled.div`
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 129px;

  @media screen and (max-width: 400px) {
    gap: 80px;
  }
`;

export const CategoryWrapper = styled.div``;

// Popup Store 포스터 카드
export const StoreContainer = styled.div`
  border: 1px solid ${COLORS.gray7};
  background-color: ${COLORS.gray8};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.yellow3};
    border: 1px solid ${COLORS.orange4};
  }
`;

export const PopupImg = styled.img`
  width: 334px;
  height: 334px;
  border-radius: 8px 8px 0px 0px;
`;

export const InformationContainer = styled.div``;

export const StoreInformation = styled.div`
  padding: 16px;
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PopupTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.gray1};
  margin-bottom: 20px;
`;

export const PopupDate = styled.p`
  color: ${COLORS.gray5};
`;

export const PopupAddress = styled.p`
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Category = styled.div`
  padding: 4px 16px 3px;
  height: 21px;
  background: ${COLORS.gray3};
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${COLORS.orange4};
  }
`;

export const ListTitleContainer = styled.div``;

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitleBackgroundOne = styled.div`
  width: 180px;
  height: 20px;
  background-color: ${COLORS.yellow1};
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
`;

export const CategoryTitleBackgroundTwo = styled(CategoryTitleBackgroundOne)`
  width: 135px;
`;

export const CategoryTitleBackgroundThree = styled(CategoryTitleBackgroundOne)`
  width: 225px;
`;

export const ListTitle = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  position: relative;
  left: 11px;
  top: -8px;
  margin-bottom: 24px;
  color: ${COLORS.black};
`;

export const FilterStoreList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const SeeMoreContainer = styled.div`
  width: 344px;
  height: 516px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
`;

export const SeeMoreImage = styled.img`
  width: 100%;
  height: 516px;
  object-fit: cover;
  border-radius: 8px;
`;

export const SeeMoreText = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  text-align: center;
  position: absolute;
  top: 0%;
  left: 0%;
  color: white;
  padding-top: 250px;
  font-weight: 700;
  font-size: 20px;
  box-sizing: border-box;
  transition: all 0.7s;
  background: rgba(50, 50, 50, 0.7);
  &:hover {
    background: rgba(143, 106, 10, 0.3);
  }
`;

// 검색
// 검색 기능 스타일
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 10px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${COLORS.gray6};
  border-radius: 20px;
  width: 293px;
  height: 30px;
  padding: 8px 16px;
  cursor: pointer;
  gap: 4px;
`;

export const InputTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  min-width: 54px;
  display: flex;
  justify-content: center;
`;

export const FilterTitle = styled(InputTitle)`
  &:hover {
    color: ${COLORS.white};
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  color: ${COLORS.gray6};
  width: 300px;
`;

export const SearchItemContainer = styled.div``;

export const SearchTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px 3px;
  gap: 4px;
  height: 40px;
  background: ${COLORS.yellow3};
  border: 1px solid ${COLORS.orange4};
  border-radius: 20px;
  color: ${COLORS.orange3};
  &:hover {
    background: ${COLORS.orange4};
    color: ${COLORS.white};
  }
`;

export const SearchEventPeriod = styled.select`
  outline: none;
  border: none;
  background-color: transparent;
`;

export const Option = styled.option`
  background: ${COLORS.white};
  color: ${COLORS.white};
  padding: 3px 0;
  font-size: 16px;
`;

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
