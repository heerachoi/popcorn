import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const EnterInputPasswordWrapper = styled.div`
`;

export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 0.4rem;
  margin-bottom: 20px;
`

export const InputWithCheckButton = styled.input`
  width: 220px;
  height: 40px;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  outline: none;
`;

export const CheckButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: 42px;
  height: 30px;
  border: 1px solid #9B9B9B;
  border-radius: 5px;
  font-size: 15px;
  background-color: #BDBDBD;
  cursor: pointer;
  color: #fff;
`



export const EnterInputPasswordText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  /* margin-bottom: 0.4rem; */
  color: #323232;
`;

export const WarningText = styled.div`
  font-size: 11px;
  color: red;
  max-width: 280px;
  margin-top: 5px;
`;

export const EnterInputChangePasswordWrapper = styled.div`
margin-top: 0.4rem;
margin-bottom: 20px;
`;
export const EnterInputChangePasswordText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  /* margin-bottom: 0.4rem; */
  color: #323232;
`;

export const EnterInputChangePasswordInput = styled.input`
  width: 280px;
  height: 40px;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  outline: none;
`;

export const EnterInputCheckPasswordWrapper = styled.div`
  /* margin: 2vh 0vh 2vh 8vh; */
`;

export const EnterInputCheckPasswordText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  /* margin-bottom: 0.4rem; */
  color: #323232;
`;
