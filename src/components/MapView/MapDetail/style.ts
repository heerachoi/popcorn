import { flexbox } from '@mui/system';
import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

interface StyleProps {
  category: string | null;
}

// Detail.tsx
export const DetailBoxWrap = styled.div`
  width: 400px;
  height: 100%;
  z-index: 999;
  position: absolute;
  background-color: white;
  overflow: scroll;
  overflow-x: hidden;
`;

export const CategoryWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

export const CategoryImg = styled.img`
  position: absolute;
  left: 5px;
  bottom: 20px;
  z-index: -1;
`;

export const CategoryTitle = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${COLORS.black};
`;

export const CategoryBtnBox = styled.div`
  min-width: 150px;
  display: flex;
  justify-content: space-evenly;
`;
export const CategoryFoodBtn = styled.button`
  border: none;
  width: 65px;
  height: 25px;
  background-color: ${(props: StyleProps) =>
    props.category === '음식점' ? COLORS.green : COLORS.gray3};
  color: ${COLORS.white};
  border-radius: 20px;
  cursor: pointer;
`;

export const CategoryCafeBtn = styled(CategoryFoodBtn)`
  background-color: ${(props: StyleProps) =>
    props.category === '카페' ? COLORS.orange5 : COLORS.gray3};
`;

export const DetailImg = styled.img`
  width: 100%;
  height: 300px;
`;

export const DetailInfoWrap = styled.div`
  text-align: center;
`;

export const DetailTitleWrap = styled.div`
  padding: 20px;
`;

export const DetailTitle = styled.span`
  color: ${COLORS.black};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  word-break: keep-all;
`;

export const DetailInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px 10px 50px;
  box-sizing: border-box;
`;

export const DetailTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 100px;
`;

export const DetailContentBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  word-break: keep-all;
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
  font-weight: 500;
  color: ${COLORS.black};
`;

export const NavigationText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const BorderBottomLine = styled.div`
  border-bottom: 1px solid ${COLORS.gray7};
  width: 300px;
  padding: 10px;
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
