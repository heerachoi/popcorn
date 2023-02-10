import { Outlet, useNavigate } from 'react-router-dom';
import * as S from './style';
import { auth } from '../../services/firebase';
import Logout from '../Authentication/Logout/Logout';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Wrap>
        <S.Title onClick={() => navigate('/')}>POPCORN</S.Title>
        <S.DummyBox></S.DummyBox>
        <S.BtnWrap>
          <S.CategoryBtn onClick={() => navigate('/customer')}>
            고객센터
          </S.CategoryBtn>
          <S.CategoryBtn onClick={() => navigate('/signup')}>
            회원가입
          </S.CategoryBtn>
          {!auth?.currentUser?.uid ? (
            <S.CategoryBtn onClick={() => navigate('/login')}>
              로그인
            </S.CategoryBtn>
          ) : (
            <Logout />
          )}
          <S.MapBtn onClick={() => navigate('/map')}>지도</S.MapBtn>
          {!auth?.currentUser?.uid ? null : (
            <S.CategoryBtn onClick={() => navigate('/my')}>
              마이페이지
            </S.CategoryBtn>
          )}
        </S.BtnWrap>
      </S.Wrap>
      <Outlet />
    </>
  );
};

export default Header;
