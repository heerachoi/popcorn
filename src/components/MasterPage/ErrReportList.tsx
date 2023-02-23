import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getInfoErrReport, getNewStoreReport } from '../../services/api';
import { Store } from '../../types/data/storeInterface';
import * as S from './style';

const ErrReportList: any = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery(
    'infoErrModifiContents',
    getInfoErrReport,
  );
  // const { data } = useQuery('infoErrModifiContents', getInfoErrReport);
  // console.log('data', data);

  if (isLoading) {
    console.log('로딩중!!!!');
    return <p>Loading...</p>;
  }
  if (isError) {
    console.log('errMessage', error);
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
  
  
  // console.log('statusTrue', statusTrue);
  // console.log('statusFalse', statusFalse);

  const resentStatusTrue = statusTrue.sort(
    (a:any, b:any) =>
      Number(b.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')) -
      Number(a.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')),
  );

  const resentStatusFalse = statusFalse.sort(
    (a:any, b:any) =>
      Number(b.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')) -
      Number(a.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')),
  );
  // var myArray = myArray.concat(myArray2);
  const statusSort = resentStatusFalse.concat(resentStatusTrue)
  // console.log('statusSort');
  

  // console.log('resentStatusFalse', resentStatusFalse);
  // console.log('statusTrueDate', Number(date.join('').replace(/\s/g, '')));
  
  

  return (
    <S.ContentWrap>
      <S.ListContainer>
        {statusSort?.map((li: any) => {
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
