import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { auth } from '../../../services/firebase';
import Logout from '../../Authentication/Logout/Logout';
import { useRecoilValue } from 'recoil';
import { globalBtn, userInfo } from '../../../atoms';
import { BsBellFill } from 'react-icons/bs';
import useModal from '../../../hooks/useModal';
import Modal from '../../SearchPage/SearchModal/SearchModal';
import AlertModal from './Notification/NotificationModal';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userInfo);
  const globalButton = useRecoilValue(globalBtn);

  console.log(auth?.currentUser?.email); //header에서만 null이 뜬다. 헤더가 먼저 렌더링 되서 console에 null이 떳다가 렌더링이 다되면 null이 안뜸.
  // 해결 : Router에서 auth.onAuthStateChanged 메서드를 사용해서 파이어베이스에서 DB정보를 참조해서 변경 사항 가져옴

  const { isShowing, toggle } = useModal();


  const GlobalBtnChangehandler = (page: string) => {
    if (globalButton) return alert('멈춰!');
    navigate(page);
  };

  const reportClickHandler = () => {
    if(user.isLogin) {
      navigate('/report')
    } else {
      alert('로그인 후 이용 가능합니다.')
    }
  }

  return (
    <>
      <S.Wrap>
        <HoverBox>
          <S.Title
            className="title"
            src={require('../../../assets/Logo/popcorn_logo.png')}
            alt="타이틀"
            onClick={() => GlobalBtnChangehandler('/')}
          />
          <TitleImg
            className="TitleImg"
            src={require('../../../assets/Logo/State=Hovered.png')}
            alt="타이틀"
            onClick={() => GlobalBtnChangehandler('/')}
          />
        </HoverBox>
        <S.BtnWrap>
          {user.isLogin && (
            <MenuImageBackground>
              <MenuImage
                src={require('../../../assets/Logo/Bell.png')}
                alt="타이틀"
                onClick={toggle}
              />
              <AlertModal isShowing={isShowing} hide={toggle} />
            </MenuImageBackground>
          )}
          <TextBackground>
            <S.CategoryBtn onClick={() => {GlobalBtnChangehandler('/report')}}>
            <S.CategoryBtn onClick={reportClickHandler}>
              팝업스토어 제보
            </S.CategoryBtn>
          </TextBackground>
          {!user.isLogin && (
            <TextBackground style={{ width: 110 }}>
              <S.CategoryBtn onClick={() => GlobalBtnChangehandler('/signup')}>
                회원가입
              </S.CategoryBtn>
            </TextBackground>
          )}
          {user.isLogin ? (
            <Logout />
          ) : (
            <TextBackground style={{ width: 100 }}>
              <S.CategoryBtn onClick={() => GlobalBtnChangehandler('/login')}>
                로그인
              </S.CategoryBtn>
            </TextBackground>
          )}
          {user.isLogin && (
            <TextBackground style={{ width: 120 }}>
              <S.CategoryBtn
                onClick={() => {
                  user.userInfomation.email === 'master@gmail.com'
                    ? GlobalBtnChangehandler('/master')
                    : GlobalBtnChangehandler('/my');
                }}
              >
                마이페이지
              </S.CategoryBtn>
            </TextBackground>
          )}
          <MenuImageBackground>
            <MenuImage
              src={require('../../../assets/Logo/Spot.png')}
              alt="타이틀"
              onClick={() => GlobalBtnChangehandler('/map')}
            />
          </MenuImageBackground>
        </S.BtnWrap>
      </S.Wrap>
    </>
  );
};

export default Header;
const HoverBox = styled.div`
  width: 100px;
  position: relative;
  transition: opacity 0.2s linear;
  transition: transform 0.3s ease-out;
  &:hover .TitleImg {
    opacity: 1;
    transform: scale(1.2);
  }
  &:hover .title {
    opacity: 0;
  }
`;

const TitleImg = styled(S.Title)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 40px;
  opacity: 0;
`;

export const BtnBox = styled.div`
  position: relative;
`;

export const TextBackground = styled.div`
  cursor: pointer;
  width: 150px;
  height: 20px;
  background-color: #ffeb62;
  /* position: absolute; */
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
  &:hover {
    background-color: #ffb321;
  }
`;

export const MenuImageBackground = styled(TextBackground)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  top: 30px;
`;

export const MenuImage = styled.img`
  cursor: pointer;
  font-size: 20px;
  position: relative;
  /* left: 8px; */
  right: 12px;
  top: 5px;
  border: none;
`;

export const MenuBtn = styled(MenuImage)`
  background-color: transparent;
  right: 20px;
`;
