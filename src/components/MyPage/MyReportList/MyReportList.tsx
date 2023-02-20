import React from 'react';
import * as S from './style'
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
                  <p>{li.title}</p>
                  <p>{li.reportedDate}</p>
                </S.ListContent>
                <div>
                  <p>{li.category}</p>
                  <p>{li.status}</p>
                </div>
              </S.ListBox>
            );
          })}
      </S.ReportContainer>
      {/* <div style={{backgroundColor:'skyblue'}}>
        {newStoreReport
          .filter((item) => item.userId.uid === uid)
          .map((li) => {
            return (
              <div>
                <div>
                  <p>{li.title}</p>
                  <p>{li.reportedDate}</p>
                </div>
                <div>
                  <p>{li.category}</p>
                  <p>{li.status}</p>
                </div>
              </div>
            );
          })}
      </div> */}
    </S.ReportWrap>
  );
};

export default MyReportList;
