import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PopupImg = styled.img`
`;

export const StoreInformation = styled.div`
`;


export const PopupTitle = styled.h3`
`;

export const PopupDate = styled.p``;

export const PopupAddress = styled.p``;

export const SwiperContainer = styled(Slider)`
  width: 1100px;
  height: 516px;
  img {
    cursor: pointer;
    height: 334px;
    width: 334px;
  }

  .slick-arrow {
    display: flex;
    z-index: 999;
    background-color: black;
  }

  li {
    margin: 0;
    padding: 0;
  }

  .slick-track:before {
  }
`;


export const SwiperWrapper = styled.div`
  
`;

export const PrevButton = styled.div`
  /* position: absolute;
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
  z-index: 999;
  &:hover {
    background-color: #ccc;
  } */
`;

export const NextButton = styled.div`
  /* position: absolute;
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
  z-index: 1090;
  &:hover {
    background-color: #ccc;
  } */
`;

export const swiperOptions = {
  // slidesPerView: 3,
  // spaceBetween: 30,
  // navigation: {
  //   prevEl: '.prev-button',
  //   nextEl: '.next-button',
  // },
};

// import { SwiperSlide } from "swiper/react";



export const SwiperSlider = styled.div`
  /* display: flex;
  flex-direction: column;
  margin-right: 20px; // Add margin-right to create space between elements
  width: 280px;
  height: 340px;
  position: relative;
  cursor: pointer;
  overflow: hidden; */
`;