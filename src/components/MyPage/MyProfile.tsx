import { useState } from 'react';
// import { db, storage } from '../../../services/firebase';
import { auth } from '../../services/firebase';
import {
  MyProfileWrapper,
  MyProfileImage,
  MyProfileNickname,
  NicknameModifyBox,
  ModifyButton,
  DeleteAccountBtn,
  PasswordChange,
  NicknameInput,
} from './style';

export const MyProfile = () => {
  console.log(auth.currentUser);

  const [nickname, setNickname] = useState<string>(''); // 닉네임(displayName)
  const [photoUrl, setPhotoUrl] = useState<string>(''); // 이미지 링크(photoURL)

  // 닉네임 받아오는 함수

  const userName = auth.currentUser?.displayName;
  console.log(userName);

  // setNickname(userName);

  return (
    <MyProfileWrapper>
      <MyProfileImage>이미지</MyProfileImage>
      <MyProfileNickname>{userName}</MyProfileNickname>
      <NicknameModifyBox>
        {/* 여기 인풋태그 피그마랑 최대한 비슷하게 고치기 */}
        <NicknameInput placeholder="닉네임을 입력해주세요"></NicknameInput>
        <ModifyButton>수정</ModifyButton>
      </NicknameModifyBox>

      <DeleteAccountBtn>회원탈퇴</DeleteAccountBtn>
      <PasswordChange>비밀번호 변경</PasswordChange>
    </MyProfileWrapper>
  );
};
