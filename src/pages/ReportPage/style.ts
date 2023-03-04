import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';

export const ReportWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;
export const ReportContainer = styled.div`
  box-sizing: border-box;
  max-width: 1040px;
  width: 100%;
  max-height: 1000px;
  margin: 0 auto;
  border: 1px solid ${COLORS.gray7};
  padding: 0 51px;
  border-radius: 8px;
  background-color: ${COLORS.gray8};
`;

export const TabTitle = styled.ul`
  margin-top: 10px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  border-bottom: 2px solid ${COLORS.gray5};
  /* background: aliceblue; */
`;

export const TitleBox = styled.div``;
export const TitleBtn = styled.button`
  width: 469px;
  /* min-width: 269px;
  max-width: 469px; */
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  line-height: 24px;
  color: ${COLORS.black};
  margin-top: 9px;
  padding-bottom: 17px;
  background-color: transparent;
  display: block;

  border: none;
  text-decoration: none;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid #00c113;
    color: #00c113;
  }

  &:focus {
    /* border-bottom: 2px solid #00C113; */
  }
  @media screen and (max-width: 900px) {
    width: 369px;
  }
  @media screen and (max-width: 650px) {
    width: 240px;
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    width: 190px;
    font-size: 18px;
  }
`;

export const Content = styled.div``;
