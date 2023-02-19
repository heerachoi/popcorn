import styled from "styled-components";

export const HomePageContentContainer = styled.div`
  max-width: 1060px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const StoreContainer = styled.div`
  height: 516px;
  border: 1px solid #D9D9D9;
  background-color: #F5F5F5;
  border-radius: 8px;
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

export const PopupAddress = styled.p``;


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
`;