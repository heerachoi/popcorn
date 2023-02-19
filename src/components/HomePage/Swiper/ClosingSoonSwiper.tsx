import Swiper, { Navigation } from 'swiper';
import { useRef, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';


import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import * as S from './style'

import { getTodayDate } from '../../../utils/FormatDate';
import { userInfo } from '../../../atoms';
import data from '../../../data/popupStore.json';

interface Props {};

const ClosingSoonSwiper: React.FC<Props> = () => {
  const swiperRef = useRef<Swiper | null>(null);

    const swiper = new Swiper('.swiper-container', S.swiperOptions);

  const handleNextClick = () => {
    console.log('swiperRef.current', swiperRef.current);
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 200,
      slidesPerView: 3,
      
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }
    };
  }, []);

  const navigate = useNavigate();
  const [todayDate, setTodayDate] = useState<number|any>();
  
  // 오늘날짜
  useEffect(() => {
    setTodayDate(getTodayDate());
  }, []);
  
  const user = useRecoilValue(userInfo);

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

   return (
    <S.SwiperContainer>
      <S.SwiperWrapper className="swiper-container">
        <div className="swiper-wrapper">
          {closingSoonList.map((popup) => {
            return (
              <>
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
              </>
            );
          })}
        </div>
        <S.PrevButton className="prev-button">
          <i className="fas fa-chevron-left"></i>
        </S.PrevButton>
        <S.NextButton className="next-button">
          <i className="fas fa-chevron-right"></i>
        </S.NextButton>
      </S.SwiperWrapper>
    </S.SwiperContainer>
  );
};

export default ClosingSoonSwiper;




