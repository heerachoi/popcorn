import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../atoms';
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
  Colortext,
} from './style';
import { updateProfile } from 'firebase/auth';

const MyProfile = () => {
  // nickname : 현재 nickname이 들어옴
  const [nickname, setNickname] = useState<any>('');
  // currentUser : displayName이 담겨있는 객체
  const [currentUser, setCurrentUser] = useState<any>('');

  // useRecoilValue 기능으로 userInfo를 받아옴
  // const user = useRecoilValue(userInfo);

  // 로그인 상태인지 확인 함수
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // auth = getAuth() : currentUser이 담겨있는 배열(AuthImpl)
      // user : displayName이 담겨있는 객체(UserImpl)

      if (user) {
        console.log('auth.currentUser', auth.currentUser);
        setCurrentUser(auth.currentUser);
        // auth.currentUser : displayName이 담겨있는 객체(UserImpl)
        // setCurrentUser : 함수?같은 건데 잘 모르겠음
        setNickname(auth.currentUser?.displayName);

        console.log(
          'auth.currentUser?.displayName',
          auth.currentUser?.displayName,
        );
        //auth.currentUser?.displayName : 원래 닉네임
        console.log('로그인 되어있음');
      } else if (!user) {
        console.log('로그인 안됨');
      }
    });
    if (!currentUser) return;
  }, []);

  // 닉네임 바꿔주는 함수
  // auth와 getAuth()는 같음

  const onClick = async () => {
    await updateProfile(currentUser, {
      displayName: nickname,
      photoURL: 'https://example.com/jane-q-user/profile.jpg',
    })
      .then(() => {
        setNickname('');
        console.log('nickname=>', nickname);
        alert('Profile updated!');
      })
      .catch((error) => {
        console.log('An error occurred');
      });
  };
  // 인풋에 입력한 상태 그대로 ui표시
  // onchange는 매번 set을 해주는 것
  const NicknameChangeInput = (event: any) => {
    setNickname(event.target.value);
    console.log('event.target.value', event.target.value);
  };

  return (
    <MyProfileWrapper>
      <MyProfileImage>이미지</MyProfileImage>
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
