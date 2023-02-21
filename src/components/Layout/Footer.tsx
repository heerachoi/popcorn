import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isActiveMenu } from '../../atoms';
import Faq from '../CustomerCenter/FAQ/Faq';

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
        <FooterTitle>POPCORN</FooterTitle>
      </FooterTitleWrap>
      <FooterMenuWrap>
        {menuArr.map((item: any, i: any) => {
          return (
            <FooterMenu key={item.id} onClick={() => tabClickHandler(i)}>
              {item.tabTitle}
            </FooterMenu>
          );
        })}
      </FooterMenuWrap>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  margin-top: 50px;
  height: 300px;
  background-color: #ffeb62;
  display: flex;
  justify-content: space-around;
`;

const FooterTitleWrap = styled.div`
  padding: 40px 0;
`;
const FooterTitle = styled.span`
  font-size: 70px;
  font-weight: 600;
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
  font-size: 18px;
  font-weight: 400;
  border: none;
  background-color: transparent;
`;
