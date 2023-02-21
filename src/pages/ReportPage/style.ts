import styled from 'styled-components';

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
  border: 1px solid #d9d9d9;
  padding: 0 51px;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

export const TabTitle = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 10px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  border-bottom: 2px solid #9b9b9b;
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
  color: black;

  margin-top: 9px;
  padding-bottom: 17px;
  background-color: transparent;
  display: block;

  border: none;
  text-decoration: none;

  cursor: pointer;

  &.active {
    border-bottom: 2px solid #f2901d;
    color: #f2901d;
  }

  &:focus {
    border-bottom: 2px solid #f2901d;
  }
`;

export const Content = styled.div``;
