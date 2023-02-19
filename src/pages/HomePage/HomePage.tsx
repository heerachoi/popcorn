import Banner from '../../components/HomePage/Banner/Banner';
import * as S from './style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../data/popupStore.json';
import { getTodayDate } from '../../utils/FormatDate';
import CategorySwiper from '../../components/HomePage/Swiper/CategorySwiper';
import ClosingSoonSwiper from '../../components/HomePage/Swiper/ClosingSoonSwiper';
import {Store} from '../../types/data/storeInterface';

const HomePage: any = () => {
  const navigate = useNavigate();

  // 여성 인기 팝업스토어
  const womenViewSort = data.Store.sort((a,b) => b.view.women - a.view.women);
  const womenTopTwo = womenViewSort.slice(0, 2); 

  // 남성 인기 팝업스토어
  const menViewSort = data.Store.sort((a,b) => b.view.men - a.view.men);
  const menTopTwo = menViewSort.slice(0, 2); 

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
            {womenTopTwo?.map((popup) => {
              return (
                <S.StoreContainer key={popup.id} onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}>
                   <S.PopupImg src={popup.imgURL[0]} alt="팝업스토어사진"/>
                  <S.StoreInformation>
                    <S.PopupTitle>{popup.title}</S.PopupTitle>
                  <S.PopupDate>
                    {popup.open} - {popup.close}
                  </S.PopupDate>
                  <S.PopupAddress>{popup.address}</S.PopupAddress>
                  </S.StoreInformation>
                </S.StoreContainer>
              )
            }) }
            <S.SeeMoreContainer onClick={() => navigate(`/search`)}>
              더 많은 팝업스토어 보기
            </S.SeeMoreContainer>
          </S.FilterStoreList>
        </S.CategoryListContainer>
        <S.ListTitleContainer>
          <S.OpeningBackground/>
          <S.ListTitle>남성 인기 팝업스토어</S.ListTitle>
        </S.ListTitleContainer>
        <S.CategoryListContainer>
          <S.FilterStoreList>
            {menTopTwo?.map((popup) => {
              return (
                <S.StoreContainer key={popup.id} onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}>
                   <S.PopupImg src={popup.imgURL[0]} alt="팝업스토어사진"/>
                  <S.StoreInformation>
                    <S.PopupTitle>{popup.title}</S.PopupTitle>
                  <S.PopupDate>
                    {popup.open} - {popup.close}
                  </S.PopupDate>
                  <S.PopupAddress>{popup.address}</S.PopupAddress>
                  </S.StoreInformation>
                </S.StoreContainer>
              )
            }) }
            <S.SeeMoreContainer onClick={() => navigate(`/search`)}>
              더 많은 팝업스토어 보기
            </S.SeeMoreContainer>
          </S.FilterStoreList>
        </S.CategoryListContainer>
      </S.HomePageContentContainer>
      
    </>
  );
};

export default HomePage;