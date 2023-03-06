import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const FaqWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 533px;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
    height: 80px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: ${COLORS.gray5};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  position: relative;
  height: 94px;
  border-bottom: 1px solid ${COLORS.gray5};
`;

export const TitleBox = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 16px;
  font-weight: 600;

  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const TitleText = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray1};
`;

export const DropDownBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  float: right;
`;

export const AnswerBox = styled.div`
  padding-left: 20px;
  max-height: 0;
  margin-top: 20px;
  margin-bottom: 10px;
  overflow: hidden;

  &.show {
    height: auto;
    max-height: 9999px;
  }
`;

export const AnswerText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray1};
`;
