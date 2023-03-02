import { useEffect, useState } from 'react';
import { auth, storage } from '../../../services/firebase';
import * as S from './style';
import MyPageTab from '../MyPageTab/MyPageTab';
import DeleteAccount from '../../Authentication/DeleteAccount/DeleteAccount';
import MyProfileEditModal from './MyProfileEditModal';
import { useRecoilState } from 'recoil';
import { editModal, profileState } from '../../../atoms';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';
import basicProfileImg from '../../../assets/Img/basicProfileImg.png';
type CurrentUserProfile = any;
const MyProfile = () => {
  const user = useRecoilValue(userInfo);
  const userInfos = user.userInfomation;
  const currentUserProfile: CurrentUserProfile = auth.currentUser;
  console.log('currentUserProfile', currentUserProfile);

  const [open, setOpen] = useRecoilState(editModal);
  const handleOpen = () => setOpen(true);
  const [currentUser, setCurrentUser] = useState<any>('');
  const [nickname, setNickname] = useState<any>(currentUser.displayName); // 닉네임
  const [imgUploadUrl, setImgUploadUrl] = useState<any>(); // 업로드한 이미지 url
  const [imgProfileUrl, setImgProfileUrl] = useRecoilState(profileState);
  const currentUserInfos: any = auth.currentUser;

  // 현재 로그인한 사용자 가져오기
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(auth.currentUser);
        setImgUploadUrl(user.photoURL);
      } else {
        return console.log('로그인 안됨');
      }
    });
  }, [auth.currentUser]);

  // 바뀔 때마다 실행해달라
  useEffect(() => {
    if (currentUserInfos?.photoURL !== undefined) {
      setImgProfileUrl(currentUserInfos?.photoURL);
    }
  }, [currentUserInfos?.photoURL]);

  return (
    <S.MyPageAll>
      <S.MyPageContainer>
        <S.MyProfileBox>
          <S.ProfileImgLabelInputWrapper>
            <S.ProfileImgShow
              src={
                currentUserProfile?.photoURL
                  ? currentUserProfile?.photoURL
                  : basicProfileImg
              }
              onClick={handleOpen}
            />
          </S.ProfileImgLabelInputWrapper>
          <S.MyProfileNickname>{currentUser.displayName}</S.MyProfileNickname>
          <S.NicknameInputWrapper>
            <S.NicknameText>닉네임</S.NicknameText>
            <S.NicknameInput
              type="text"
              placeholder={currentUser.displayName}
              value={nickname}
            />
          </S.NicknameInputWrapper>
          <S.EmailInputWrpper>
            <S.EmailText>이메일</S.EmailText>
            <S.EmailInputDiv>{userInfos.email}</S.EmailInputDiv>
          </S.EmailInputWrpper>
          <S.PhoneNumInputWrpper>
            <S.PhoneNumText>휴대전화</S.PhoneNumText>
            <S.PhoneNumInputDiv>{userInfos.phoneNumber}</S.PhoneNumInputDiv>
          </S.PhoneNumInputWrpper>
          <S.GenderInputWrpper>
            <S.GenderText>성별</S.GenderText>
            <S.GenderInputDiv>{userInfos.gender}</S.GenderInputDiv>
          </S.GenderInputWrpper>
          <S.AgeInputWrpper>
            <S.AgeText>생일</S.AgeText>
            <S.AgeInputDiv>{userInfos.age}</S.AgeInputDiv>
          </S.AgeInputWrpper>
          <S.ModifyCompleteButton type="button">
            <MyProfileEditModal />
          </S.ModifyCompleteButton>
          <DeleteAccount />
        </S.MyProfileBox>
      </S.MyPageContainer>
      <MyPageTab />
    </S.MyPageAll>
  );
};

export default MyProfile;
