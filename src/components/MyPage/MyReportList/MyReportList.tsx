// library
import { useQuery } from 'react-query';
// firebase
import { auth } from '../../../services/firebase';
// API
import { getInfoErrReport, getNewStoreReport } from '../../../services/api';
// components
import NoResults from '../NoResults/NoResults';
// types
import { ErrReport } from '../../../types/report';
import { NewStoreReport } from '../../../types/report';
import { Report } from '../../../types/report';
// style
import * as S from './style';
import COLORS from '../../../assets/CSS/colors';
import LoadingAnimation from '../../GlobalComponents/LoadingAnimation';

const MyReportList = () => {
  const {
    isLoading,
    isError,
    data: newStores,
    error,
  } = useQuery('newStores', getNewStoreReport);

  const { status, data: errReport } = useQuery(
    'infoErrModifiContents',
    getInfoErrReport,
  );
  

  if (status === 'loading') {
    return <LoadingAnimation />;
  }

  if (isLoading) {
    console.log('로딩중');
    return <LoadingAnimation />;
  }
  if (isError) {
    console.log('오류내용', error);
    return <p>Error!!!</p>;
  }
  const uid = auth.currentUser?.uid;

  const myErrReport = errReport.filter(
    (item: ErrReport) => item.user.uid === uid,
  );
    

  const myNewStoreReport = newStores.filter(
    (item: NewStoreReport) => item.user.uid === uid,
  );

  const myReports = myErrReport.concat(myNewStoreReport);

  return (
    <S.ReportWrap>
      {myReports.length === 0 ? (
        <NoResults />
      ) : (
        <S.ReportContainer>
          {myReports.map((li: Report) => {
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
                    <S.ReportStatusText style={{ color: `${COLORS.black}` }}>
                      완료
                    </S.ReportStatusText>
                  )}
                </S.ListContent>
              </S.ListBox>
            );
          })}
        </S.ReportContainer>
      )}
    </S.ReportWrap>
  );
};

export default MyReportList;
