import React, { useState } from 'react';
import ErrReportDetail from '../../components/MasterDetail/ErrReportDetail';
import NewStoreReportDetail from '../../components/MasterDetail/NewStoreReportDetail';
import * as S from './style';

// 지금은 제보 목록 디테일 컴포넌트가 있지만 리스트 출력하는 컴포넌트 생성해서 바꿔야함
const MasterDetailPage: any = () => {
  const [index, setIndex] = useState(0);

  const tabMenuArr = [
    {
      id: 0,
      tabTitle: '정보 오류&수정 제보 목록',
      content: (
        <>
          <ErrReportDetail />
        </>
      ),
    },
    {
      id: 1,
      tabTitle: '신규 팝업스토어 신청 목록',
      content: (
        <>
          <NewStoreReportDetail />
        </>
      ),
    },
  ];

  const tabMenuClickHandler = (idx: any) => {
    setIndex(idx);
  };

  return (
    // <NewStoreReportDetail />
    // <ErrReportDetail />

    
    <S.MasterDetailPageWrap>
      <S.MasterDetailContainer>
        <S.TabMenu>
          {tabMenuArr.map((item: any, idx: any) => {
            return (
              <div>
                <S.MenuTitleTabBtn onClick={() => tabMenuClickHandler(idx)}>
                  {item.tabTitle}
                </S.MenuTitleTabBtn>
              </div>
            );
          })}
        </S.TabMenu>
        <S.ContentBox>{tabMenuArr[index].content}</S.ContentBox>
      </S.MasterDetailContainer>
    </S.MasterDetailPageWrap>
  );
};

export default MasterDetailPage;
