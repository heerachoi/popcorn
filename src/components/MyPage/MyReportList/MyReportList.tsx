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
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';

const MyReportList = () => {
  const user = useRecoilValue(userInfo);
  const userInfos = user.userInfomation;

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
    return <LoadingAnimation />;
  }
  if (isError) {
    console.log( error);
    return <p>Error!!!</p>;
  }

  const myErrReport = errReport.filter(
    (item: ErrReport) => item?.user === String(userInfos?.id),
  );

  const myNewStoreReport = newStores.filter(
    (item: NewStoreReport) => item?.user === String(userInfos?.id),
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
