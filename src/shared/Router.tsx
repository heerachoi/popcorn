import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import MyPage from '../pages/MyPage/MyPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import HomePage from '../pages/HomePage/HomePage';
import CustomerCenterPage from '../pages/CustomerCenterPage/CustomerCenterPage';
import SearchPage from '../pages/SearchPage/SearchPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/customer" element={<CustomerCenterPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
