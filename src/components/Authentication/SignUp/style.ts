import styled from 'styled-components';
import arrow from '../../../assets/Logo/🦆 icon _circle chevron down_.png';
import calendar from '../../../assets/Logo/🦆 icon _calendar_.png';

// 컴포넌트 전체 박스
export const Wrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// 타이틀
export const TitleWrap = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 580px) {
    margin-bottom: 30px;
  }
`;
export const Title = styled.span`
  position: relative;
  top: -8px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #323232;
  @media screen and (max-width: 580px) {
    font-size: 24px;
  }
`;

// Form 박스, Form 안의 아이템, Form에서 사용하는 버튼, Input, 텍스트 등
export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const FormBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormText = styled(Title)`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 10px;
  top: 0;
  @media screen and (max-width: 580px) {
    font-size: 14px;
  }
`;

export const FormInput = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  width: 367px;
  height: 60px;
  padding: 0 20px 0 20px;
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

export const FormDate = styled(FormInput)`
  position: relative;
  cursor: pointer;
  // 이미지 오른쪽에 두기, 전체 인풋 클릭시 date 나오게 하기
  background: url(${calendar}) no-repeat 95% 50%/15px auto;
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    color: transparent;
    cursor: pointer;
    z-index: 1;
  }
  // placeholder 설정하려면 필요한 css
  &::before {
    content: attr(data-placeholder);
    width: 100%;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    color: #9b9b9b;
  }
  &:valid::before {
    display: none;
  }
`;

export const FormSelect = styled(FormInput)`
  width: 409px;
  color: #9b9b9b;
  // 버튼 없애고 새로운 이미지 첨부
  appearance: none;
  background: url(${arrow}) no-repeat 95% 50%/15px auto;
  // value='', disabled 인 거 display 없애기
  option[value=''][disabled] {
    display: none;
  }
  option {
    background: lightcoral;
    color: #fff;
    padding: 3px 0;
    font-size: 16px;
    width: 200px;
    height: 300px;
  }
  @media screen and (max-width: 580px) {
    width: 255px;
  }
`;

export const PhoneInput = styled(FormInput)`
  width: 230px;
  height: 58px;
  @media screen and (max-width: 580px) {
    width: 140px;
  }
`;

export const PhoneBtn = styled.button`
  border-radius: 8px;
  width: 130px;
  height: 60px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: #9b9b9b;
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  &:hover:enabled {
    background-color: #d9d9d9;
    border: 1px solid #bdbdbd;
  }
  @media screen and (max-width: 580px) {
    width: 70px;
  }
`;

export const CancleBtn = styled(PhoneBtn)`
  width: 200px;
  color: #9b9b9b;
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  &:hover:enabled {
    background-color: #d9d9d9;
    border: 1px solid #bdbdbd;
  }
  @media screen and (max-width: 580px) {
    width: 125px;
  }
`;

export const SignUpBtn = styled(CancleBtn)`
  color: #ffffff;
  background-color: #bdbdbd;
  border: 1px solid #9b9b9b;
  &:hover:enabled {
    background-color: #676767;
    border: 1px solid #323232;
  }
  @media screen and (max-width: 580px) {
    width: 125px;
  }
`;

export const HelperText = styled.span`
  color: red;
  margin-top: 5px;
  @media screen and (max-width: 580px) {
    font-size: 14px;
  }
`;

export const TextBackground = styled.div`
  text-align: center;
  width: 140px;
  height: 30px;
  background-color: #ffeb62;
  box-sizing: border-box;
  border-radius: 20px;
  @media screen and (max-width: 580px) {
    width: 120px;
    height: 20px;
  }
`;
