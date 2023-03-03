import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const MyPageAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;
    align-items: center;
  }
`;

export const MyProfileBox = styled.div`
  width: 352px;
  border: 2px solid ${COLORS.orange3};
  border-radius: 8px;
  background: ${COLORS.orange4};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TabContainer = styled.div`
  width: 688px;
  @media screen and (max-width: 1060px) {
    width: 370px;
  }
`

export const ProfileImgLabelInputWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

export const MyProfileNickname = styled.h3`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 28px;
  color: black;
  margin: 20px 0 10px;

  text-align: center;
`;

export const WelcomeText = styled.div`
  font-size: 20px;
`;

export const InfoTitle = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  margin-bottom: 0.2rem;
  color: ${COLORS.black};
`;

export const NicknameModifyBox = styled.div`
  border-bottom: 2px solid gray;
  padding: 10px;
  width: 20%;
  margin: 2vh 15vh;
`;

export const InfoHolder = styled.div`
  width: 252px;
  height: 48px;
  border: 1px solid ${COLORS.gray6};
  background-color: ${COLORS.white};
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 90px 0 36px;

  @media screen and (max-width: 1150px) {
    margin-top: 30px;
  }
`

export const ModifyCompleteButton = styled.button`
  cursor: pointer;
  padding: 8px;
  width: 122px;
  height: 44px;
  border: 1px solid ${COLORS.gray7};
  border-radius: 8px;
  font-size: 16px;
  color: ${COLORS.gray5};
  background-color: ${COLORS.white};
`;

export const ModifyDeleteButton = styled.button`

`;

// 이미지 수정, 업로드 관련 스타일링
export const ImgModifyButton = styled.button`
`;

/*
 * 이미지 라벨
 */
export const ProfileImgLabel = styled.label`
  width: 200px;
  height: 200px;
  border-radius: 70%;
  border: 1px solid #${COLORS.gray7};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProfileImgShow = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 70%;
  border: 1px solid #${COLORS.gray7};
`;
export const ProfileImgInput = styled.input``;

export const InfoWrapper = styled.div`
  margin-top: 21px;
`;

export const EmailInputDiv = styled.div`
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
  background-color: #ffffff;
`;

export const MyBookmarkReportWrap = styled.div``;


/*
 * 프로필 모달창
 */


export const EditModalAll = styled.div`
`;

export const EditModalBtnText = styled.div`
  cursor: pointer;
  color: ${COLORS.gray5};
`;

export const EditModalTitle = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 800;
  font-size: 23px;
  color: #323232;
`;

export const EditModalImgLabelInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 5px;
`;

export const EnterInputPasswordWrapper = styled.div`
`;

export const EditModalProfileImgLabel = styled.label`
  width: 160px;
  height: 160px;
  border-radius: 70%;
  border: 1px solid #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EditModalProfileImgShow = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 70%;
  border: 1px solid #d9d9d9;
`;

export const EditModalProfileImgInput = styled.input``;

export const EditModalNicknameInputWrapper = styled.div`
`;

export const EditModalText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  margin-bottom: 0.3rem;
  color: #323232;
`;

export const EditModalInput = styled.input`
  width: 280px;
  height: 40px;
  border: 1px solid ${COLORS.gray7};
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 20px;
  outline: none;
`;

export const EditModalEmailInputWrpper = styled.div`
`;


/*
 * 모달창 버튼
 */
export const EditModalBtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 8px;
`;

export const EditModalCanceleButton = styled.button`
  cursor: pointer;
  padding: 8px;
  gap: 8px;
  width: 150px;
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #fff;

  /* Title Text */
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  text-align: center;
  color: #9b9b9b;
`;

export const EditModalCompleteButton = styled.button`
  cursor: pointer;
  padding: 8px;
  width: 150px;
  height: 50px;

  background: ${COLORS.orange4};
  border: 1px solid ${COLORS.orange3};
  border-radius: 5px;
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  text-align: center;
  color: ${COLORS.orange6};
`;
