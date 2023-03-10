// library
import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
// API
import { getNewStoreReport, JSON_API } from '../../services/api';
// types
import { NewStoreReport } from '../../types/report';
// style
import * as S from './style';
import COLORS from '../../assets/CSS/colors';
import LoadingAnimation from '../GlobalComponents/LoadingAnimation';

const NewStoreReportList = () => {
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const data = await axios.get(`${JSON_API}/newStores`);
  };

  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery(
    'newStores',
    getNewStoreReport,
  );

  if (isLoading) {
    console.log('로딩중');
    return <LoadingAnimation />;
  }
  if (isError) {
    console.log('error', error);
    return <p>Error!!!!</p>;
  }

  const statusTrue: NewStoreReport[] = [];
  const statusFalse: NewStoreReport[] = [];
  data.map((item: NewStoreReport) => {
    if (item.status === true) {
      statusTrue.push(item);
    } else {
      statusFalse.push(item);
    }
  });
  console.log('statusFalse', statusFalse);

  const resentStatusTrue = statusTrue.sort(
    (a, b) =>
      Number(
        b.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, ''),
      ) -
      Number(a.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')),
  );

  const resentStatusFalse = statusFalse.sort(
    (a, b) =>
      Number(
        b.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, ''),
      ) -
      Number(a.reportedDate.split('.').slice(0, 3).join('').replace(/\s/g, '')),
  );

  const statusSort = resentStatusFalse.concat(resentStatusTrue);

  return (
    <S.ContentWrap>
      <S.ListContainer>
        {statusSort?.map((li: NewStoreReport) => {
          return (
            <S.ListBox
              key={li.id}
              onClick={() => navigate(`/masterDetail/${li.id}`)}
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
                  <S.StatusText style={{ color: `${COLORS.black}` }}>완료</S.StatusText>
                )}
              </S.ListContent>
            </S.ListBox>
          );
        })}
      </S.ListContainer>
    </S.ContentWrap>
  );
};

export default NewStoreReportList;
