import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getNewStoreReport } from '../../services/api';
import * as S from './style';

const NewStoreReportList: any = () => {
  const navigate = useNavigate();
  const { data } = useQuery('newStores', getNewStoreReport);
    console.log('data', data);


  return (
    <S.ContentWrap>
      <S.ListContainer>
        {data?.map((li: any) => {
          return (
            <S.ListBox key={li.id} onClick={() => navigate(`/masterDetail/${li.id}`)}>
              <S.ListContent>
                <S.TitleText>{li.title}</S.TitleText>
                <S.NameText>{li.userId.displayName}</S.NameText>
              </S.ListContent>
              <S.ListContent>
                <S.DateText>{li.reportedDate}</S.DateText>
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

export default NewStoreReportList;
