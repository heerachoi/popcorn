import * as S from './style';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import SignOut from '../Signup/SignOut';

const Header = () => {
  const navigate = useNavigate();
  const changePageHandler = (page: string) => navigate(page);

  return (
    <>
      <S.Wrap>
        <S.Title onClick={() => changePageHandler('/')}>POPCORN</S.Title>
        <S.DummyBox></S.DummyBox>
        <S.BtnWrap>
          <S.CustomerCenterBtn onClick={() => changePageHandler('/customer')}>
            고객센터
          </S.CustomerCenterBtn>
          <S.SignUpBtn onClick={() => changePageHandler('/signup')}>
            회원가입
          </S.SignUpBtn>
          {!auth?.currentUser?.uid ? (
            <S.LoginBtn onClick={() => changePageHandler('/login')}>
              로그인
            </S.LoginBtn>
          ) : (
            <SignOut />
          )}
          <S.MapBtn onClick={() => changePageHandler('/map')}>지도</S.MapBtn>
        </S.BtnWrap>
      </S.Wrap>
      <Outlet />
    </>
  );
};

export default Header;
