import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../atoms';
import Banner from '../../components/HomePage/Banner/Banner';
import { auth } from '../../services/firebase';
import * as S from './style';

import { useEffect, useState } from 'react';
import data from '../../data/popupStore.json';
import { getTodayDate } from '../../utils/FormatDate';
import CategorySwiper from '../../components/HomePage/Swiper/CategorySwiper';
import ClosingSoonSwiper from '../../components/HomePage/Swiper/ClosingSoonSwiper';

const HomePage: any = () => {
    const [todayDate, setTodayDate] = useState<number|any>();

    interface Props {
  items: Array<{ id: string; image: string; title: string }>;
}

     /** popupList: 전체 데이터
   * 최근 오픈했어요
   * 개선: 달력별 다른 날짜 개산 필요
   */
  const popupList = data.Store.filter((store) => {
    return (
      parseInt(store.open.split('.').join('')) >= todayDate - 3 &&
      todayDate >= parseInt(store.open.split('.').join(''))
    );
  });
  console.log('popupList',popupList);

  const womanPopular = data.Store.filter((store) => {
    return (
      parseInt(store.open.split('.').join('')) >= todayDate - 3 &&
      todayDate >= parseInt(store.open.split('.').join(''))
    );
  });

  return (
    <>
      <Banner />
      <S.HomePageContentContainer>
        <S.ListTitleContainer>
          <S.OpeningBackground/>
          <S.ListTitle>최근 오픈했어요</S.ListTitle>
        </S.ListTitleContainer>
        <S.CategoryListContainer>
          <S.FilterStoreList>
            <CategorySwiper/>
          </S.FilterStoreList>
        </S.CategoryListContainer>
        <S.ListTitleContainer>
          <S.OpeningBackground/>
          <S.ListTitle>곧 마감해요</S.ListTitle>
        </S.ListTitleContainer>
        <S.CategoryListContainer>
          <S.FilterStoreList>
            <ClosingSoonSwiper/>
          </S.FilterStoreList>
        </S.CategoryListContainer>
        <S.ListTitleContainer>
          <S.OpeningBackground/>
          <S.ListTitle>여성 인기 팝업스토어</S.ListTitle>
        </S.ListTitleContainer>
        <S.CategoryListContainer>
          <S.FilterStoreList>
            
          </S.FilterStoreList>
        </S.CategoryListContainer>
      </S.HomePageContentContainer>
      
    </>
  );
};

export default HomePage;
