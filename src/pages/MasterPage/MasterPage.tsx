import React, { useState } from 'react';
import NewStoreReportList from '../../components/MasterPage/NewStoreReportList';
import ReportList from '../../components/MasterPage/ReportList';
import * as S from './style';

const MasterPage: any = () => {
  const [index, setIndex] = useState(0);

  const tabMenuArr = [
    {
      id: 0,
      tabTitle: '정보 오류&수정 제보 목록',
      content: <>
      <ReportList />
      </>,
    },
    {
      id: 1,
      tabTitle: '신규 팝업스토어 신청 목록',
      content: <>
      <NewStoreReportList />
      </>,
    },
  ];

  const tabMenuClickHandler = (idx: any) => {
    setIndex(idx);
  };
  return (
    <>      
      <S.MasterPageWrap>
        <S.ReportListContainer>
          <S.TabMenu>
            {tabMenuArr.map((item: any, idx: any) => {
              return (
                <S.MenuTitleBox>
                  <S.MenuTitleTabBtn onClick={() => tabMenuClickHandler(idx)}>
                    {item.tabTitle}
                  </S.MenuTitleTabBtn>
                </S.MenuTitleBox>
              );
            })}
          </S.TabMenu>
          <S.ContentBox>{tabMenuArr[index].content}</S.ContentBox>
        </S.ReportListContainer>
      </S.MasterPageWrap>
      <S.NewPostWriteBtnBox>
        <S.WriteBtn>새 게시물 쓰기</S.WriteBtn>
      </S.NewPostWriteBtnBox>
    </>
  );
};

export default MasterPage;

{
  /* <S.MasterDetailContainer>
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
      </S.MasterDetailContainer> */
}
