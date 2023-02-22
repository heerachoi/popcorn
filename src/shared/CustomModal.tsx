import { useResetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { modalStatus } from '../atoms';

type Props = {
  title: string;
  text: string;
  cancel: string;
  submit: string;
  fnc: any;
};

const CustomModal = ({ title, text, cancel, submit, fnc }: Props) => {
  const modalStatusReset = useResetRecoilState(modalStatus);
  const isModal = useRecoilValue(modalStatus);

  const condition =
    isModal.validPhoneNumber ||
    isModal.phoneValidComplete ||
    isModal.invalidVerificationCode ||
    isModal.codeExpired ||
    isModal.signUpComplete ||
    isModal.emailAlreadyInUse ||
    isModal.signoutComplete ||
    isModal.login ||
    isModal.loginError ||
    isModal.userNotFound ||
    isModal.wrongPassword;

  const modalStatusChangeHandler = () => {
    modalStatusReset();
  };

  return (
    <>
      <ModalContainer />
      <ModalWrapper>
        <ModalHolder>
          <TitleWrap>
            <TextBackground>
              <Title>{title}</Title>
            </TextBackground>
          </TitleWrap>
          <TextWrap>
            <Text>{text}</Text>
          </TextWrap>
          {!condition ? (
            <ButtonWrap>
              <CancelButton onClick={modalStatusChangeHandler}>
                {cancel}
              </CancelButton>
              <SubmitButton onClick={fnc}>{submit}</SubmitButton>
            </ButtonWrap>
          ) : (
            <OnlyButtonWrap>
              <OnlySubmitButton onClick={fnc}>{submit}</OnlySubmitButton>
            </OnlyButtonWrap>
          )}
        </ModalHolder>
      </ModalWrapper>
    </>
  );
};

export default CustomModal;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

export const ModalHolder = styled.div`
  z-index: 1050;
  width: 600px;
  height: 312px;
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
`;

export const TitleWrap = styled.div`
  padding: 80px 0 30px 0;
  display: flex;
  justify-content: center;
`;

export const TextBackground = styled.div`
  text-align: center;
  width: 300px;
  height: 30px;
  background-color: #ffeb62;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const Title = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #323232;
  position: relative;
  top: -12px;
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Text = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

export const ButtonWrap = styled.div`
  padding: 50px 100px;
  display: flex;
  justify-content: space-evenly;
`;

export const CancelButton = styled.button`
  border-radius: 8px;
  width: 160px;
  height: 40px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: #9b9b9b;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  &:hover {
    background-color: #d9d9d9;
    border: 1px solid #bdbdbd;
  }
`;

export const SubmitButton = styled(CancelButton)`
  background-color: #bdbdbd;
  border: 1px solid #9b9b9b;
  color: #ffffff;
  &:hover {
    background-color: #676767;
    border: 1px solid #323232;
  }
`;

export const OnlyButtonWrap = styled(ButtonWrap)`
  justify-content: center;
`;

export const OnlySubmitButton = styled(SubmitButton)`
  width: 200px;
  height: 40px;
`;
