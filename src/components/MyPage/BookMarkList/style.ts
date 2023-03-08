import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

// BookMarkList.tsx

export const BookMarkContainer = styled.div`
  height: 1000px;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 320px);
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
