import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const SignUpBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -8px;
  border: none;
  background-color: transparent;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  @media screen and (max-width: 840px) {
    color: #fff;
    top: -30px;
  }
`;

export const TextBackground = styled.div`
  width: 110px;
  height: 20px;
  background-color: ${COLORS.yellow};
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
  &:hover {
    background-color: ${COLORS.yellow};
  }
  @media screen and (max-width: 840px) {
    width: 200px;
    background-color: ${COLORS.black};
  }
`;
