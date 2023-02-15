import styled from 'styled-components';

export const MyProfileWrapper = styled.div``;

export const MyProfileNickname = styled.h3`
  margin: 3vh 15vh 2vh;
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

export const Colortext = styled.span`
  font-size: 10px;
  &.success {
    color: green;
  }
  &.error {
    color: #ff2727;
  }
`;

// 이미지 수정, 업로드 관련 스타일링
export const ImgModifyButton = styled.button`
  margin: 0vh 15vh 1vh 15vh;
`;

// export const ProfileImgLabel = styled.label`
//   height: 150px;
//   width: 150px;
//   border-radius: 3px;
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 15vh 15vh 10vh 15vh;

//   cursor: pointer;
// `;

// export const ProfileImgFileInput = styled.input`
//   height: 10%;
//   width: 20%;
//   border-radius: 3px;
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 15vh 15vh 10vh 15vh;

//   cursor: pointer;
// `;

// export const NewProfileForm = styled.form``;

// export const ImageModifyBtn = styled.button`
//   margin-left: 15vh;
//   cursor: pointer;
// `;

// =========여기서부터 이미지 라벨=========
export const ProfileImgLabel = styled.label`
  height: 150px;
  width: 150px;
  border-radius: 3px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15vh 15vh 1vh 15vh;
  cursor: pointer;
`;

export const ProfileImgInput = styled.input`
  margin: 1vh 15vh 1vh 15vh;
`;

export const NewImageForm = styled.form``;
