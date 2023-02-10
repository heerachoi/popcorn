import { Outlet, useNavigate } from 'react-router-dom';
import * as S from './style';
import { auth } from '../../firebase';
import SignOut from '../Signup/SignOut';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Wrap>
        <S.Title onClick={() => navigate('/')}>POPCORN</S.Title>
        <S.DummyBox></S.DummyBox>
        <S.BtnWrap>
          <S.CustomerCenterBtn onClick={() => navigate('/customer')}>
            고객센터
          </S.CustomerCenterBtn>
          <S.SignUpBtn onClick={() => navigate('/signup')}>
            회원가입
          </S.SignUpBtn>
          {!auth?.currentUser?.uid ? (
            <S.LoginBtn onClick={() => navigate('/login')}>로그인</S.LoginBtn>
          ) : (
            <SignOut />
          )}
          <S.MapBtn onClick={() => navigate('/map')}>지도</S.MapBtn>
        </S.BtnWrap>
      </S.Wrap>
      <Outlet />
    </>
  );
};

export default Header;
