import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const Wrap = styled.div`
  border: 1px solid ${COLORS.gray7};
  background-color: ${COLORS.gray8};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 175px;
  cursor: pointer;
`;

export const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  text-align: left;
  word-break: keep-all;
`;
export const DetailTitle = styled.span`
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
  border: none;
  cursor: pointer;
`;

export const DetailDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailImg = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 8px 0px 0px 8px;
`;
