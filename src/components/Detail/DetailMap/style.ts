import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';
import { Map } from 'react-kakao-maps-sdk';

export const MapWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 58px;
`;

export const DetailPageMap = styled(Map)`
  border: 1px solid ${COLORS.gray7};
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 45px;
  width: 1040px;
  height: 500px;
`;

export const TitleBackground = styled.div`
  width: 170px;
  height: 18px;
  background-color: ${COLORS.yellow1};
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  position: relative;
  margin-top: -10px;
`;

export const MapInfoBox = styled.div`
  background: ${COLORS.green1};
  border: 1px solid ${COLORS.white};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120%;
  height: 30px;
`;
export const ModalHeaderTitle = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.white};
`;
