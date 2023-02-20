import styled from "styled-components";

export const HomePageContentContainer = styled.div`
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
    display: flex;
  flex-direction: column;
  gap: 129px;
`;

export const CategoryWrapper = styled.div`
`;

// Popup Store 포스터 카드
export const StoreContainer = styled.div`
  height: 516px;
  border: 1px solid #D9D9D9;
  background-color: #F5F5F5;
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    background-color: #FFF9D2;
    border: 1px solid #FFB321;
  }
`;

export const PopupImg = styled.img`
  width: 334px;
  height: 334px;
  border-radius: 8px 8px 0px 0px;
`;

export const StoreInformation = styled.div`
  box-sizing: border-box;
  padding: 0px 20px;
  width: 334px;
`;

export const PopupTitle = styled.h3`
`;

export const PopupDate = styled.p``;

export const PopupAddress = styled.p`
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`;

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

export const ListTitleContainer = styled.div`
`;

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitleBackgroundOne = styled.div`
  width: 175px;
  height: 20px;
  background-color: #FFEB62;
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
  font-size: 24px;
  position: relative;
  left: 11px;
  top:-8px;
`;

export const FilterStoreList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`

export const SeeMoreContainer = styled.div`
  width: 344px;
  height: 516px;
  background: linear-gradient(0deg, rgba(50, 50, 50, 0.9), rgba(50, 50, 50, 0.9)), url(store1.jpg);
  background-blend-mode: multiply, normal;
  border: 1px solid #323232;
  border-radius: 8px;
  color: #fff;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

