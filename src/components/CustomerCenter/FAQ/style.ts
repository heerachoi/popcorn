import styled from 'styled-components';

export const FaqWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  position: relative;
  height: 70px;
  padding-top: 10px;
  border-bottom: 1px solid gray;
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

export const TitleText = styled.h4``;

export const DropDownBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  float: right;
`;

export const AnswerBox = styled.div`
  padding-left: 20px;
  max-height: 0;
  overflow: hidden;

  &.show{
    height: auto;
    max-height: 9999px;
  }
`;

export const AnswerText = styled.p``;
