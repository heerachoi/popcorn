// library
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
// API
import { getInfoErrReport } from '../../services/api';
import { JSON_API } from '../../services/api';
import LoadingAnimation from '../GlobalComponents/LoadingAnimation';
// style
import * as S from './style';
// type
import { ErrReport } from '../../types/report';

const ErrReportDetail = () => {
  const navigate = useNavigate();
  const paramId = useParams();
  const { isLoading, isError, data, error } = useQuery(
    'infoErrModifiContents',
    getInfoErrReport,
  );

  if (isLoading) {
    console.log('로딩중');
    return <LoadingAnimation />;
  }
  if (isError) {
    console.log('오류내용', error);
    return <p>Error!!!</p>;
  }

  const selectedDetail = data?.filter((item: ErrReport) => item.id === paramId.id);
  const currentState = selectedDetail[0].status;

  const checkHandler = () => {
    alert('확인');
    navigate('/master');
    return axios.patch(`${JSON_API}/infoErrModifiContents/${paramId.id}`, {
      status: !currentState,
    });
  };

  return (
    <S.ReportListWrap>
      <S.ReportListContainer>
        <S.ReportTitleBox>
          <S.TitleBackground>
            <S.TitleText>정보 오류&수정 제보</S.TitleText>
          </S.TitleBackground>
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
                    {li.user.displayName}
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
                  <S.ReportTitle>정보 오류 내용</S.ReportTitle>
                  <S.ReportContentText>{li.infoErrContent}</S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>정보 수정 내용</S.ReportTitle>
                  <S.ReportContentText>
                    {li.infoModifiContent}
                  </S.ReportContentText>
                </S.Grid>
                <S.Grid>
                  <S.ReportTitle>이미지</S.ReportTitle>

                  <S.ReportImg src={li.errImg} />
                </S.Grid>
                <S.ButtonBox>
                  <S.CancelBtn onClick={() => navigate('/master')}>
                    취소
                  </S.CancelBtn>
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

export default ErrReportDetail;
