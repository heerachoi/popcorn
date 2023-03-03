import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import {
  footerActiveMenu,
  globalBtn,
  modalPage,
  modalStatus,
} from '../../atoms';
import Faq from '../CustomerCenter/FAQ/Faq';
import Vector from '../../assets/Logo/Vector.png';
import popcornLogo from '../../assets/Logo/popcorn_logo.svg';
import DefaultLogo from '../../assets/Logo/State=Default.svg';
import CustomModal from '../../shared/CustomModal';

const Footer = () => {
  const navigate = useNavigate();
  // 탭 메뉴 제목을 클릭하면 해당 탭의 index값 저장
  // 초기 화면에 0번째 탭이 나오도록 초기값 설정
  const setFooterActiveMenu = useSetRecoilState(footerActiveMenu);
  const [globalButton, setGlobalButton] = useRecoilState(globalBtn);
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const [pageChange, setPageChange] = useRecoilState(modalPage);

  // 탭 메뉴 제목과 들어갈 내용 담은 배열
  const menuArr = [
    {
      id: 0,
      tabTitle: '공지사항 및 이벤트',
      tabContent: <div>공지사항 내용</div>,
    },
    {
      id: 1,
      tabTitle: 'FAQ',
      tabContent: <Faq />,
    },
    {
      id: 2,
      tabTitle: 'Contact Us',
      tabContent: <div>Contact Us 내용</div>,
    },
  ];

  // input 창에 value 가 있으면 alert로 이동을 막아주는 함수
  const globalBtnClickHandler = () => {
    navigate(pageChange);
    setGlobalButton(false);
    setIsModal({ ...isModal, globalBtn: !isModal.globalBtn });
  };

  // 모달 상태 변경
  // onClick 시 해당 탭의 index값을 set
  const globalBtnModalStatusChangeHandler = (page: string, i: number) => {
    if (globalButton) {
      setFooterActiveMenu(i);
      setPageChange(page);
      return setIsModal({ ...isModal, globalBtn: !isModal.globalBtn });
    }
    setFooterActiveMenu(i);
    navigate(page);
  };

  return (
    <FooterWrap>
      {isModal.globalBtn && (
        <CustomModal
          title="이동하시겠습니까?"
          text="작성했던 내용이 사라집니다. 정말로 이동하시겠습니까?"
          cancel="취소"
          submit="이동"
          fnc={globalBtnClickHandler}
        />
      )}
      <FooterTitleWrap>
        <FooterTitle
          onClick={() => globalBtnModalStatusChangeHandler('/', 0)}
        ></FooterTitle>
      </FooterTitleWrap>
      <FooterMenuWrap>
        {menuArr.map((item: any, i: any) => {
          return (
            <TextBackground key={item.id}>
              <FooterMenu
                id={item.id}
                onClick={() =>
                  globalBtnModalStatusChangeHandler('/customer', i)
                }
              >
                {item.tabTitle}
              </FooterMenu>
            </TextBackground>
          );
        })}
      </FooterMenuWrap>
    </FooterWrap>
  );
};

export default Footer;

// Styled 컴포넌트에서 배경 이미지 추가하는 방법
// 1. import 사용할 이미지를 한다.
// 2. ${} 안에 import 한 값을 넣어준다.
const FooterWrap = styled.div`
  height: 250px;
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
  background-image: url(${Vector});
  background-size: cover;
  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const FooterTitleWrap = styled.div`
  padding: 90px 30px;
  @media screen and (max-width: 540px) {
    margin-top: 45px;
    padding: 0px;
  }
`;
const FooterTitle = styled.div`
  cursor: pointer;
  width: 200px;
  height: 50px;
  background-image: url(${DefaultLogo});
  background-repeat: no-repeat;
  &:hover {
    background-image: url(${popcornLogo});
  }
`;
const FooterMenuWrap = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 0;
`;
const FooterMenu = styled.button`
  cursor: pointer;
  position: relative;
  top: -8px;
  border: none;
  background-color: transparent;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const TextBackground = styled.div`
  height: 20px;
  background-color: #ffeb62;
  /* position: absolute; */
  box-sizing: border-box;
  border-radius: 12px;
  &:hover {
    background-color: #ffb321;
  }
`;
