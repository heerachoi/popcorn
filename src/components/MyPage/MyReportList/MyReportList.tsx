import React from 'react';
import * as S from './style';
import newStoreData from '../../../data/newStoreRequest.json';
import errData from '../../../data/errorRequest.json';
import { auth } from '../../../services/firebase';

const MyReportList = () => {
  const errReport = errData.infoErrModifiContents;
  const newStoreReport = newStoreData.newStores;
  const uid = auth.currentUser?.uid;

  return (
    <S.ReportWrap>
      <S.ReportContainer>
        {errReport
          .filter((item) => item.userId.uid === uid)
          .map((li) => {
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
        {newStoreReport
          .filter((item) => item.userId.uid === uid)
          .map((li) => {
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
