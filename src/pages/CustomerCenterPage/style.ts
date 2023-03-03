import styled from 'styled-components';

export const CustomerCenterWrap = styled.div``;

export const CustomerCenterTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 48px 0;
`;

export const TitleBackground = styled.div`
  width: 140px;
  height: 23px;
  background-color: #88e25d;
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
`;
export const TitleText = styled.h1`
  position: relative;
  font-family: 'Apple SD Gothic Neo';
  font-size: 32px;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
`;

export const CustomerCenterContainer = styled.div`
  box-sizing: border-box;
  max-width: 1040px;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  padding: 0 40px;
  border: 1px solid #d9d9d9;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const TabMenu = styled.ul`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-top: 24px;
  border-bottom: 2px solid #9b9b9b;
`;

export const TabTitleBox = styled.div``;

export const MenuTitleTabBtn = styled.button`
  width: 319px;
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  background-color: transparent;
  border: none;
  color: #9b9b9b;
  text-decoration: none;
  margin-top: 4px;
  padding-bottom: 25px;

  cursor: pointer;

  &.active {
    border-bottom: 2px solid #00c113;
    color: #00c113;
  }

  &:focus {
    border-bottom: 2px solid #00c113;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  /* background-color: beige; */
`;
