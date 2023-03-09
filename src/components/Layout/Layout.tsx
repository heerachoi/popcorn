// library
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { userInfoState } from '../../atoms';
import { kakaoAccessToken, userInfo } from '../../atoms';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
// firebase
import { auth } from '../../services/firebase';
//API
import { getUser } from '../../services/api';
// types
import { UserInfomation } from '../../types/user';
// component
import Footer from './Footer';
import Header from './Header/Header';
// style
import styled from 'styled-components';


type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [users, setUsers] = useRecoilState(userInfo);
  const reset = useResetRecoilState(userInfo);
  const { data: userDataFromJson } = useQuery('user', getUser);
  const [kakaoUserInfo, setKakaoUserInfo] = useRecoilState(userInfoState);
  const accessToken = useRecoilValue(kakaoAccessToken);
  console.log('userInfoState', userInfoState);
  console.log('kakaoUserInfo', kakaoUserInfo);
  console.log('kakaoUserInfo.nickName', kakaoUserInfo.nickName);
  const { pathname } = useLocation();

  // 로그인 상태를 전역적으로 관리해주는 함수
  // 로그아웃이 된 상태에서만 pHeader가 바뀐다.
  // Router.tsx에서 유저 상태관리를 해주었는데, 페이지 이동시 첫번째 useEffect가 다시 실행됨
  // Layout.tsx로 옮겨주니 해결되었다.
  useEffect(() => {
    if (accessToken === '') {
      reset();
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUsers({
            isLogin: true,
            userInfomation: {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              uid: user.uid,
              age: '',
              gender: '',
              phoneNumber: '',
              id: '',
            },
          });
        } else {
          reset();
        }
      });
    }
  }, [accessToken, auth]);
  // 의존성 배열에 원래 auth였는데 accessToken으로 바꿈

  useEffect(() => {
    if (accessToken !== undefined) {
      setUsers({
        isLogin: true,
        userInfomation: {
          displayName: kakaoUserInfo.nickName,
          email: kakaoUserInfo.email,
          photoURL: '',
          uid: '',
          age: kakaoUserInfo.age,
          gender: kakaoUserInfo.gender,
          phoneNumber: '',
          id: kakaoUserInfo.id,
        },
      });
    } else {
      reset();
    }
  }, [accessToken, kakaoUserInfo]);

  useEffect(() => {
    // 현재 유저와 users.json에 있는 user과 같으면
    const myUser = userDataFromJson?.filter(
      (user: UserInfomation) => users.userInfomation.uid === user.uid,
    )[0];

    // myUser가 빈 값이 아닐 때
    // 한번 더 set 해주는 이유 : 성별, 나이 조회수 및 마이페이지에서 정보수정을 하기 위해서
    if (!!myUser) {
      setUsers({
        isLogin: true,
        userInfomation: {
          ...myUser,
        },
      });
    }
    // users의 isLogin의 상태가 바뀔 때 마다 설정해준다.
  }, [users.isLogin]);

  return (
    <LayoutWrap>
      <Header />
      {/* children은 Router에서 감싸주는 components */}
      <div style={{ width: '100vw', overflow: 'hidden' }}>{children}</div>
      {pathname === '/map' ? null : <Footer />}
    </LayoutWrap>
  );
};

export default Layout;

const LayoutWrap = styled.div`
  overflow-x: hidden;
`;
