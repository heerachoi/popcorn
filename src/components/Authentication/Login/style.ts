import { MdCancel } from 'react-icons/md';
import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const Wrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginImgWrap = styled.div`
  margin-top: 50px;
`;

export const LoginImg = styled.img`
  @media screen and (max-width: 580px) {
    width: 150px;
    height: 150px;
  }
`;

export const TitleWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  @media screen and (max-width: 580px) {
    margin-bottom: 30px;
  }
`;
export const Title = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: ${COLORS.gray1};
  position: relative;
  top: -12px;
  @media screen and (max-width: 580px) {
    font-size: 24px;
  }
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormInput = styled.input`
  border: 1px solid ${COLORS.gray6};
  border-radius: 8px;
  width: 367px;
  height: 60px;
  padding: 0 20px 0 20px;
  margin-bottom: 20px;
  color: ${COLORS.gray1};
  &::placeholder {
    color: ${COLORS.gray5};
  }
  &:focus {
    outline: none;
    border: 1px solid ${COLORS.gray3};
  }
  @media screen and (max-width: 580px) {
    width: 210px;
  }
`;

export const FormBtnWrap = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const FormSignWrap = styled(FormBtnWrap)`
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const NavigateBtn = styled.button`
  color: ${COLORS.gray5};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: none;
  background-color: ${COLORS.white};
`;

export const LoginBtn = styled.button`
  background-color: ${COLORS.gray6};
  border-radius: 8px;
  border: none;
  width: 409px;
  height: 60px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${COLORS.white};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.gray3};
    border: 1px solid ${COLORS.gray5};
  }
  @media screen and (max-width: 580px) {
    width: 250px;
  }
`;

export const SignUpBtn = styled(LoginBtn)`
  margin-top: 20px;
  background-color: ${COLORS.yellow3};
  border: 1px solid ${COLORS.yellow1};
  color: ${COLORS.orange3};
  &:hover {
    color: ${COLORS.white};
    background: ${COLORS.orange4};
    border: 1px solid ${COLORS.orange4};
  }
`;

export const HelperText = styled.span`
  color: ${COLORS.red};
  margin-top: -10px;
  margin-bottom: 10px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
`;

export const TextBackground = styled.div`
  text-align: center;
  width: 110px;
  height: 30px;
  background-color: ${COLORS.yellow1};
  box-sizing: border-box;
  border-radius: 20px;
  @media screen and (max-width: 580px) {
    width: 100px;
    height: 20px;
  }
`;

export const CancleInonBox = styled.div`
  z-index: 999;
  width: 20px;
  height: 20px;
  position: relative;
  left: 170px;
  bottom: -45px;
  color: ${COLORS.gray3};
  @media screen and (max-width: 580px) {
    left: 100px;
  }
`;

export const CancleIcon = styled(MdCancel)`
  position: absolute;
`;

export const KakaoLoginBtn = styled.button`
  cursor: pointer;
  border-radius: 8px;
  height: 60px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  width: 409px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.gray1};
  background-color: ${COLORS.yellow2};
  margin-top: 16px;

  border: 1px solid ${COLORS.yellow2};
  &:hover:enabled {
    background-color: ${COLORS.yellow1};
    border: 1px solid ${COLORS.yellow1};
  }
  @media screen and (max-width: 580px) {
    width: 250px;
  }
`;

export const LoginOrText = styled.span`
  color: ${COLORS.gray5};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: none;
  background-color: white;
`;
