import SignupPage from '../pages/SignupPage/SignupPage';
import MyPage from '../pages/MyPage/MyPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import HomePage from '../pages/HomePage/HomePage';
import CustomerCenterPage from '../pages/CustomerCenterPage/CustomerCenterPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import LogInPage from '../pages/LogInPage/LogInPage';
import MapPage from '../pages/MapPage/MapPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewStoreReportDetailPage from '../pages/MasterDetailPage/NewStoreReportDetailPage';
import MasterPage from '../pages/MasterPage/MasterPage';
import ReportPage from '../pages/ReportPage/ReportPage';
import ErrReportDetailPage from '../pages/MasterDetailPage/ErrReportDetailPage';
import MasterNewPost from '../pages/MasterNewPostPage/MasterNewPost';
import Layout from '../components/Layout/Layout';

const Router = () => {
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
