import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const UpdatePasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const EnterInputPasswordWrapper = styled.div`
  display: flex;
`;

export const EnterInputPassword = styled.input`
  width: 300px;
  border: 1px solid ${COLORS.gray6};
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  margin-right: 10px;
`;

export const EnterInputPasswordText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.3rem;
  color: ${COLORS.black};
`;

export const EnterInputChangePasswordWrapper = styled.div`
  margin-top: 30px;
`;
export const EnterInputChangePasswordText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.3rem;
  color: ${COLORS.black};
`;

export const EnterInputChangePasswordInput = styled.input`
  width: 380px;
  height: 45px;
  border: 1px solid ${COLORS.gray6};
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

export const EnterInputCheckPasswordWrapper = styled.div`
  margin-top: 30px;
`;

export const EnterInputCheckPasswordInput = styled.input`
  width: 380px;
  height: 45px;
  border: 1px solid ${COLORS.gray6};
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

export const EnterInputCheckPasswordText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.3rem;
  color: ${COLORS.black};
`;

export const OkayBtn = styled.button`
  cursor: pointer;
  color: ${COLORS.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 72px;
  height: 50px;
  background-color: ${COLORS.gray6};
  border: 1px solid ${COLORS.gray5};
  border-radius: 8px;
`;

export const EditModalBtnWrapper = styled.div`
  padding-top: 70px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 4rem;
`;

export const EditModalCanceleButton = styled.button`
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 170px;
  height: 60px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.gray7};
  border-radius: 8px;

  /* Title Text */
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${COLORS.gray5};
`;

export const EditModalCompleteButton = styled.button`
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 170px;
  height: 60px;
  background-color: #e7ffd8;
  border: 1px solid #88e25d;
  border-radius: 8px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #00c113;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const EnterHelperText = styled.div`
  color: ${COLORS.red};
  padding-top: 10px;
`;
