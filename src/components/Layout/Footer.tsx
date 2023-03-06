import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
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
import * as S from './style';

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
    <S.FooterWrap>
      {isModal.globalBtn && (
        <CustomModal
          title="이동하시겠습니까?"
          text="작성했던 내용이 사라집니다. 정말로 이동하시겠습니까?"
          cancel="취소"
          submit="이동"
          fnc={globalBtnClickHandler}
        />
      )}
      <S.FooterTitleWrap>
        <S.FooterTitle
          onClick={() => globalBtnModalStatusChangeHandler('/', 0)}
        ></S.FooterTitle>
      </S.FooterTitleWrap>
      <S.FooterMenuWrap>
        {menuArr.map((item: any, i: any) => {
          return (
            <S.TextBackground key={item.id}>
              <S.FooterMenu
                id={item.id}
                onClick={() =>
                  globalBtnModalStatusChangeHandler('/customer', i)
                }
              >
                {item.tabTitle}
              </S.FooterMenu>
            </S.TextBackground>
          );
        })}
      </S.FooterMenuWrap>
    </S.FooterWrap>
  );
};

export default Footer;
