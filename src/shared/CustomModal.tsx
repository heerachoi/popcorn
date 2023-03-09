import { useResetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { modalStatus } from '../atoms';
import COLORS from '../assets/CSS/colors';

type Props = {
  title: string;
  text: string;
  cancel: string;
  submit: string;
  onClick: any;
};

const CustomModal = ({ title, text, cancel, submit, onClick }: Props) => {
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
              <SubmitButton onClick={onClick}>{submit}</SubmitButton>
            </ButtonWrap>
          ) : (
            <OnlyButtonWrap>
              <OnlySubmitButton onClick={onClick}>{submit}</OnlySubmitButton>
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
  background-color: ${COLORS.black};
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
  background-color: ${COLORS.gray8};
  border: 1px solid ${COLORS.gray7};
  border-radius: 20px;

  @media screen and (max-width: 580px) {
    width: 300px;
    height: 230px;
  }
`;

export const TitleWrap = styled.div`
  padding: 80px 0 30px 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 580px) {
    padding: 50px 0 10px 0;
  }
`;

export const TextBackground = styled.div`
  text-align: center;
  width: 300px;
  height: 30px;
  background-color: ${COLORS.yellow1};
  box-sizing: border-box;
  border-radius: 20px;

  @media screen and (max-width: 580px) {
    width: 200px;
    height: 20px;
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
    font-size: 22px;
  }
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
  @media screen and (max-width: 580px) {
    font-size: 13px;
  }
`;

export const ButtonWrap = styled.div`
  padding: 50px 100px;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 580px) {
    padding: 30px 70px;
    justify-content: space-between;
  }
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
  color: ${COLORS.gray5};
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray7};
  &:hover {
    background-color: ${COLORS.gray7};
    border: 1px solid ${COLORS.gray6};
  }
  @media screen and (max-width: 580px) {
    width: 70px;
    height: 30px;
  }
`;

export const SubmitButton = styled(CancelButton)`
  background-color: ${COLORS.gray6};
  border: 1px solid ${COLORS.gray5};
  color: ${COLORS.white};
  &:hover {
    background-color: ${COLORS.gray3};
    border: 1px solid ${COLORS.gray1};
  }
`;

export const OnlyButtonWrap = styled(ButtonWrap)`
  justify-content: center;
`;

export const OnlySubmitButton = styled(SubmitButton)`
  width: 200px;
  height: 40px;
  @media screen and (max-width: 580px) {
    width: 100px;
    height: 30px;
  }
`;
