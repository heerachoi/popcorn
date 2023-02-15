import React, { useState } from 'react';
import Faq from '../../components/CustomerCenter/FAQ/Faq';
import * as S from './style';

const CustomerCenterPage: any = () => {
  // 탭 메뉴 제목을 클릭하면 해당 탭의 index값 저장
  // 초기 화면에 0번째 탭이 나오도록 초기값 설정
  const [activeIndex, setActiveIndex] = useState(0);

  // 탭 메뉴 제목과 들어갈 내용 담은 배열
  const menuArr = [
    {
      tabTitle: (
        <S.MenuTitleTabBtn onClick={() => tabClickHandler(0)}>
          공지사항 및 이벤트
        </S.MenuTitleTabBtn>
      ),
      tabContent: <div>공지사항 내용</div>,
    },
    {
      tabTitle: (
        <S.MenuTitleTabBtn onClick={() => tabClickHandler(1)}>
          FAQ
        </S.MenuTitleTabBtn>
      ),
      tabContent: (
        <div>
          <Faq />
        </div>
      ),
    },
    {
      tabTitle: (
        <S.MenuTitleTabBtn onClick={() => tabClickHandler(2)}>
          Contact Us
        </S.MenuTitleTabBtn>
      ),
      tabContent: <div>Contact Us 내용</div>,
    },
  ];

  // onClick 시 해당 탭의 index값을 set
  const tabClickHandler = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <S.CustomerCenterWrap>
      <S.CustomerCenterTitle>
        <S.TitleText>고객센터</S.TitleText>
      </S.CustomerCenterTitle>
      <S.CustomerCenterContainer>
        <S.TabMenu>
          {/* map으로 title을 뽑아옴 */}
          {menuArr.map((section: any, index: any) => {
            return section.tabTitle;
          })}
        </S.TabMenu>
        <S.ContentBox>
          {/* activeIndex에 해당하는 내용 보여줌 */}
          {menuArr[activeIndex].tabContent}
        </S.ContentBox>
      </S.CustomerCenterContainer>
    </S.CustomerCenterWrap>
  );
};

export default CustomerCenterPage;
