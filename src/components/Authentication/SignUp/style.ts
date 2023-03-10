import styled from 'styled-components';
import arrow from '../../../assets/Logo/🦆 icon _circle chevron down_.png';
import calendar from '../../../assets/Logo/🦆 icon _calendar_.png';
import COLORS from '../../../assets/CSS/colors';

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
  color: ${COLORS.black};
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
  border: 1px solid ${COLORS.gray6};
  border-radius: 8px;
  width: 367px;
  height: 60px;
  padding: 0 20px 0 20px;
  color: ${COLORS.black};

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
    color: ${COLORS.gray5};
  }
  &:valid::before {
    display: none;
  }
`;

export const FormSelect = styled(FormInput)`
  width: 409px;
  color: ${COLORS.gray5};
  // 버튼 없애고 새로운 이미지 첨부
  appearance: none;
  background: url(${arrow}) no-repeat 95% 50%/15px auto;
  // value='', disabled 인 거 display 없애기
  option[value=''][disabled] {
    display: none;
  }
  option {
    background: lightcoral;
    color: ${COLORS.white};
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
  color: ${COLORS.gray5};
  background-color: ${COLORS.gray8};
  border: 1px solid ${COLORS.gray7};
  &:hover:enabled {
    background-color: ${COLORS.gray7};
    border: 1px solid ${COLORS.gray6};
  }
  @media screen and (max-width: 580px) {
    width: 70px;
  }
`;

export const CancelBtn = styled(PhoneBtn)`
  width: 200px;
  color: ${COLORS.gray5};
  background-color: ${COLORS.gray8};
  border: 1px solid ${COLORS.gray7};
  &:hover:enabled {
    background-color: ${COLORS.gray7};
    border: 1px solid ${COLORS.gray6};
  }
  @media screen and (max-width: 580px) {
    width: 125px;
  }
`;

export const SignUpBtn = styled(CancelBtn)`
  color: ${COLORS.white};
  background-color: ${COLORS.gray6};
  border: 1px solid ${COLORS.gray5};
  &:hover:enabled {
    background-color: ${COLORS.gray3};
    border: 1px solid ${COLORS.black};
  }
  @media screen and (max-width: 580px) {
    width: 125px;
  }
`;

export const HelperText = styled.span`
  color: ${COLORS.red};
  margin-top: 5px;
  @media screen and (max-width: 580px) {
    font-size: 14px;
  }
`;

export const TextBackground = styled.div`
  text-align: center;
  width: 140px;
  height: 30px;
  background-color: ${COLORS.yellow1};
  box-sizing: border-box;
  border-radius: 20px;
  @media screen and (max-width: 580px) {
    width: 120px;
    height: 20px;
  }
`;
