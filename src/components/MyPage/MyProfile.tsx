import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../atoms';
import { auth } from '../../services/firebase';
import {
  MyProfileWrapper,
  MyProfileNickname,
  NicknameModifyBox,
  ModifyButton,
  DeleteAccountBtn,
  PasswordChange,
  NicknameInput,
  Colortext,
  ProfileImgLabel,
  ProfileImgFileInput,
} from './style';
import { updateProfile } from 'firebase/auth';
// 이미지 업로드를 위해 firebase.ts에 만들어놓은 getFirestore를 import해옴
import { storage } from '../../../src/services/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

const MyProfile = () => {
  const [nickname, setNickname] = useState<any>(''); // 닉네임
  console.log('========================================시작');
  console.log('nickname1', nickname);
  const [currentUser, setCurrentUser] = useState<any>(''); // 현재 유저정보가 담겨있는 객체
  console.log('currentUser', currentUser);
  const [imgFile, setImgFile] = useState(''); // 이미지 파일
  const [fileName, setFileName] = useState(''); // 이미지 파일 이름

  // useEffect(()=>{})
  // 로그인 상태인지 확인하는 함수
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // 유저가 맞으면
      if (user) {
        setNickname(auth.currentUser?.displayName);
        console.log('nickname2', nickname);
        console.log(
          'auth.currentUser?.displayName',
          auth.currentUser?.displayName,
        );
        setCurrentUser(auth.currentUser);
        console.log('currentUser2', currentUser);
        console.log('auth.currentUser1', auth.currentUser);
      } else {
        console.log('로그인 안됨');
      }
    });
    // if (!currentUser) return;
  }, []);

  const onClick = async () => {
    // currentUser의 display네임을 바꿔줄 것이다.
    await updateProfile(currentUser, {
      displayName: nickname,
      photoURL: 'https://example.com/jane-q-user/profile.jpg',
    })
      .then(() => {
        setNickname('');
        console.log('nickname3', nickname);
        alert('Profile updated!');
      })
      .catch((error) => {
        console.log('An error occurred');
      });
  };

  const NicknameChangeInput = (event: any) => {
    setNickname(event.target.value);
    console.log('nickname4', nickname);
    console.log('event.target.value', event.target.value);
  };

  const ProfileImgChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const target = event.currentTarget;
    const theFile = (target.files as FileList)[0];
    setFileName(theFile.name);
  };

  console.log('==================================끝');
  return (
    <MyProfileWrapper>
      <div style={{ marginTop: 20 }}>
        <ProfileImgLabel htmlFor="profileImg">
          이미지
          {imgFile && <img src="imgFile" style={{ width: 150, height: 150 }} />}
        </ProfileImgLabel>
        <ProfileImgFileInput type="file" accept="image/*" id="profileImg" />
      </div>

      <MyProfileNickname>{currentUser?.displayName}</MyProfileNickname>
      <NicknameModifyBox>
        <NicknameInput
          placeholder="닉네임을 입력해주세요"
          onChange={NicknameChangeInput}
          value={nickname}
        />

        <ModifyButton onClick={onClick}>수정</ModifyButton>
      </NicknameModifyBox>

      <DeleteAccountBtn>회원탈퇴</DeleteAccountBtn>
      <PasswordChange>비밀번호 변경</PasswordChange>
    </MyProfileWrapper>
  );
};

export default MyProfile;
