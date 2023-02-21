import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isActiveMenu } from '../../atoms';
import Faq from '../CustomerCenter/FAQ/Faq';
import Vector from '../../assets/Logo/Vector.png';
import popcornLogo from '../../assets/Logo/popcorn_logo.png';
import DefaultLogo from '../../assets/Logo/State=Default.png';

const Footer = () => {
  const navigate = useNavigate();
  // 탭 메뉴 제목을 클릭하면 해당 탭의 index값 저장
  // 초기 화면에 0번째 탭이 나오도록 초기값 설정
  const setActiveIndex = useSetRecoilState(isActiveMenu);

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

  // onClick 시 해당 탭의 index값을 set
  const tabClickHandler = (i: any) => {
    setActiveIndex(i);
    navigate('/customer');
  };

  return (
    <FooterWrap>
      <FooterTitleWrap>
        <FooterTitle
          // src={require('../../assets/Logo/State=Default.png')}
          // alt="타이틀"
          onClick={() => navigate('/')}
        ></FooterTitle>
      </FooterTitleWrap>
      <FooterMenuWrap>
        {menuArr.map((item: any, i: any) => {
          return (
            <TextBackground>
              <FooterMenu
                key={item.id}
                id={item.id}
                onClick={() => tabClickHandler(i)}
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
`;
const FooterTitleWrap = styled.div`
  padding: 90px 30px;
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
