import SignUpPage from '../pages/SignUpPage/SignUpPage';
import MyPage from '../pages/MyPage/MyPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import HomePage from '../pages/HomePage/HomePage';
import CustomerCenterPage from '../pages/CustomerCenterPage/CustomerCenterPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import LogInPage from '../pages/LogInPage/LogInPage';
import Header from '../components/Header/Header';
import MapPage from '../pages/MapPage/MapPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from '../services/firebase';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { userInfo } from '../atoms';

const Router = () => {
  // usestate에서 setUser랑 똑같음
  const setUser = useSetRecoilState(userInfo);

  // 로그인 상태를 전역적으로 관리해주는 함수
  // 로그아웃이 된 상태에서만 Header가 바뀐다.
  useEffect(() => {
    // 유저정보의 상태가 변하는걸 체크해주는 함수
    // 유저가 auth.current랑 똑같음 or auth였나.. 재창님 기억안나심
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          isLogin: true,
          userInfomation: {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          },
        });
        // user가 없으니까 로그아웃 상태란 뜻
      } else {
        setUser({
          isLogin: false,
          userInfomation: {
            displayName: '',
            email: '',
            photoURL: '',
            uid: '',
          },
        });
      }
    });
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/customer" element={<CustomerCenterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/map" element={<MapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
