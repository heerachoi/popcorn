import React from 'react';
import * as S from './style';
import newStoreData from '../../../data/newStoreRequest.json';
import errData from '../../../data/errorRequest.json';
import { auth } from '../../../services/firebase';

// 신규 팝업스토어 신청 제보 데이터와 정보 오류&수정 제보 데이터 둘 다 불러오고
// 제보 데이터에 있는 userId와 현재 userId가 같은 데이터를 걸러줌

const MyReportList = () => {
  const errReport = errData.infoErrModifiContents;
  const newStoreReport = newStoreData.newStores;
  const uid = auth.currentUser?.uid;
  // console.log('errReport', errReport);
  // console.log('newStoreReport', newStoreReport);
  // console.log('uid', uid);

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
                  {/* li.status === 0 ? 진행중 : li.statue !== 0 ? 완료 : 거절 */}
                  {li.status === 0 ? (
                    <S.ReportStatusText>진행중</S.ReportStatusText>
                  ) : li.status === 1 ? (
                    <S.ReportStatusText style={{ color: 'black' }}>
                      완료
                    </S.ReportStatusText>
                  ) : (
                    <S.ReportCategory style={{ color: 'red' }}>{li.excuse}</S.ReportCategory>
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
