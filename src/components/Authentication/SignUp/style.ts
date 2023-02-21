import styled from 'styled-components';

export const Wrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TitleWrap = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const Title = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #323232;
`;

export const FormWrap = styled.form``;
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
`;

export const FormInput = styled.input`
  border: 1px solid #a6a6a6;
  border-radius: 8px;
  width: 400px;
  height: 50px;
  padding: 0 20px 0 20px;

  &::before {
    content: attr(data-placeholder);
    width: 100%;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    color: gray;
  }
  &:valid::before {
    display: none;
  }
`;

export const FormSelect = styled(FormInput)`
  width: 442px;
`;

export const PhoneInput = styled(FormInput)`
  width: 250px;
`;

export const PhoneBtn = styled.button`
  background-color: #a6a6a6;
  border-radius: 8px;
  border: none;
  color: white;
  width: 130px;
  height: 50px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

export const CancleBtn = styled(PhoneBtn)`
  width: 210px;
  color: #323232;
  background-color: white;
  border: 1px solid #323232;
`;

export const SignUpBtn = styled(CancleBtn)`
  color: white;
  background-color: #323232;
`;

export const HelperText = styled.span`
  color: red;
  margin-top: 5px;
`;
