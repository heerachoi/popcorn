import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getNewStoreReport } from '../../services/api';
import * as S from './style';

const NewStoreReportDetail = () => {
  const navigate = useNavigate();
  const paramId = useParams();
  const { isLoading, isError, data, error } = useQuery(
    'newStores',
    getNewStoreReport,
  );

  if (isLoading) {
    console.log('로딩중');
    return <p>Loading...</p>;
  }
  if (isError) {
    console.log('오류내용', error);
    return <p>Error!!!</p>;
  }

  // console.log('paramId', paramId);

  // useEffect(() => {
  //   getNewStoreReport();
  // }, []);

  const selectedDetail = data?.filter((item: any) => item.id === paramId.id);
  // console.log('selectedDetail', selectedDetail);

  const currentState = selectedDetail[0].status;
  // console.log('currentState', currentState);

  const checkHandler = () => {
    alert('확인');
    navigate('/master');
    return axios.patch(`http://localhost:3002/newStores/${paramId.id}`, {
      status: !currentState,
    });
  };

  return (
    <S.ReportListWrap>
      <S.ReportListContainer>
        <S.ReportTitleBox>
          <h2>신규 팝업스토어 신청 제보</h2>
        </S.ReportTitleBox>

        <S.ReportContentListWrap>
          {selectedDetail?.map((li: any) => {
            return (
              <S.GridBox key={li.id}>
                <S.Grid>
                  <S.ReportTitle>제목</S.ReportTitle>
                  <S.ReportContentText>{li.title}</S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>제보자</S.ReportTitle>
                  <S.ReportContentText>
                    {li.userId.displayName}
                  </S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>제보 날짜</S.ReportTitle>
                  <S.ReportContentText>{li.reportedDate}</S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>팝업스토어 이름</S.ReportTitle>
                  <S.ReportContentText>{li.storeName}</S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>주소</S.ReportTitle>
                  <S.ReportContentText>{li.storeAdress}</S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>시작날짜</S.ReportTitle>
                  <S.ReportContentText>{li.startDate}</S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>종료날짜</S.ReportTitle>
                  <S.ReportContentText>{li.endDate}</S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>제보내용</S.ReportTitle>
                  <S.ReportContentText>{li.etcContent}</S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>이미지</S.ReportTitle>
                  <S.ReportContentText>
                    <img src={li.infoImg} />
                  </S.ReportContentText>
                </S.Grid>
                <S.ButtonBox>
                  <S.CheckBtn onClick={() => navigate('/master')}>
                    취소
                  </S.CheckBtn>
                  <S.CheckBtn onClick={checkHandler}>확인</S.CheckBtn>
                </S.ButtonBox>
              </S.GridBox>
            );
          })}
        </S.ReportContentListWrap>
      </S.ReportListContainer>
    </S.ReportListWrap>
  );
};

export default NewStoreReportDetail;
