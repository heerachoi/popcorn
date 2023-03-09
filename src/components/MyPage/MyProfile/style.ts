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
  border-radius: 8px 0px 0px 8px;
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
`;

export const ProfileImgLabelInputWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

export const MyProfileNickname = styled.h3`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 28px;
  color: ${COLORS.black};
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
`;

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

export const ModifyDeleteButton = styled.button``;

// 이미지 수정, 업로드 관련 스타일링
export const ImgModifyButton = styled.button``;

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
  cursor: pointer;
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
  background-color: #${COLORS.white};
`;

export const MyBookmarkReportWrap = styled.div``;

/*
 * 프로필 모달창
 */

export const EditModalAll = styled.div``;

export const EditModalBtnText = styled.div`
  cursor: pointer;
  color: ${COLORS.gray5};
`;

export const EditModalTitle = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 800;
  font-size: 23px;
  color: #${COLORS.gray1};
`;

export const EditModalImgLabelInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 5px;
`;

export const EnterInputPasswordWrapper = styled.div``;

export const EditModalProfileImgLabel = styled.label`
  width: 160px;
  height: 160px;
  border-radius: 70%;
  border: 1px solid #${COLORS.gray7};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EditModalProfileImgShow = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 70%;
  border: 1px solid #${COLORS.gray7};
`;

export const EditModalProfileImgInput = styled.input``;

export const EditModalNicknameInputWrapper = styled.div`
  margin-top: 30px;
`;

export const EditModalText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  margin-bottom: 0.3rem;
  color: #${COLORS.gray1};
`;

export const EditModalNicknameInput = styled.input`
  width: 370px;
  height: 45px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

export const EditModalEmailInputWrpper = styled.div`
  margin-top: 30px;
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

/*
 * 모달창 버튼
 */
export const EditModalBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 4rem;
`;

export const EditModalCanceleButton = styled.button`
  cursor: pointer;
  padding: 8px;
  gap: 8px;
  width: 170px;
  height: 60px;
  background: #ffffff;
  border: 1px solid ${COLORS.gray7};
  border-radius: 8px;
  /* Title Text */
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  text-align: center;
  color: #${COLORS.gray5};
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
  border: 1px solid ${COLORS.green2};
  border-radius: 8px;
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  text-align: center;
  color: ${COLORS.green1};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const EditModalEmailInput = styled.input`
  width: 370px;
  height: 45px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
`;

// Modal Tab
export const MyBookmarkReportWraps = styled.div``;
export const MyBookmarkReportContainer = styled.div``;
export const MyBookmarkReportBox = styled.div``;
export const MyBookmarkReportTabMenu = styled.ul`
  padding: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  border-bottom: 2px solid #9b9b9b;
`;

export const MyTitleTabTitleBox = styled.div``;
export const MyTitleTabBtn = styled.button`
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  display: block;
  border: none;
  color: black;
  padding-bottom: 10px;
  margin-top: 13px;
  text-decoration: none;

  cursor: pointer;
  width: 50%;
  &.active {
    color: #00c113;
    border-bottom: 2px solid #00c113;
  }
`;

export const MyContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyProfileStar1 = styled.img`
  position: relative;
  top: -80px;
  left: 58px;
`;

export const MyProfileStar2 = styled.img`
  position: relative;
  bottom: -65px;
  right: 40px;
`;
