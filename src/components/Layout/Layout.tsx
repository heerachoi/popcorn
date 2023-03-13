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
  const { data: userDataFromJson } = useQuery('user', getUser, {
    staleTime: 500000,
  });
  const kakaoUserInfo = useRecoilValue(userInfoState);
  const accessToken = useRecoilValue(kakaoAccessToken);
  const { pathname } = useLocation();

  // 로그인 상태를 전역적으로 관리해주는 함수
  // 로그아웃이 된 상태에서만 pHeader가 바뀐다.
  // Router.tsx에서 유저 상태관리를 해주었는데, 페이지 이동시 첫번째 useEffect가 다시 실행됨
  // Layout.tsx로 옮겨주니 해결되었다.

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsers({
          isLogin: true,
          userInfomation: {
            nickName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            age: '',
            gender: '',
            phoneNumber: '',
            id: user.uid,
          },
        });
      } else if (!user && !accessToken) {
        reset();
      }
    });
  }, [auth, accessToken]);

  // kakaoToken undefined 일 때 !kakaoToken === true
  // kakaoToken null 일 때 !kakaoToken === true
  // kakaoToken string 일 때 !kakaoToken === false

  useEffect(() => {
    const kakaoId = localStorage.getItem('kakao_user_id');
    // null, undefined가 아닐때 실행
    if (accessToken !== 'undefined') {
      if (!!accessToken) {
        setUsers({
          isLogin: true,
          userInfomation: {
            nickName: '',
            email: '',
            photoURL: '',
            age: '',
            gender: '',
            phoneNumber: '',
            id: kakaoId,
          },
        });
      }
      // string 일 때 실행됨
    } else if (!accessToken) {
      reset();
    }
  }, [accessToken, kakaoUserInfo]);

  useEffect(() => {
    // 현재 유저와 users.json에 있는 user과 같으면
    const myUser = userDataFromJson?.filter((user: UserInfomation) => {
      return users.userInfomation.id === String(user.id);
    })[0];
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
  }, [users.isLogin, userDataFromJson]);

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
