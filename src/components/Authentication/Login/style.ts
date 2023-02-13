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

export const LoginImg = styled.div`
  width: 400px;
  height: 300px;
  background-color: whitesmoke;
`;

export const TitleWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const Title = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #323232;
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormInput = styled.input`
  border: 1px solid #a6a6a6;
  border-radius: 8px;
  width: 400px;
  height: 50px;
  padding: 0 20px 0 20px;
  margin-bottom: 20px;
`;

export const FormBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const NavigateBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  background-color: #a6a6a6;
  border-radius: 8px;
  border: none;
  width: 442px;
  height: 50px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: white;
  background-color: #323232;
  cursor: pointer;
`;

export const HelperText = styled.span`
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
`;
