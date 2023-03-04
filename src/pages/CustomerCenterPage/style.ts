import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';

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
  background-color: ${COLORS.orange3};
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
`;
export const TitleText = styled.h1`
  position: relative;
`;

export const CustomerCenterContainer = styled.div`
  box-sizing: border-box;
  max-width: 1040px;
  width: 100%;
  height: 700px;
  margin: 0 auto;
  padding: 0 40px;
  border: 1px solid ${COLORS.gray5};
  border-radius: 8px;
`;

export const TabMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid gray;
  margin-top: 24px;
  margin-bottom: 20px;
  padding-bottom: 20px;

  &.active {
    border-bottom: 2px solid ${COLORS.orange1};
  }
`;

export const TabTitleBox = styled.div``;

export const MenuTitleTabBtn = styled.button`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  background-color: transparent;
  border: none;
  color: ${COLORS.black};
  text-decoration: none;

  cursor: pointer;

  &:focus,
  &.active {
    color: ${COLORS.orange1};
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: beige; */
`;
