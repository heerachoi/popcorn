import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { auth } from '../../../services/firebase';
import Logout from '../../Authentication/Logout/Logout';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';
import { BsBellFill } from 'react-icons/bs';
import useModal from '../../../hooks/useModal';
import Modal from '../../SearchPage/SearchModal/SearchModal';
import AlertModal from './Notification/NotificationModal';
import styled from 'styled-components';

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
          {user.isLogin && (
            <>
              <BtnBox>
                <TextBackground style={{ width: 33 }} />
                <S.CategoryBtn onClick={notification}>
                  <BsBellFill className="button-default" onClick={toggle} />
                  <AlertModal isShowing={isShowing} hide={toggle} />
                </S.CategoryBtn>
              </BtnBox>
            </>
          )}
          <BtnBox>
            <TextBackground style={{ width: 140 }} />
            <S.CategoryBtn onClick={() => navigate('/report')}>
              팝업스토어 제보
            </S.CategoryBtn>
          </BtnBox>
          {!user.isLogin && (
            <>
              <BtnBox>
                <TextBackground />
                <S.CategoryBtn onClick={() => navigate('/signup')}>
                  회원가입
                </S.CategoryBtn>
              </BtnBox>
            </>
          )}
          <BtnBox>
            {user.isLogin ? (
              <>
                <TextBackground />
                <Logout />
              </>
            ) : (
              <>
                <TextBackground style={{ width: 65 }} />
                <S.CategoryBtn onClick={() => navigate('/login')}>
                  로그인
                </S.CategoryBtn>
              </>
            )}
          </BtnBox>
          <BtnBox>
            <TextBackground style={{ width: 48 }} />
            <S.MapBtn onClick={() => navigate('/map')}>지도</S.MapBtn>
          </BtnBox>
          {user.isLogin && (
            <>
              <BtnBox>
                <TextBackground style={{ width: 100 }} />
                <S.CategoryBtn
                  onClick={() => {
                    user.userInfomation.email === 'master@gmail.com'
                      ? navigate('/master')
                      : navigate('/my');
                  }}
                >
                  마이페이지
                </S.CategoryBtn>
              </BtnBox>
            </>
          )}
        </S.BtnWrap>
      </S.Wrap>
    </>
  );
};

export default Header;

export const BtnBox = styled.div``;

export const TextBackground = styled.div`
  width: 80px;
  height: 20px;
  background-color: #ffeb62;
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
`;
