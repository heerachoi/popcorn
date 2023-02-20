import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodayDate } from '../../../utils/FormatDate';
import data from '../../../data/popupStore.json';
import * as S from './style'

const ClosingSoonSwiper: React.FC = () => {
  const navigate = useNavigate();
  const [todayDate, setTodayDate] = useState<number|any>();
  
  // 오늘날짜
  useEffect(() => {
    setTodayDate(getTodayDate());
  }, []);

  /** popupList: 전체 데이터
   * 곧 마감해요
   * 개선: 달력별 다른 날짜 계산 필요
   */
  const closingSoonList = data.Store.filter((store) => {
    return (
      parseInt(store.close.split('.').join('')) >= todayDate &&
      todayDate + 3 >= parseInt(store.close.split('.').join(''))
    );
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrow: true,
     variableWidth: true,
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
          {closingSoonList.map((popup) => (
            <S.StoreContainer
              key={popup.id}
              onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}
            >
            <S.PopupImg src={popup.imgURL[0]} alt="팝업스토어사진"></S.PopupImg>
            <S.StoreInformation>
            <S.PopupTitle>{popup.title}</S.PopupTitle>
            <S.PopupDate>
            {popup.open} - {popup.close}
            </S.PopupDate>
            <S.PopupAddress>{popup.address}</S.PopupAddress>
            <S.CategoryContainer>
              <S.Category onClick={() => navigate(`/search`)}>{popup.location}</S.Category>
              <S.Category onClick={() => navigate(`/search`)}>{popup.category}</S.Category>
              <S.Category onClick={() => navigate(`/search`)}>{popup.item}</S.Category>
            </S.CategoryContainer>
            </S.StoreInformation>
            </S.StoreContainer>
          ))}
        </S.SwiperContainer>
    
  );
};

export default ClosingSoonSwiper;