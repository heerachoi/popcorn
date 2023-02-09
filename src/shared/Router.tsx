import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage  from "../pages/SignupPage/SignupPage";
import MyPage from "../pages/MyPage/MyPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage"; 
import CustomerCenterPage from '../pages/CustomerCenterPage/CustomerCenterPage';

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/detail" element={<DetailPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/my" element={<MyPage/>}/>
        <Route path="/customer" element={<CustomerCenterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;