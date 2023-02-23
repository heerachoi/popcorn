// 여기는 profile ui만

import { useEffect, useState, useRef } from 'react';
import { auth, storage } from '../../../services/firebase';
import { updateProfile, onAuthStateChanged } from 'firebase/auth';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import * as S from './style';
import MyPageTab from '../MyPageTab/MyPageTab';
import DeleteAccount from '../../Authentication/DeleteAccount/DeleteAccount';
import React from 'react';
import MyProfileEditModal from './MyProfileEditModal';
import { useRecoilState } from 'recoil';
import { editModal, profileState } from '../../../atoms';
import { useQuery } from 'react-query';
import { getUser } from '../../../services/api';
import { atom, useSetRecoilState, useRecoilValue } from 'recoil';

const MyProfile = () => {
  const [open, setOpen] = useRecoilState(editModal);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const profileRef = useRef();
  const [nickname, setNickname] = useState<any>(''); // 닉네임
  const [currentUser, setCurrentUser] = useState<any>('');
  console.log('currentUser', currentUser);
  const imgProfileUrl = useRecoilValue(profileState);

  // const [imgFile, setImgFile] = useState(''); // 이미지 파일 엄청 긴 이름
  // const [imgFileName, setImgFileName] = useState(''); // 이미지 파일 이름.jpg
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

  // 변경할 닉네임을 입력하면 실시간으로 받아오는 함수
  const ToChangeNicknameInput = (event: any) => {
    setNickname(event.target.value);
  };

  // 닉네임, 이미지 파이어베이스에 업로드해주고 불러오는 코드
  // 바꾸려는 닉네임과 이미지를 파이어베이스에 업데이트해주는 코드
  // const submitNicknameImgChange = async (e: any) => {
  //   e.preventDefault();
  //   if (imgFile.length !== 0) {
  //     const imgRef = ref(storage, `profileUploadImg/${imgFileName + uuidv4()}`);
  //     // 이벤트에 응답을 받아서
  //     // imgRef, imgFile, 'data_url'를 문자열로 변환해준다는 뜻인듯?

  //     const response = await uploadString(imgRef, imgFile, 'data_url');
  //     const downloadImageUrl = await getDownloadURL(response.ref);
  //     setImgUploadUrl(downloadImageUrl);

  //     await updateProfile(currentUser, {
  //       displayName: nickname,
  //       photoURL: downloadImageUrl,
  //     })
  //       .then(() => {
  //         alert('Profile updated!');
  //         setNickname('');
  //       })
  //       .catch((error: any) => {});
  //   } else {
  //     await updateProfile(currentUser, {
  //       displayName: nickname,
  //     })
  //       .then(() => {
  //         alert('Profile updated!');
  //         setNickname('');
  //       })
  //       .catch((error: any) => {});
  //   }
  // };

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
                // onChange={newProfileImgOnChangeHandler}
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
              <S.PhoneNumInputDiv>
                {/* {userInfos[0].phoneNumber} */}
              </S.PhoneNumInputDiv>
            </S.PhoneNumInputWrpper>
            <S.GenderInputWrpper>
              <S.GenderText>성별</S.GenderText>
              <S.GenderInput />
            </S.GenderInputWrpper>
            <S.AgeInputWrpper>
              <S.AgeText>생일</S.AgeText>
              <S.AgeInput />
            </S.AgeInputWrpper>

            {/* <S.ModifyCompleteButton type="submit">
              <MyProfileEditModal />
            </S.ModifyCompleteButton> */}
            <S.ModifyCompleteButton type="button">
              <MyProfileEditModal />
            </S.ModifyCompleteButton>
          </S.NewProfileSubmitForm>
          <DeleteAccount />
        </S.MyProfileBox>

        {/* 북마크/내가 쓴 제보 */}
      </S.MyPageContainer>
      <MyPageTab />
    </S.MyPageAll>
  );
};

export default MyProfile;
