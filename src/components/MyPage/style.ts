import styled from 'styled-components';

export const MyProfileWrapper = styled.div``;

export const MyProfileImage = styled.div`
  height: 17vh;
  width: 10vw;
  border-radius: 3px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15vh 15vh 10vh 15vh;

  cursor: pointer;
`;

export const MyProfileNickname = styled.h3`
  margin: 5vh 15vh 2vh;
`;

export const NicknameModifyBox = styled.div`
  border-bottom: 2px solid gray;
  padding: 10px;
  width: 20%;
  margin: 2vh 15vh;
`;

export const NicknameInput = styled.input`
  width: 60%;
  border: 1px solid #e6ebfa;
  font-size: 16px;
`;

export const ModifyButton = styled.button`
  cursor: pointer;
  margin-left: 1vw;
`;

export const DeleteAccountBtn = styled.button`
  margin: 5vh 15vh 2vh;
  cursor: pointer;
`;

export const PasswordChange = styled.button`
  display: flex;
  margin-left: 15vh;
  cursor: pointer;
`;

export const Colortext = styled.span`
  font-size: 10px;
  &.success {
    color: green;
  }
  &.error {
    color: #ff2727;
  }
`;
