import styled from 'styled-components';

export const ReportWrap = styled.div``;
export const ReportContainer = styled.div`
  box-sizing: border-box;
  max-width: 1040px;
  width: 100%;
  max-height: 900px;
  margin: 0 auto;
  border: 1px solid #9b9b9b;
  padding: 0 51px;
  border-radius: 8px;
  margin-top: 48px;
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
`;

export const TitleBox = styled.div``;
export const TitleBtn = styled.button`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: black;

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
