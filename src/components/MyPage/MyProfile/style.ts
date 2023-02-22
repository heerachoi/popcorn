import styled from 'styled-components';

export const MyPageAll = styled.div`
/* max-width: 1040px;
width: 100%;
background-color: beige; */
`;

export const MyPageContainer = styled.div`
/* background-color: beige; */
max-width: 1440px;
width: 100%;
height: 1621px;
margin: 0 auto;
`

export const MyProfileBox = styled.div`
  /* Rectangle 304 */
  box-sizing: border-box;

  position: relative;
  width: 336px;
  height: 1084px;
  left: 130px;
  top: 80px;

  /* txt2 */
  border: 2px solid #ffeb62;
  border-radius: 8px;
  background: #fff9d2;
`;

export const ProfileImgLabelInputWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

export const MyProfileNickname = styled.h3`
  // 얘가 지금 안 보임
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: black;
  /* or 100% */
  margin: 5vh;

  text-align: center;
`;

export const NicknameInputWrapper = styled.div`
  margin: 8vh 0vh 3vh 5vh;
`;

export const NicknameText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  /* txt1 */

  color: #323232;
`;
export const NicknameModifyBox = styled.div`
  border-bottom: 2px solid gray;
  padding: 10px;
  width: 20%;
  margin: 2vh 15vh;
`;

export const NicknameInput = styled.input`
  width: 80%;
  height: 48px;
  border: 1px solid #a6a6a6;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

export const ModifyCompleteButton = styled.button`
  cursor: pointer;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  position: absolute;

  width: 122px;
  height: 48px;
  left: 12%;
  top: 971px;

  /* Grayscale/Gray1 */

  border: 1px solid #d9d9d9;
  border-radius: 8px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  /* Grayscale/Gray1 */

  color: #9b9b9b;
  background-color: #ffffff;
`;

// 이미지 수정, 업로드 관련 스타일링
export const ImgModifyButton = styled.button`
  margin: 0vh 15vh 1vh 15vh;
`;

// =========여기서부터 이미지 라벨=========
export const ProfileImgLabel = styled.label`
  width: 200px;
  height: 200px;
  border-radius: 70%;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImgShow = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 70%;
  border: 1px solid #d9d9d9;
`;
export const ProfileImgInput = styled.input`
  /* margin: 1vh 15vh 1vh 15vh; */
`;

export const NewProfileSubmitForm = styled.form``;

// =======이메일 묶음
export const EmailInputWrpper = styled.div`
  margin: 3vh 0vh 3vh 5vh;
`;

export const EmailText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #323232;
`;

export const EmailInput = styled.input`
  width: 80%;
  height: 48px;
  border: 1px solid #a6a6a6;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background-color: #d9d9d9;
`;

// =======휴대전화 묶음
export const PhoneNumInputWrpper = styled.div`
  margin: 3vh 0vh 3vh 5vh;
`;

export const PhoneNumText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #323232;
`;

export const PhoneNumInput = styled.input`
  width: 80%;
  height: 48px;
  border: 1px solid #a6a6a6;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

//====================================여기서부터 북마크리스트

export const MyBookmarkReportWrap = styled.div``;

// export const MyBookmarkReportContainer = styled.div`
//   /* box-sizing: border-box; */
//   max-width: 1040px;
//   width: 100%;
//   height: 620px;
//   margin: 0 auto;
// `;

// export const MyBookmarkReportBox = styled.div`
//   /* Rectangle 303 */

//   box-sizing: border-box;

//   position: absolute;
//   width: 688px;
//   height: 1084px;
//   left: 580px;
//   top: 220px;

//   /* Grayscale/Gray3 */

//   border: 1px solid #9b9b9b;
//   border-radius: 8px;
// `;
// export const MyBookmarkReportTab = styled.div``;
