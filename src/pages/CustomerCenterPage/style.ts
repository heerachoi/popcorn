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
  height: 20px;
  background-color: ${COLORS.green2};
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
`;
export const TitleText = styled.p`
  position: relative;
  font-family: 'Apple SD Gothic Neo';
  font-size: 32px;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: ${COLORS.gray1}; 
  margin-bottom: 7px ;
`;

export const CustomerCenterContainer = styled.div`
  box-sizing: border-box;
  max-width: 1040px;
  width: 100%;
  min-height: 700px;
  margin: 0 auto;
  padding: 0 40px;
  border: 1px solid ${COLORS.gray7};
  border-radius: 8px;
  background-color: ${COLORS.gray8};

  @media screen and (max-width: 1040px) {
    width: 340px;
    padding: 0 5px;
  }  
`;

export const TabMenu = styled.ul`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin-top: 24px;
  border-bottom: 2px solid ${COLORS.gray5};
  margin-bottom: 20px;

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
  color: ${COLORS.gray5};
  text-decoration: none;
  margin-top: 4px;
  padding-bottom: 25px;

  cursor: pointer;

  &.active {
    border-bottom: 4px solid ${COLORS.green1};
    color: ${COLORS.green1};
  }

  &:focus {
    border-bottom: 4px solid ${COLORS.green1};
    color: ${COLORS.green1};
  }

  @media screen and (max-width: 1040px) {
    width: 109px;
    font-size: 14px;
    }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
