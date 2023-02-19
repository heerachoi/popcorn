import styled from 'styled-components';

export const SwiperButtonPrev = styled.div``;

export const SwiperButtonNext = styled.div``;

// opening soon list style

export const ListTitleContainer = styled.div`
`;

export const CategoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 130px;
`;

export const OpeningBackground = styled.div`
  width: 175px;
  height: 20px;
  background-color: #FFEB62;
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
`;

export const ClosingBackground = styled(OpeningBackground)`
  width: 131px;
`;


export const ListTitle = styled.p`
  font-size: 24px;
  position: relative;
  left: 11px;
  top:-8px;
`;

export const StyleListWrap = styled.div`
  width: 334px;
  border: 1px solid #D9D9D9;
  background-color: #F5F5F5;
  border-radius: 8px;
`;

export const FilterStoreList = styled.div`
  display: flex;
  flex-direction: row;
`

export const PopupImg = styled.img`
  width: 334px;
  height: 334px;
  border-radius: 8px 8px 0px 0px;
`;

export const StoreInformation = styled.div`
  box-sizing: border-box;
  padding: 0px 20px;
`;


export const PopupTitle = styled.h3`
`;

export const PopupDate = styled.p``;

export const PopupAddress = styled.p``;

export const ClosingSoonList = styled.h2`
  margin-left: 7vh;
`;





export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SwiperWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  /* align-items: center;
  justify-content: center; */

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #f8f8f8;
    color: #333;
  }
`;

export const PrevButton = styled.div`
  position: absolute;
  left: 20px;
  top: 85%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

export const NextButton = styled.div`
  position: absolute;
  right: 20px;
 top: 85%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;

export const swiperOptions = {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    prevEl: '.prev-button',
    nextEl: '.next-button',
  },
};

import { SwiperSlide } from "swiper/react";



export const SwiperSlider = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
`;