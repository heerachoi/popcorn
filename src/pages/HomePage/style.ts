import styled from "styled-components";

export const HomePageContentContainer = styled.div`
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const StoreContainer = styled.div`
  width: 334px;
  height: 516px;
  border: 1px solid #D9D9D9;
  background-color: #F5F5F5;
`;

export const ListTitleContainer = styled.div`
`;

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OpeningBackground = styled.div`
  width: 175px;
  height: 20px;
  background-color: #FFEB62;
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
`;

export const ClosingBackground = styled(OpeningBackground)`
  width: 131px;
`;

export const ListTitle = styled.p`
  font-size: 24px;
  position: relative;
  left: 11px;
  top:-8px;
`;

export const StyleListWrap = styled.div`
  width: 334px;
  border: 1px solid #D9D9D9;
  background-color: #F5F5F5;
  border-radius: 8px;
`;

export const FilterStoreList = styled.div`
  display: flex;
  flex-direction: row;
`

export const PopupImg = styled.img`
  height: 334px;
  border-radius: 8px 8px 0px 0px;
`;

export const StoreInformation = styled.div`
  box-sizing: border-box;
  padding: 0px 20px;
`;


export const PopupTitle = styled.h3`
`;

export const PopupDate = styled.p``;

export const PopupAddress = styled.p``;

export const ClosingSoonList = styled.h2`
  margin-left: 7vh;
`;