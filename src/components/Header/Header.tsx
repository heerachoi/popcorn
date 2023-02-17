import { Outlet, useNavigate } from 'react-router-dom';
import * as S from './style';
import { auth } from '../../services/firebase';
import Logout from '../Authentication/Logout/Logout';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../atoms';
import { BsBellFill } from 'react-icons/bs';
import useModal from '../../hooks/useModal';
import Modal from '../SearchPage/SearchModal/SearchModal';
import AlertModal from './Notification/NotificationModal';

const Header = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userInfo);

  console.log(auth?.currentUser?.email); //header에서만 null이 뜬다. 헤더가 먼저 렌더링 되서 console에 null이 떳다가 렌더링이 다되면 null이 안뜸.
  // 해결 : Router에서 auth.onAuthStateChanged 메서드를 사용해서 파이어베이스에서 DB정보를 참조해서 변경 사항 가져옴

  const notification = () => {
    console.log('alert');
  };

  const { isShowing, toggle } = useModal();

  return (
    <>
      <S.Wrap>
        <S.Title onClick={() => navigate('/')}>POPCORN</S.Title>
        <S.BtnWrap>
          <S.CategoryBtn onClick={notification}>
            <BsBellFill className="button-default" onClick={toggle} />
            <AlertModal isShowing={isShowing} hide={toggle} />
          </S.CategoryBtn>
          <S.CategoryBtn onClick={() => navigate('/report')}>
            팝업스토어 제보
          </S.CategoryBtn>
          <S.CategoryBtn onClick={() => navigate('/signup')}>
            회원가입
          </S.CategoryBtn>
          {user.isLogin ? (
            <Logout />
          ) : (
            <S.CategoryBtn onClick={() => navigate('/login')}>
              로그인
            </S.CategoryBtn>
          )}
          <S.MapBtn onClick={() => navigate('/map')}>지도</S.MapBtn>
          {user.isLogin && (
            <S.CategoryBtn
              onClick={() => {
                user.userInfomation.email === 'master@gmail.com'
                  ? navigate('/master')
                  : navigate('/my');
              }}
            >
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
