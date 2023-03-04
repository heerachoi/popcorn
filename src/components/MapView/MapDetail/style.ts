import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

// Detail.tsx
export const DetailBoxWrap = styled.div`
  width: 400px;
  height: 100vh;
  z-index: 999;
  position: absolute;
  background-color: white;
  overflow: scroll;
  overflow-x: hidden;
`;

export const CategoryBtn = styled.button`
  border: none;
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

export const DetailImg = styled.img`
  width: 100%;
  height: 300px;
`;

export const DetailInfoWrap = styled.div`
  text-align: center;
`;

export const DetailTitle = styled.span`
  color: ${COLORS.black};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
`;

export const DetailInfoBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DetailTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DetailInfoTitle = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #00c113;
`;

export const DetailInfoText = styled(DetailInfoTitle)`
  color: ${COLORS.black};
`;

// FoodCard.tsx
export const Wrap = styled.div`
  border: 1px solid ${COLORS.gray7};
  background-color: ${COLORS.gray8};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 130px;
  cursor: pointer;
`;

export const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
`;
export const DetailTitleSpan = styled.span`
  font-weight: 800;
  font-size: 17px;
  line-height: 29px;
  color: ${COLORS.black};
`;
export const DetailDescription = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #a6a6a6;
`;

export const DetailDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 8px 0px 0px 8px;
`;
