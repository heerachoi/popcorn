import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    height: 100%;
    background-color: aliceblue;
  }

.slick-slide {
    width: 334px;
    height: 516px;
    margin-right: 18px;
}

.slick-slide:not(.slick-active) {
  display: none;
}

`;

// Popup Store 포스터 카드
export const StoreContainer = styled.div`
  height: 516px;
  border: 1px solid #D9D9D9;
  background-color: #F5F5F5;
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    background-color: #FFF9D2;
    border: 1px solid #FFB321;
  }
`;

export const PopupImg = styled.img`
  width: 334px;
  height: 334px;
  border-radius: 8px 8px 0px 0px;
`;

export const StoreInformation = styled.div`
  box-sizing: border-box;
  padding: 0px 20px;
  width: 334px;
`;

export const PopupTitle = styled.h3`
`;

export const PopupDate = styled.p``;

export const PopupAddress = styled.p`
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Category = styled.div`
  padding: 4px 16px 3px;
  height: 21px;
  background: #676767;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 12px;  
  display: flex;
  align-items: center;
  &:hover{
    background-color: #FFB321;
  }
`;