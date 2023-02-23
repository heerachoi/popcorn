import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { isActiveMenu } from '../../atoms';
import InfoError from '../../components/StoreReport/InfoError';
import NewStoreReport from '../../components/StoreReport/NewStoreReport';
import * as S from './style';

const ReportPage = () => {
  const [activeIndex, setActiveIndex] = useRecoilState(isActiveMenu);

  const tabMenu = [
    {
      id: 0,
      title: '신규 스토어 제보',
      content: <NewStoreReport />,
    },
    {
      id: 1,
      title: '정보 오류&수정 제보',
      content: <InfoError />,
    },
  ];

  const tabSelectHandler = (i: any) => {
    setActiveIndex(i);
  };

  return (
    <S.ReportWrap>
      <S.ReportContainer>
        <S.TabTitle>
          {tabMenu.map((item, i) => {
            return (
              <S.TitleBox key={item.id}>
                <S.TitleBtn
                  className={activeIndex === i ? 'active' : ''}
                  onClick={() => tabSelectHandler(i)}
                >
                  {item.title}
                </S.TitleBtn>
              </S.TitleBox>
            );
          })}
        </S.TabTitle>
        <S.Content>{tabMenu[activeIndex].content}</S.Content>
      </S.ReportContainer>
    </S.ReportWrap>
  );
};

export default ReportPage;
