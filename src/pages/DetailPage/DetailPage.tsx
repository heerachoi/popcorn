import axios from 'axios';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../atoms';
import DetailMap from '../../components/Detail/DetailMap/DetailMap';
import DetailPageViews from '../../components/Detail/DetailPageViews/DetailPageViews';
import StoreDetailInfo from '../../components/Detail/StoreDetailInfo/StoreDetailInfo';
import { Store } from '../../types/data/storeInterface';

const DetailPage: any = () => {
  const detailData = useLocation().state as Store;
  const users = useRecoilValue(userInfo);
  const [userAge, setUserAge] = useState('');
  const [data, setData] = useState<Store>(detailData);

  const queryClient = useQueryClient();

  const today = new Date(); // 오늘 날짜
  const birthDay = new Date(users.userInfomation.age); // 유저 생일

  // 유저의 나이 계산
  let age = today.getFullYear() - birthDay.getFullYear();

  // 나이에 따른 연령대를 셋팅해주는 함수
  const generation = () => {
    if (age < 0 && age >= 0 && age < 10) setUserAge('연령모름');
    if (age >= 10 && age < 20) setUserAge('10');
    if (age >= 20 && age < 30) setUserAge('20');
    if (age >= 30 && age < 40) setUserAge('40');
    if (age > 40) setUserAge('40+');
  };

  // 데이터를 업데이트 해주는 함수
  // 연령대 + 1, 성별 + 1 전체 수 + 1,
  const upDateViews = async () => {
    try {
      return await axios.patch(`http://localhost:3010/Store/${detailData.id}`, {
        view: {
          ...detailData.view,
          [userAge]: detailData.view[userAge] + 1,
          [users.userInfomation.gender]:
            detailData.view[users.userInfomation.gender] + 1,
          all: detailData.view['all'] + 1,
        },
      });
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
    </>
  );
};

export default DetailPage;
