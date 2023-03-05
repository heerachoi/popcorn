import { useNavigate } from 'react-router-dom';
import * as S from './style';
import Logout from '../../Authentication/Logout/Logout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { globalBtn, modalPage, modalStatus, userInfo } from '../../../atoms';
import useModal from '../../../hooks/useModal';
import AlertModal from './Notification/NotificationModal';
import styled from 'styled-components';
import CustomModal from '../../../shared/CustomModal';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { AiFillBell } from 'react-icons/ai';
import { BsMapFill } from 'react-icons/bs';

const Header = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userInfo);
  const [globalButton, setGlobalButton] = useRecoilState(globalBtn);
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const [pageChange, setPageChange] = useRecoilState(modalPage);
  // 토글
  const [isToggled, setIsToggled] = useState(false);
  // console.log('isToggled', isToggled);
  const toggleMenu = () => {
    setIsToggled((isToggled) => !isToggled); // on,off 개념 boolean
  };
  // console.log(auth?.currentUser?.email); //header에서만 null이 뜬다. 헤더가 먼저 렌더링 되서 console에 null이 떳다가 렌더링이 다되면 null이 안뜸.
  // 해결 : Router에서 auth.onAuthStateChanged 메서드를 사용해서 파이어베이스에서 DB정보를 참조해서 변경 사항 가져옴
  const { isShowing, toggle } = useModal();

  // input 창에 value 가 있으면 alert로 이동을 막아주는 함수
  const globalBtnClickHandler = () => {
    navigate(pageChange); // 페이지 이동
    setGlobalButton(false); // input값 있을 때 이동 막는 함수 초기화
    setIsModal({ ...isModal, globalBtn: !isModal.globalBtn }); // 모달 닫기
  };

  const reportClickHandler = () => {
    setIsModal({ ...isModal, master: !isModal.master }); // 모달 닫기
    navigate('/login'); // 로그인 페이지로 이동
  };

  // 모달 상태 변경

  // 팝업스토어 제보 모달
  const masterModalStatusChangeHandler = () => {
    setIsModal({ ...isModal, master: !isModal.master }); // 모달 열기
  };

  const globalBtnModalStatusChangeHandler = (page: string) => {
    if (globalButton) {
      setPageChange(page); // 값을 각 페이지 주소로 설정
      return setIsModal({ ...isModal, globalBtn: !isModal.globalBtn }); // 모달 열기
    }
    navigate(page); // input에 값이 없으면 바로 이동
  };

  // globalButton이 true일 때 모달창이 뜬다.
  // 취소를 누르면 홈페이지에 그대로 있고, 확인을 해당 페이지로 이동한다.
  return (
    <>
      <S.Wrap>
        {isModal.globalBtn && (
          <CustomModal
            title="이동하시겠습니까?"
            text="작성했던 내용이 사라집니다. 정말로 이동하시겠습니까?"
            cancel="취소"
            submit="이동"
            fnc={globalBtnClickHandler}
          />
        )}
        {isModal.master && (
          <CustomModal
            title="로그인하시겠습니까?"
            text="로그인하셔야 이용 가능한 서비스입니다."
            cancel="취소"
            submit="로그인"
            fnc={reportClickHandler}
          />
        )}
        <HoverBox>
          <S.Title
            className="title"
            src={require('../../../assets/Logo/popcorn_logo.png')}
            alt="타이틀"
            onClick={() => globalBtnModalStatusChangeHandler('/')}
          />
          <TitleImg
            className="TitleImg"
            src={require('../../../assets/Logo/State=Hovered.png')}
            alt="타이틀"
            onClick={() => globalBtnModalStatusChangeHandler('/')}
          />
        </HoverBox>
        <S.BtnWrap
          className={isToggled ? 'NavOn' : 'NavOff'}
          onClick={() => setIsToggled(false)}
        >
          {user.isLogin && (
            <MenuImageBackground>
              {isToggled ? null : <BellIcon onClick={toggle} />}
              <AlertModal isShowing={isShowing} hide={toggle} />
            </MenuImageBackground>
          )}
          <TextBackground>
            <S.CategoryBtn
              onClick={
                user.isLogin
                  ? () => globalBtnModalStatusChangeHandler('/report')
                  : () => masterModalStatusChangeHandler()
              }
            >
              팝업스토어 제보
            </S.CategoryBtn>
          </TextBackground>
          {!user.isLogin && (
            <TextBackground style={{ width: 110 }}>
              <S.CategoryBtn
                onClick={() => globalBtnModalStatusChangeHandler('/signup')}
              >
                회원가입
              </S.CategoryBtn>
            </TextBackground>
          )}
          {user.isLogin ? (
            <Logout />
          ) : (
            <TextBackground style={{ width: 100 }}>
              <S.CategoryBtn
                onClick={() => globalBtnModalStatusChangeHandler('/login')}
              >
                로그인
              </S.CategoryBtn>
            </TextBackground>
          )}
          {user.isLogin && (
            <TextBackground style={{ width: 120 }}>
              <S.CategoryBtn
                onClick={
                  user.userInfomation.email === 'master@gmail.com'
                    ? () => globalBtnModalStatusChangeHandler('/master')
                    : () => globalBtnModalStatusChangeHandler('/my')
                }
              >
                마이페이지
              </S.CategoryBtn>
            </TextBackground>
          )}
          <MenuImageBackground>
            {isToggled ? (
              <MenuText
                onClick={() => globalBtnModalStatusChangeHandler('/map')}
              >
                지도
              </MenuText>
            ) : (
              <MapIcon
                onClick={() => globalBtnModalStatusChangeHandler('/map')}
              />
            )}
          </MenuImageBackground>
        </S.BtnWrap>
        <MobileMenuContainer>
          {user.isLogin && (
            <MenuImageBackgroundMobile>
              <BellIcon onClick={toggle} />
              <AlertModal isShowing={isShowing} hide={toggle} />
            </MenuImageBackgroundMobile>
          )}
          <MenuIconContainer onClick={() => setIsToggled(!isToggled)}>
            {isToggled ? <ImCross /> : <MenuIcon />}
          </MenuIconContainer>
        </MobileMenuContainer>
      </S.Wrap>
    </>
  );
};

export default Header;

export const MenuIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const MobileMenuContainer = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 840px) {
    display: flex;
  }
`;

export const MenuIcon = styled(FaBars)`
  font-size: 20px;
  display: none;
  @media screen and (max-width: 840px) {
    display: inline;
  }
`;

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
  @media screen and (max-width: 740px) {
    width: 260px;
    &:hover .TitleImg {
      transform: none;
    }
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
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
  &:hover {
    background-color: #ffb321;
  }
  @media screen and (max-width: 840px) {
    width: 200px;
    background-color: #323232;
  }
`;

export const MenuImageBackground = styled(TextBackground)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  top: 30px;
`;

export const MenuImageBackgroundMobile = styled(MenuImageBackground)`
  background-color: #ffeb62;
`;

export const MenuText = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  width: 120px;
  color: #fff;
  padding: 0 0 0 8px;
  margin-top: -20px;
`;

export const BellIcon = styled(AiFillBell)`
  cursor: pointer;
  font-size: 20px;
  position: relative;
  right: 12px;
  top: 5px;
  border: none;
`;

export const MapIcon = styled(BsMapFill)`
  cursor: pointer;
  font-size: 20px;
  position: relative;
  right: 12px;
  top: 5px;
  border: none;
`;

// export const MenuBtn = styled(MenuIcon)`
//   background-color: transparent;
//   right: 20px;
// `;
