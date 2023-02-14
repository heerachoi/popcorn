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
  console.log('nickname', nickname);

  // currentUser : displayName이 담겨있는 객체
  const [currentUser, setCurrentUser] = useState<any>('');

  // 로그인 상태인지 확인 함수
  //useEffect(()=>{},[])
  useEffect(() => {
    // ⭐⭐⭐괄호안에 들어가는 user가 뭔지? 아무거나 넣어도 되는데
    // onAuthStateChanged에서 user를 받아서 email같은 정보들을 확인해서 맞으면 auth.currentUser
    auth.onAuthStateChanged((user) => {
      // auth = getAuth() : currentUser이 담겨있는 배열(AuthImpl)
      // user : displayName이 담겨있는 객체(UserImpl)
      console.log('user', user);
      if (user) {
        // auth.currentUser는 리렌더링해야만 보임(useEffect의 특징)
        // 렌더링 결과가 실제 돔에 반영된 직후다.
        // 그러니까 이 모습이 다 그려지고 나서 함수값이 찍히는 것이다.
        // 그리고 컴포넌트가 사라지기 직전에도 마지막으로 호출된다
        // useEffect는 상태 값이 변경돼서 다시 랜더링 된 다음에 호출되는 것을 볼 수 있다.
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
        // console.log('로그인 되어있음');
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
