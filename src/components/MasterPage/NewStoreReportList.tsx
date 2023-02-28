import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getNewStoreReport } from '../../services/api';
import * as S from './style';

const NewStoreReportList: any = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery(
    'infoErrModifiContents',
    getNewStoreReport,
  );

  if (isLoading) {
    console.log('로딩중!!!!');
    return <p>Loading...</p>;
  }
  if (isError) {
    console.log('error', error);
    return <p>Error!!!!</p>;
  }

  const statusTrue: any = [];
  const statusFalse: any = [];
  data.map((item: any) => {
    if (item.status === true) {
      statusTrue.push(item);
    } else {
      statusFalse.push(item);
    }
  });

  const resentStatusTrue = statusTrue.sort(
    (a: any, b: any) =>
      Number(
        b.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, ''),
      ) -
      Number(a.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')),
  );

  const resentStatusFalse = statusFalse.sort(
    (a: any, b: any) =>
      Number(
        b.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, ''),
      ) -
      Number(a.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')),
  );

  const statusSort = resentStatusFalse.concat(resentStatusTrue);

  return (
    <S.ContentWrap>
      <S.ListContainer>
        {statusSort?.map((li: any) => {
          return (
            <S.ListBox
              key={li.id}
              onClick={() => navigate(`/masterDetail/${li.id}`)}
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

export default NewStoreReportList;
