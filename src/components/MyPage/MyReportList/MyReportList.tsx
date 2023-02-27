import React from 'react';
import * as S from './style';
import { auth } from '../../../services/firebase';
import {  useQuery } from 'react-query';
import { getInfoErrReport, getNewStoreReport } from '../../../services/api';

const MyReportList = () => {
  const { isLoading, isError, data:newStores, error } = useQuery(
    'newStores',
    getNewStoreReport,
  );
  const { data:errReport } = useQuery(
    'infoErrModifiContents',
    getInfoErrReport,
  );
  console.log('newStores', newStores);
  console.log('errReport', errReport);
  
  if (isLoading) {
    console.log('로딩중');
    return <p>Loading...</p>;
  }
  if (isError) {
    console.log('오류내용', error);
    return <p>Error!!!</p>;
  }

  const uid = auth.currentUser?.uid;

  return (
    <S.ReportWrap>
      <S.ReportContainer>
        {errReport
          .filter((item:any) => item.userId.uid === uid)
          .map((li:any) => {
            return (
              <S.ListBox key={li.id}>
                <S.ListContent>
                  <S.ReportTitleText>{li.title}</S.ReportTitleText>
                  <S.ReportDateText>{li.reportedDate}</S.ReportDateText>
                </S.ListContent>
                <S.ListContent>
                  <S.ReportCategory>{li.category}</S.ReportCategory>
                  {li.status === false ? (
                    <S.ReportStatusText>진행중</S.ReportStatusText>
                  ) : (
                    <S.ReportStatusText style={{ color: 'black' }}>완료</S.ReportStatusText>
                  )}
                </S.ListContent>
              </S.ListBox>
            );
          })}
        {newStores
          .filter((item:any) => item.userId.uid === uid)
          .map((li:any) => {
            return (
              <S.ListBox key={li.id}>
                <S.ListContent>
                  <S.ReportTitleText>{li.title}</S.ReportTitleText>
                  <S.ReportDateText>{li.reportedDate}</S.ReportDateText>
                </S.ListContent>
                <S.ListContent>
                  <S.ReportCategory>{li.category}</S.ReportCategory>
                  {li.status === false ? (
                    <S.ReportStatusText>진행중</S.ReportStatusText>
                  ) : (
                    <S.ReportStatusText style={{ color: 'black' }}>
                      완료
                    </S.ReportStatusText>
                  )}
                </S.ListContent>
              </S.ListBox>
            );
          })}
      </S.ReportContainer>
    </S.ReportWrap>
  );
};

export default MyReportList;
