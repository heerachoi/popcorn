// library
import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
// API
import { getInfoErrReport, JSON_API } from '../../services/api';
// style
import * as S from './style';
import COLORS from '../../assets/CSS/colors';
import LoadingAnimation from '../GlobalComponents/LoadingAnimation';
// type
import { ErrReport } from '../../types/report';

const ErrReportList = () => {
  useEffect(() => {
    fetch();
  }, []);

  // 디테일 페이지에서 확인 누른 후 홈페이지 렌더링할 때 상태값 확인
  const fetch = async () => {
    const data = await axios.get(`${JSON_API}/infoErrModifiContents`);
  };
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery(
    'infoErrModifiContents',
    getInfoErrReport,
  );

  if (isLoading) {
    return <LoadingAnimation />;
  }
  if (isError) {
    console.log( error);
    return <p>Error!!!!</p>;
  }

  // 빈 배열 생성해서 status true, false값 각각 push
  const statusTrue: ErrReport[] = [];
  const statusFalse: ErrReport[] = [];
  data.map((item: ErrReport) => {
    if (item.status === true) {
      statusTrue.push(item);
    } else {
      statusFalse.push(item);
    }
  });

  // 완료 날짜 최근순 정렬

  const resentStatusTrue = statusTrue.sort(
    (a, b) =>
      Number(
        b.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, ''),
      ) -
      Number(a.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')),
  );

  //진행중 날짜 최근순 정렬
  const resentStatusFalse = statusFalse.sort(
    (a, b) =>
      Number(
        b.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, ''),
      ) -
      Number(a.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')),
  );

  // 완료, 진행순 정렬된거 하나로 합침
  const statusSort = resentStatusFalse.concat(resentStatusTrue);

  return (
    <S.ContentWrap>
      <S.ListContainer>
        {statusSort?.map((li: ErrReport) => {
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
                <S.NameText>{li.user.displayName}</S.NameText>
                {li.status === false ? (
                  <S.StatusText>진행중</S.StatusText>
                ) : (
                  <S.StatusText style={{ color: `${COLORS.black}` }}>
                    완료
                  </S.StatusText>
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
