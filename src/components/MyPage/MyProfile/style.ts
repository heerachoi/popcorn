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
`;

export const MyProfileBox = styled.div`
  /* Rectangle 304 */
  box-sizing: border-box;

  position: relative;
  width: 400px;
  height: 1084px;
  left: 3%;
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
  margin: 5vh 0vh 2vh 5vh;
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
  /* background-color: #d9d9d9; */
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

// ==============성별
export const GenderInputWrpper = styled.div`
  margin: 3vh 0vh 3vh 5vh;
`;

export const GenderText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #323232;
`;

export const GenderInput = styled.input`
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

export const AgeInputWrpper = styled.div`
  margin: 3vh 0vh 3vh 5vh;
`;

export const AgeText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #323232;
`;

export const AgeInput = styled.input`
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

export const MyBookmarkReportWrap = styled.div``;

// =================================여기서부터 프로필 모달창

export const EditModalAll = styled.div``;

export const EditModalBtnText = styled.p`
  /* 버튼 */

  width: 88px;
  height: 24px;

  /* Title4 */

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Grayscale/Gray3 */

  color: #9b9b9b;
`;

// export const EditModalButton = styled.button``;

export const EditModalTitleText = styled.p`
  /* 타이틀 */

  width: 190px;
  height: 38px;
  /* display: flex;
  justify-content: center; */
  /* align-items: center; */
  /* Title1 */

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 27px;
  line-height: 5rem;
  margin-left: 13rem;

  /* Grayscale/Gray1 */

  color: #323232;
`;

export const EditModalImgLabelInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11%;
`;

export const EditModalProfileImgLabel = styled.label`
  width: 200px;
  height: 200px;
  border-radius: 70%;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EditModalProfileImgShow = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 70%;
  border: 1px solid #d9d9d9;
`;

export const EditModalProfileImgInput = styled.input`
  /* margin: 1vh 15vh 1vh 15vh; */
`;
// 얘는 모달창에선 안보여줘도 될듯
// export const EditModalMyProfileNickname = styled.h3`
//   font-family: 'Apple SD Gothic Neo';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 32px;
//   line-height: 32px;
//   color: black;
//   /* or 100% */
//   margin: 5vh;

//   text-align: center;
// `;

export const EditModalNicknameInputWrapper = styled.div`
  margin: 5vh 0vh 2vh 8vh;
`;

export const EditModalNicknameText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.4rem;

  /* txt1 */

  color: #323232;
`;

export const EditModalNicknameInput = styled.input`
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

// =======이메일 묶음
export const EditModalEmailInputWrpper = styled.div`
  margin: 2vh 0vh 2vh 8vh;
`;

export const EditModalEmailText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.4rem;
  color: #323232;
`;

// 모달창 버튼

export const EditModalBtnWrapper = styled.div`
  width: 100%;
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
  width: 200px;
  height: 60px;
  /* margin-left: 9%;
  margin-bottom: 1rem; */
  border: 1px solid #d9d9d9;
  border-radius: 8px;

  /* Title Text */
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #9b9b9b;
`;

export const EditModalCompleteButton = styled.button`
  cursor: pointer;

  display: inline-block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 200px;
  height: 60px;
  left: 724px;
  top: 1149px;
  background: #bdbdbd;
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  /* margin-top: 2rem; */
  /* margin-left: 17rem;
  margin-bottom: 15rem; */
  /* margin-left: 9%; */
  /* Title Text */
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
