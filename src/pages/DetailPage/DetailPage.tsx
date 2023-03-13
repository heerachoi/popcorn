// library
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../atoms';
// component
import DetailMap from '../../components/Detail/DetailMap/DetailMap';
import DetailPageViews from '../../components/Detail/DetailPageViews/DetailPageViews';
import StoreDetailInfo from '../../components/Detail/StoreDetailInfo/StoreDetailInfo';
// types
import { Store } from '../../types/data/storeInterface';
// API
import { JSON_API } from '../../services/api';
import TopButton from '../../components/GlobalComponents/TopButton';

const DetailPage: any = () => {
  const detailData = useLocation().state as Store;
  const users = useRecoilValue(userInfo);
  const [userAge, setUserAge] = useState<string>('');
  const [data, setData] = useState<Store>(detailData);

  const queryClient = useQueryClient();

  const today = new Date(); // 오늘 날짜
  const birthDay: any = new Date(users.userInfomation.age); // 유저 생일

  // 유저의 나이 계산
  let age =
    typeof birthDay === 'object'
      ? today.getFullYear() - birthDay.getFullYear()
      : users.userInfomation.age;
  const upForey =
    age === '40대' ||
    age === '50대' ||
    age === '60대' ||
    age === '70대' ||
    age === '80대' ||
    age === '90대';
  // 나이에 따른 연령대를 셋팅해주는 함수
  const generation = () => {
    if ((age < 0 && age >= 0 && age < 10) || !users.isLogin)
      setUserAge('연령모름');
    if ((age >= 10 && age < 20) || age === '10대') setUserAge('10');
    if ((age >= 20 && age < 30) || age === '20대') setUserAge('20');
    if ((age >= 30 && age < 40) || age === '30대') setUserAge('40');
    if (age > 40 || upForey) setUserAge('40+');
  };

  // 데이터를 업데이트 해주는 함수
  // 연령대 + 1, 성별 + 1 전체 수 + 1,
  const upDateViews = async () => {
    try {
      if (!users.isLogin) {
        return await axios.patch(`${JSON_API}/Store/${detailData.id}`, {
          view: {
            ...detailData.view,
            연령모름: detailData.view['연령모름'] + 1,
            성별모름: detailData.view['성별모름'] + 1,
            all: detailData.view['all'] + 1,
          },
        });
      } else {
        return await axios.patch(`${JSON_API}/Store/${detailData.id}`, {
          view: {
            ...detailData.view,
            [userAge]: detailData.view[userAge] + 1,
            [users.userInfomation.gender]:
              detailData.view[users.userInfomation.gender] + 1,
            all: detailData.view['all'] + 1,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const mutation = useMutation(() => upDateViews(), {
    onSuccess: (data) => {
      setData(data?.data);
      // queryClient.invalidateQueries('popup');
    },
  });

  // age 값이 변하면 연령대 설정하기
  useEffect(() => {
    generation();
  }, [age]);

  // 연령대가 설정되면 Json 서버 데이터 업데이트 하기
  useEffect(() => {
    if (userAge !== '') {
      mutation.mutate();
    }
  }, [userAge]);

  return (
    <>
      <StoreDetailInfo detailData={data} />
      <DetailPageViews detailData={data} />
      <DetailMap />
      <TopButton />
    </>
  );
};

export default DetailPage;
