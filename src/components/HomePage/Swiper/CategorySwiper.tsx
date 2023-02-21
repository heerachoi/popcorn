import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodayDate } from '../../../utils/FormatDate';
import data from '../../../data/popupStore.json';
import * as S from './style'

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
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    variableWidth: true, // 넓이 조정
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
            <S.StoreContainer
              key={popup.id}
              onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}
            >
            <S.PopupImg src={popup.imgURL[0]} alt="팝업스토어사진"/>
            <S.StoreInformation>
              <S.InformationContainer>
                <S.PopupTitle>{popup.title}</S.PopupTitle>
                <S.PopupDate>
                {popup.open} - {popup.close}
                </S.PopupDate>
                {/* <S.PopupAddress>{popup.address}</S.PopupAddress> */}
              </S.InformationContainer>
              <S.CategoryContainer>
                <S.Category onClick={(event) => { 
                    event.stopPropagation(); 
                    navigate(`/search?search=${popup.location}`);
                  }}> 
                  {popup.location} 
                </S.Category>
                <S.Category onClick={(event) => {
                    event.stopPropagation();
                    navigate(`/search?search=${popup.category}`);
                  }}>{popup.category}
                </S.Category>
                <S.Category onClick={(event) => {
                    event.stopPropagation();
                    navigate(`/search?search=${popup.item}`);
                  }}>{popup.item}</S.Category>
              </S.CategoryContainer>
            </S.StoreInformation>
            </S.StoreContainer>
          ))}
        </S.SwiperContainer>
    
  );
};

export default CategorySwiper;




