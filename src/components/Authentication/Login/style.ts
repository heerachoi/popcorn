import { MdCancel } from 'react-icons/md';
import styled from 'styled-components';

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
  color: #323232;
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
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  width: 367px;
  height: 60px;
  padding: 0 20px 0 20px;
  margin-bottom: 20px;
  color: #323232;
  &::placeholder {
    color: #9b9b9b;
  }
  &:focus {
    outline: none;
    border: 1px solid #676767;
  }
  @media screen and (max-width: 580px) {
    width: 210px;
  }
`;

export const FormBtnWrap = styled.div`
  display: flex;
  margin-top: 30px;
  cursor: pointer;
`;

export const FormSignWrap = styled(FormBtnWrap)`
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const NavigateBtn = styled.button`
  color: #9b9b9b;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: none;
  background-color: white;
`;

export const LoginBtn = styled.button`
  background-color: #bdbdbd;
  border-radius: 8px;
  border: none;
  width: 409px;
  height: 60px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #676767;
    border: 1px solid #9b9b9b;
  }
  @media screen and (max-width: 580px) {
    width: 250px;
  }
`;

export const SignUpBtn = styled(LoginBtn)`
  margin-top: 20px;
  background-color: #fff9d2;
  border: 1px solid #ffeb62;
  color: #f2901d;
  &:hover {
    color: #ffffff;
    background: #ffb321;
    border: 1px solid #ffb321;
  }
`;

export const HelperText = styled.span`
  color: #f4533d;
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
  background-color: #ffeb62;
  box-sizing: border-box;
  border-radius: 20px;
  @media screen and (max-width: 580px) {
    width: 100px;
    height: 20px;
  }
`;

export const CancleIcon = styled(MdCancel)`
  position: relative;
  left: 170px;
  bottom: -45px;
  color: #676767;
  @media screen and (max-width: 580px) {
    left: 100px;
  }
`;
