import { useEffect, useState } from 'react';
import { auth } from '../../../services/firebase';
import * as S from './style';
import MyPageTab from '../MyPageTab/MyPageTab';
import DeleteAccount from '../../Authentication/DeleteAccount/DeleteAccount';
import MyProfileEditModal from './MyProfileEditModal';
import { useRecoilState } from 'recoil';
import { editModal, profileState } from '../../../atoms';
import { useRecoilValue } from 'recoil';

const MyProfile = () => {
  const [open, setOpen] = useRecoilState(editModal);
  const handleOpen = () => setOpen(true);
  const [nickname, setNickname] = useState<any>(''); // 닉네임
  const [currentUser, setCurrentUser] = useState<any>('');
  console.log('currentUser', currentUser);
  const imgProfileUrl = useRecoilValue(profileState);

  const [imgUploadUrl, setImgUploadUrl] = useState<any>(); // 업로드한 이미지 url
  console.log('imgUploadUrlimgUploadUrlimgUploadUrlimgUploadUrl', imgUploadUrl);
  useEffect(() => {
    auth.currentUser?.photoURL;
    if (currentUser?.photoURL) {
      setImgUploadUrl(currentUser.photoURL);
      console.log('currentUser.photoURL', currentUser.photoURL);
    }
  }, [currentUser, nickname]);

  // 현재 로그인한 사용자 가져오기
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('useEffect user.photoURL', user.photoURL);
        setCurrentUser(auth.currentUser);
        setImgUploadUrl(user.photoURL);
      } else {
        return console.log('로그인 안됨');
      }
    });
  }, [currentUser]);

  useEffect(() => {
    console.log('user.photoURL', currentUser?.photoURL);
    setImgUploadUrl(currentUser.photoURL);
  }, []);

  return (
    <S.MyPageAll>
      <S.MyPageContainer>
        <S.MyProfileBox>
          <S.NewProfileSubmitForm>
            <S.ProfileImgLabelInputWrapper>
              <S.ProfileImgLabel htmlFor="profileUploadImg">
                <S.ProfileImgShow src={imgProfileUrl} onClick={handleOpen} />
              </S.ProfileImgLabel>
              <S.ProfileImgInput
                accept="image/*"
                id="profileUploadImg"
                style={{ display: 'none' }}
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
              <S.EmailInput placeholder={currentUser.email} readOnly />
            </S.EmailInputWrpper>
            <S.PhoneNumInputWrpper>
              <S.PhoneNumText>휴대전화</S.PhoneNumText>
              <S.PhoneNumInputDiv></S.PhoneNumInputDiv>
            </S.PhoneNumInputWrpper>
            <S.GenderInputWrpper>
              <S.GenderText>성별</S.GenderText>
              <S.GenderInput />
            </S.GenderInputWrpper>
            <S.AgeInputWrpper>
              <S.AgeText>생일</S.AgeText>
              <S.AgeInput />
            </S.AgeInputWrpper>
            <S.ModifyCompleteButton type="button">
              <MyProfileEditModal />
            </S.ModifyCompleteButton>
          </S.NewProfileSubmitForm>
          <DeleteAccount />
        </S.MyProfileBox>
      </S.MyPageContainer>
      <MyPageTab />
    </S.MyPageAll>
  );
};

export default MyProfile;
