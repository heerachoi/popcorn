import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getInfoErrReport, getNewStoreReport } from '../../services/api';
import * as S from './style';

const ErrReportList: any = () => {
  const navigate = useNavigate();
  const { data } = useQuery('infoErrModifiContents', getInfoErrReport);
  //   console.log('data', data);

  return (
    <S.ContentWrap>
      <S.ListContainer>
        {data?.map((li: any) => {
          return (
            <S.ListBox
              key={li.id}
              onClick={() => navigate(`/masterDetail2/${li.id}`)}
            >
              <S.ListContent>
                <S.TitleText>{li.title}</S.TitleText>
                <S.DateText>{li.reportedDate}</S.DateText>
              </S.ListContent>
              <S.ListContent>
                <S.NameText>{li.userId.displayName}</S.NameText>
                {li.status === false ? (
                  <S.StatusText>진행중</S.StatusText>
                ) : (
                  <S.StatusText style={{ color: 'black' }}>완료</S.StatusText>
                )}
              </S.ListContent>
            </S.ListBox>
          );
        })}
      </S.ListContainer>
    </S.ContentWrap>
  );
};

export default ErrReportList;