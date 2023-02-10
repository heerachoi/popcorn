import styled from 'styled-components';

export const Wrap = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #a6a6a6;
`;

export const Title = styled.button`
  cursor: pointer;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  border: none;
  background-color: rgba(255, 255, 255, 0);
`;

export const DummyBox = styled.div``;

export const BtnWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
`;

export const SignUpBtn = styled.button`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #323232;
  border-radius: 4px;
`;

export const CustomerCenterBtn = styled(SignUpBtn)``;
export const LoginBtn = styled(SignUpBtn)``;
export const MapBtn = styled(SignUpBtn)``;
