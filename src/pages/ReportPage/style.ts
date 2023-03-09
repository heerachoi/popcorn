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
  min-height: 900px;
  margin: 0 auto;
  border: 1px solid ${COLORS.gray7};
  padding: 0 51px;
  border-radius: 8px;
  background-color: ${COLORS.gray8};

  @media screen and (max-width: 700px) {
    width: 340px;
    padding: 0 5px;
  }
  
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
 
`;

export const TitleBox = styled.div``;
export const TitleBtn = styled.button`
  width: 469px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  line-height: 24px;
  color: ${COLORS.gray5};
  margin-top: 9px;
  padding-bottom: 17px;
  background-color: transparent;
  display: block;

  border: none;
  text-decoration: none;
  cursor: pointer;
  &.active {
    border-bottom: 4px solid ${COLORS.green1};
    color: ${COLORS.green1};
  }
 
  @media screen and (max-width: 1000px) {
    width: 168px;
    font-size: 16px;
  }
`;

export const Content = styled.div`
`;
