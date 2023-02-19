import { useEffect, useState, useRef } from 'react';
import { auth, storage } from '../../../services/firebase';
import { updateProfile, onAuthStateChanged } from 'firebase/auth';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import * as S from './style';
import MyPageTab from '../MyPageTab/MyPageTab';
import DeleteAccount from '../../Authentication/DeleteAccount/DeleteAccount';
import React from 'react';
const MyProfile = () => {
  const [nickname, setNickname] = useState<any>(''); // 닉네임
  // 현재 유저를 나타내며, 수정 완료 버튼을 누르기 전까지 currentUser의 displayName은 이전에 설정해두었던 닉네임을 가리킨다.
  // 쉽게 이야기하자면 Jane을 가리킴
  const [currentUser, setCurrentUser] = useState<any>('');

  const [imgFile, setImgFile] = useState(''); // 이미지 파일 엄청 긴 이름
  const [imgFileName, setImgFileName] = useState(''); // 이미지 파일 이름.jpg
  const [imgUploadUrl, setImgUploadUrl] = useState<any>(
    auth.currentUser?.photoURL,
  ); // 업로드한 이미지 url
  console.log('=================================시작');
  console.log('imgFileName', imgFileName);
  console.log('imgUploadUrl ', imgUploadUrl);

  // 변경할 이미지를 input창에 넣으면 변경됨
  const newProfileImgOnChangeHandler = (
    // event의 타입을 나타냄
    // 클릭, 누르기 등등의 이벤트 중에서 사용할 이벤트와 일치하는 이벤트를 선택하면 됨
    // onChange 이벤트를 활용하려하기 때문에 이벤트 타입 목록 중에서 changeEvent를 씀
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const target = event.currentTarget;
    // 이벤트로부터 파일을 얻어와서 첫번째 파일만 받음
    const theFile = (target.files as FileList)[0];
    console.log('target', target);
    console.log('theFile', theFile);
    setImgFileName(theFile.name);

    const reader = new FileReader();
    reader.readAsDataURL(theFile); // file객체를 data url로 바꿔줌
    console.log('reader', reader);
    // 파일 읽기를 끝내면 state로 만들어둔 setImgFile에 값을 넣어줌
    reader.onloadend = (finishedEvent: any) => {
      setImgFile(finishedEvent.currentTarget.result);
    };
  };

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
  }, [currentUser]);

  // 닉네임, 이미지 파이어베이스에 업로드해주고 불러오는 코드
  // 바꾸려는 닉네임과 이미지를 파이어베이스에 업데이트해주는 코드
  const submitNicknameImgChange = async (e: any) => {
    e.preventDefault();
    if (imgFile.length !== 0) {
      const imgRef = ref(storage, `profileUploadImg/${imgFileName + uuidv4()}`);
      // 이벤트에 응답을 받아서
      // imgRef, imgFile, 'data_url'를 문자열로 변환해준다는 뜻인듯?

      const response = await uploadString(imgRef, imgFile, 'data_url');
      const downloadImageUrl = await getDownloadURL(response.ref);
      setImgUploadUrl(downloadImageUrl);

      await updateProfile(currentUser, {
        displayName: nickname,
        photoURL: downloadImageUrl,
      })
        .then(() => {
          alert('Profile updated!');
          setNickname('');
        })
        .catch((error: any) => {});
    } else {
      await updateProfile(currentUser, {
        displayName: nickname,
      })
        .then(() => {
          alert('Profile updated!');
          setNickname('');
        })
        .catch((error: any) => {});
    }
  };

  console.log('currentUser', currentUser);
  console.log('===================================');
  // 변경할 닉네임을 입력하면 실시간으로 받아오는 함수
  const ToChangeNicknameInput = (event: any) => {
    setNickname(event.target.value);
  };

  return (
    <S.MyPageAll>
      <S.MyProfileBox>
        <S.NewProfileSubmitForm onSubmit={submitNicknameImgChange}>
          <S.ProfileImgLabelInputWrapper>
            <S.ProfileImgLabel htmlFor="profileUploadImg">
              <S.ProfileImgShow src={imgUploadUrl} />
            </S.ProfileImgLabel>
            <S.ProfileImgInput
              type="file"
              accept="image/*"
              id="profileUploadImg"
              onChange={newProfileImgOnChangeHandler}
              style={{ display: 'none' }}
            />
          </S.ProfileImgLabelInputWrapper>
          <S.MyProfileNickname>{currentUser.displayName}</S.MyProfileNickname>

          <S.NicknameInputWrapper>
            <S.NicknameText>닉네임</S.NicknameText>
            <S.NicknameInput
              type="text"
              placeholder={currentUser.displayName}
              onChange={ToChangeNicknameInput}
              value={nickname}
            />
          </S.NicknameInputWrapper>
          <S.EmailInputWrpper>
            <S.EmailText>이메일</S.EmailText>
            <S.EmailInput placeholder={currentUser.email} readOnly />
          </S.EmailInputWrpper>
          {/* <S.PhoneNumInputWrpper>
            <S.PhoneNumText>휴대전화</S.PhoneNumText>
            <S.PhoneNumInput placeholder={currentUser.phoneNumber} />
          </S.PhoneNumInputWrpper> */}

          <S.ModifyCompleteButton type="submit">
            수정완료
          </S.ModifyCompleteButton>
        </S.NewProfileSubmitForm>
        <DeleteAccount />
      </S.MyProfileBox>
      <MyPageTab />
    </S.MyPageAll>
  );
};

export default MyProfile;
