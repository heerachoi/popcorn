import styled from "styled-components";
import COLORS from "../../assets/CSS/colors";

export const HomePageContentContainer = styled.div`
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 129px;
`;

export const CategoryWrapper = styled.div`
`;

// Popup Store 포스터 카드
export const StoreContainer = styled.div`
  border: 1px solid ${COLORS.gray7};
  background-color: ${COLORS.gray8};
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    background-color: ${COLORS.orange4};
    border: 1px solid ${COLORS.orange2};
  }
`;

export const PopupImg = styled.img`
  width: 334px;
  height: 334px;
  border-radius: 8px 8px 0px 0px;
`;

export const InformationContainer = styled.div`
`;


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
  background: ${COLORS.gray3};
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

export const ListTitleContainer = styled.div`
`;

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitleBackgroundOne = styled.div`
  width: 180px;
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
  margin-bottom: 24px;
`;

export const FilterStoreList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`

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
`

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
  &:hover{
    background: rgba(143, 106, 10, 0.3);
  }
`

