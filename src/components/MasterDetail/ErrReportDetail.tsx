import React from 'react'
import { useQuery } from 'react-query';
import { getInfoErrReport } from '../../services/api';
import * as S from './style';

const ErrReportDetail = () => {
  const {data} = useQuery('infoErrModifiContents',getInfoErrReport )
  console.log('data', data);
  

  return (
    <S.ReportListWrap>
    <S.ReportListContainer>
      <S.ReportTitleBox>
        <h2>정보 오류&수정 제보</h2>
      </S.ReportTitleBox>

      <S.ReportContentListWrap>
        {data?.map((li:any) => {
          return (
            <S.GridBox>
              <S.Grid>
                <S.ReportTitle>제목</S.ReportTitle>
                <S.ReportContentText>{li.title}</S.ReportContentText>
              </S.Grid>
              <S.Grid>
                <S.ReportTitle>제보자</S.ReportTitle>
                <S.ReportContentText>{li.userId.displayName}</S.ReportContentText>
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
                <S.ReportTitle>정보 오류 내용</S.ReportTitle>
                <S.ReportContentText>{li.infoErrContent}</S.ReportContentText>
              </S.Grid>   
              <S.Grid>
                <S.ReportTitle>정보 수정 내용</S.ReportTitle>
                <S.ReportContentText>{li.infoModifiContent}</S.ReportContentText>
              </S.Grid>       
              <S.Grid>
              <S.ReportTitle>이미지</S.ReportTitle>
              <S.ReportContentText>
                  <img src={li.errImg} />
              </S.ReportContentText>
              </S.Grid>
              <S.ButtonBox>
                  <S.CheckBtn>취소</S.CheckBtn>
                  <S.CheckBtn>확인</S.CheckBtn>
                </S.ButtonBox>
            </S.GridBox>
          );
        })}
      </S.ReportContentListWrap>
    </S.ReportListContainer>
  </S.ReportListWrap>
  )
}

export default ErrReportDetail