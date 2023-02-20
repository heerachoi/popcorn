import SignupPage from '../pages/SignupPage/SignupPage';
import MyPage from '../pages/MyPage/MyPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import HomePage from '../pages/HomePage/HomePage';
import CustomerCenterPage from '../pages/CustomerCenterPage/CustomerCenterPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import LogInPage from '../pages/LogInPage/LogInPage';
import Header from '../components/Layout/Header/Header';
import MapPage from '../pages/MapPage/MapPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from '../services/firebase';
import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userInfo } from '../atoms';
import NewStoreReportDetailPage from '../pages/MasterDetailPage/NewStoreReportDetailPage';
import MasterPage from '../pages/MasterPage/MasterPage';
import ReportPage from '../pages/ReportPage/ReportPage';
import { useQuery } from 'react-query';
import { getUser } from '../services/api';
import ErrReportDetailPage from '../pages/MasterDetailPage/ErrReportDetailPage';
import MasterNewPost from '../pages/MasterNewPostPage/MasterNewPost';
import Layout from '../components/Layout/Layout';

const Router = () => {
  const [users, setUsers] = useRecoilState(userInfo);
  const reset = useResetRecoilState(userInfo);
  const { data: userDataFromJson } = useQuery('user', getUser);

  // 로그인 상태를 전역적으로 관리해주는 함수
  // 로그아웃이 된 상태에서만 Header가 바뀐다.
  useEffect(() => {
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
          },
        });
      } else {
        reset();
      }
    });
  }, [auth]);

  useEffect(() => {
    const myUser = userDataFromJson?.filter(
      (user: any) => users.userInfomation.uid === user.id,
    )[0];

    // myUser가 빈 값이 아닐 때
    if (!!myUser) {
      setUsers({
        isLogin: true,
        userInfomation: {
          ...myUser,
        },
      });
    }
  }, [users]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/customer" element={<CustomerCenterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route
            path="/masterdetail/:id"
            element={<NewStoreReportDetailPage />}
          />
          <Route path="/masterdetail2/:id" element={<ErrReportDetailPage />} />
          <Route path="/master" element={<MasterPage />} />
          <Route path="/masterpost" element={<MasterNewPost />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
