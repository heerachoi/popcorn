import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

// BookMarkList.tsx

export const BookMarkContainer = styled.div`
 
  height: 1000px;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 320px);

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export const BookMarkCard = styled.div`
  margin-top: 16px;
  width: 296px;
  height: 450px;
  border: 1px solid ${COLORS.gray7};
  background-color: ${COLORS.gray8};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.orange4};
    border: 1px solid ${COLORS.orange2};
  }
`;

export const BookMarkStoreImg = styled.img`
  width: 100%;
  height: 296px;
  border-radius: 8px 8px 0px 0px;
`;

export const BookMarkStoreInfo = styled.div`
  padding: 16px;
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookMarkStoreContainer = styled.div``;
export const StoreTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.gray1};
  margin-bottom: 20px;
`;
export const StoreDate = styled.p`
  color: ${COLORS.gray5};
`;

export const StoreCategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const StoreCategory = styled.div`
  padding: 4px 16px 3px;
  height: 21px;
  background: ${COLORS.gray3};
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const BookMarkThumbnail = styled.div`
  position: relative;
  width: 296px;
  height: 296.46px;
  left: 0px;
  right: 0px;
  top: 0%;
  bottom: 35.27%;

  /* Grayscale/Gray5 */

  /* background: #d9d9d9; */
  border-radius: 8px 8px 0px 0px;
  background-color: #d9d9d9;
`;

export const BookMarkIcon = styled.div`
  position: absolute;
  margin-left: 260px;
`;

export const BookMarkCardTitle = styled.p`
  left: 20px;
  right: 27px;
  top: 67.83%;
  bottom: 22.87%;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #323232;
  margin-left: 8%;
`;

export const BookMarkCardDate = styled.p`
  width: 178px;
  left: 20px;
  top: 79.48%;
  bottom: 16.81%;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #9b9b9b;
  margin-left: 8%;
`;

export const BookMarkCardFilterBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 16px;
  gap: 8px;

  width: 22%;
  height: 22px;
  left: 20px;
  bottom: 20px;

  border: 1px solid #a6a6a6;
  border-radius: 20px;
  cursor: pointer;
  background-color: transparent;
  margin-left: 8%;

  &:hover {
    background-color: #ffeb62;
  }
`;

export const BookMarkCardFilterTxt = styled.span`
  /* 마감임박 */

  width: 50px;
  height: 14px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  /* Grayscale/Gray3 */

  color: #9b9b9b;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-left: -10px;
`;
