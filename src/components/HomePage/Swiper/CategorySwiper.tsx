import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import * as S from './style'

import { getTodayDate } from '../../../utils/FormatDate';
import data from '../../../data/popupStore.json';
// Slider
import { Component } from "react";
import Slider from "react-slick";

import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategorySwiper:React.FC = () => {
  const navigate = useNavigate();
  const [todayDate, setTodayDate] = useState<number|any>();
  
  // 오늘날짜
  useEffect(() => {
    setTodayDate(getTodayDate());
  }, []);
  
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
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrow: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
   return (
        <S.SwiperContainer {...settings}>
          {popupList.map((popup) => (
            <S.SwiperSlider
              key={popup.id}
              onClick={() => navigate(`/detail/${popup.id}`)}
            >
            <S.PopupImg src={popup.imgURL[0]} alt="팝업스토어사진"></S.PopupImg>
            <S.StoreInformation>
            <S.PopupTitle>{popup.title}</S.PopupTitle>
            <S.PopupDate>
            {popup.open} - {popup.close}
            </S.PopupDate>
            <S.PopupAddress>{popup.address}</S.PopupAddress>
            </S.StoreInformation>
            </S.SwiperSlider>

          ))}
        </S.SwiperContainer>
    
  );
};

export default CategorySwiper;




