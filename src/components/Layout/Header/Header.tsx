import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { globalBtn, modalPage, modalStatus, userInfo } from '../../../atoms';
// component
import CustomModal from '../../../shared/CustomModal';
import Logout from '../../Authentication/Logout/Logout';
// style
import * as S from './style';
import { ImCross } from 'react-icons/im';
import Title from '../../../assets/Logo/popcorn_logo.svg';
import HoverImg from '../../../assets/Logo/HeaderHovered.svg';
import mapGreen from '../../../assets/Img/mapPin=green.svg';
import mapHover from '../../../assets/Img/mapPin=orange.svg';

const Header = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userInfo);
  const [globalButton, setGlobalButton] = useRecoilState(globalBtn);
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const [pageChange, setPageChange] = useRecoilState(modalPage);
  // 토글
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsToggled((isToggled) => !isToggled); // on,off 개념 boolean
  };
  //header에서만 null이 뜬다. 헤더가 먼저 렌더링 되서 console에 null이 떳다가 렌더링이 다되면 null이 안뜸.
  // 해결 : Router에서 auth.onAuthStateChanged 메서드를 사용해서 파이어베이스에서 DB정보를 참조해서 변경 사항 가져옴

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
            onClick={globalBtnClickHandler}
          />
        )}
        {isModal.master && (
          <CustomModal
            title="로그인하시겠습니까?"
            text="로그인하셔야 이용 가능한 서비스입니다."
            cancel="취소"
            submit="로그인"
            onClick={reportClickHandler}
          />
        )}
        <S.HoverBox>
          <S.Title
            className="title"
            src={Title}
            alt="타이틀"
            onClick={() => globalBtnModalStatusChangeHandler('/')}
          />
          <S.TitleImg
            className="TitleImg"
            src={HoverImg}
            alt="타이틀"
            onClick={() => globalBtnModalStatusChangeHandler('/')}
          />
        </S.HoverBox>
        <S.BtnWrap
          className={isToggled ? 'NavOn' : 'NavOff'}
          onClick={() => setIsToggled(false)}
        >
          <S.TextBackground style={{ width: 140 }}>
            <S.CategoryBtn
              onClick={
                user.isLogin
                  ? () => globalBtnModalStatusChangeHandler('/report')
                  : () => masterModalStatusChangeHandler()
              }
            >
              팝업스토어 제보
            </S.CategoryBtn>
          </S.TextBackground>
          {!user.isLogin && (
            <S.TextBackground style={{ width: 88 }}>
              <S.CategoryBtn
                onClick={() => globalBtnModalStatusChangeHandler('/signup')}
              >
                회원가입
              </S.CategoryBtn>
            </S.TextBackground>
          )}
          {user.isLogin ? (
            <Logout />
          ) : (
            <S.TextBackground style={{ width: 72 }}>
              <S.CategoryBtn
                onClick={() => globalBtnModalStatusChangeHandler('/login')}
              >
                로그인
              </S.CategoryBtn>
            </S.TextBackground>
          )}
          {user.isLogin && (
            <S.TextBackground style={{ width: 120 }}>
              <S.CategoryBtn
                onClick={
                  user.userInfomation.email === 'master@gmail.com'
                    ? () => globalBtnModalStatusChangeHandler('/master')
                    : () => globalBtnModalStatusChangeHandler('/my')
                }
              >
                마이페이지
              </S.CategoryBtn>
            </S.TextBackground>
          )}
          <S.mapDiv>
            {isToggled ? (
              <S.MenuText
                onClick={() => globalBtnModalStatusChangeHandler('/map')}
              >
                지도
              </S.MenuText>
            ) : (
              <S.mapPinImg
                onClick={() => globalBtnModalStatusChangeHandler('/map')}
              />
            )}
          </S.mapDiv>
        </S.BtnWrap>
        <S.MobileMenuContainer>
          <S.MenuIconContainer onClick={() => setIsToggled(!isToggled)}>
            {isToggled ? <ImCross /> : <S.MenuIcon />}
          </S.MenuIconContainer>
        </S.MobileMenuContainer>
      </S.Wrap>
    </>
  );
};

export default Header;
