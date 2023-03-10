// library
import { useRecoilState } from 'recoil';
import { footerActiveMenu } from '../../atoms';
// components
import ContactUs from '../../components/CustomerCenter/Contact Us/ContactUs';
import Faq from '../../components/CustomerCenter/FAQ/Faq';
import Notice from '../../components/CustomerCenter/Notice/Notice';
// style
import * as S from './style';



const CustomerCenterPage: any = () => {
  // 탭 메뉴 제목을 클릭하면 해당 탭의 index값 저장
  // 초기 화면에 0번째 탭이 나오도록 초기값 설정
  const [footerActive, setFooterActive] = useRecoilState(footerActiveMenu);
  

  // 탭 메뉴 제목과 들어갈 내용 담은 배열
  const menuArr = [
    {
      id: 0,
      tabTitle: '공지사항 및 이벤트',
      tabContent: <Notice />,
    },
    {
      id: 1,
      tabTitle: 'FAQ',
      tabContent: <Faq />,
    },
    {
      id: 2,
      tabTitle: 'Contact Us',
      tabContent: <ContactUs />,
    },
  ];

  // onClick 시 해당 탭의 index값을 set
  const tabClickHandler = (i: number) => {
    setFooterActive(i);
  };

  return (
    <S.CustomerCenterWrap>
      <S.CustomerCenterTitle>
        <S.TitleBackground />
        <S.TitleText>고객센터</S.TitleText>
      </S.CustomerCenterTitle>
      <S.CustomerCenterContainer>
        <S.TabMenu>
          {/* map으로 title을 뽑아옴 */}
          {menuArr.map((item, i: number) => {
            return (
              <S.TabTitleBox key={item.id}>
                <S.MenuTitleTabBtn
                  className={footerActive === i ? 'active' : ''}
                  onClick={() => tabClickHandler(i)}
                >
                  {item.tabTitle}
                </S.MenuTitleTabBtn>
              </S.TabTitleBox>
            );
          })}
        </S.TabMenu>
        <S.ContentBox>
          {/* activeIndex에 해당하는 내용 보여줌 */}
          {menuArr[footerActive].tabContent}
        </S.ContentBox>
      </S.CustomerCenterContainer>
    </S.CustomerCenterWrap>
  );
};

export default CustomerCenterPage;
