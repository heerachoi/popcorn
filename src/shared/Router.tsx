import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage/SignupPage';
import MyPage from '../pages/MyPage/MyPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import HomePage from '../pages/HomePage/HomePage';
import CustomerCenterPage from '../pages/CustomerCenterPage/CustomerCenterPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import LogInPage from '../pages/LogInPage/LogInPage';
import Header from '../components/Header/Header';
import MapPage from '../pages/MapPage/MapPage';

const Router = () => {
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
