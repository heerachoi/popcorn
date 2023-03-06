import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';
import Vector from '../../assets/Logo/Vector.png';
import popcornLogo from '../../assets/Logo/popcorn_logo.png';
import DefaultLogo from '../../assets/Logo/State=Default.png';

// Styled 컴포넌트에서 배경 이미지 추가하는 방법
// 1. import 사용할 이미지를 한다.
// 2. ${} 안에 import 한 값을 넣어준다.
export const FooterWrap = styled.div`
  height: 250px;
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  background-image: url(${Vector});
  background-size: cover;
  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const FooterTitleWrap = styled.div`
  padding: 90px 30px;
  @media screen and (max-width: 540px) {
    margin-top: 45px;
    padding: 0px;
  }
`;
export const FooterTitle = styled.div`
  cursor: pointer;
  width: 200px;
  height: 50px;
  background-image: url(${DefaultLogo});
  background-repeat: no-repeat;
  &:hover {
    background-image: url(${popcornLogo});
  }
`;
export const FooterMenuWrap = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 0;
`;
export const FooterMenu = styled.button`
  cursor: pointer;
  position: relative;
  top: -8px;
  border: none;
  background-color: transparent;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const TextBackground = styled.div`
  height: 20px;
  background-color: ${COLORS.yellow};
  /* position: absolute; */
  box-sizing: border-box;
  border-radius: 12px;
  &:hover {
    background-color: ${COLORS.orange2};
  }
`;
