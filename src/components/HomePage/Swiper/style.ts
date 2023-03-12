import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackgroundOff from '../../../assets/Img/yellowArrow.png';
import ArrowBackgroundOn from '../../../assets/Img/greenArrow.png';

export const SwiperContainer = styled(Slider)`
  width: 1100px;
  height: 506px;

  img {
    cursor: pointer;
    /* height: 334px; */
    width: 334px;

    @media screen and (max-width: 400px) {
      width: 300px;
      height: 300px;
    }
  }

  .slick-arrow {
    width: 52px;
    height: 59px;
    background: url(${ArrowBackgroundOff});
  }

  li {
    margin: 0;
    padding: 0;
  }

  .slick-track:before {
  }

  .slick-slide {
    width: 334px;
    margin-right: 18px;

    @media screen and (max-width: 400px) {
      width: 300px;
    }
  }

  .slick-next {
    right: -70px;
    z-index: 999;
    width: 52px;
    height: 57px;
    background: url(${ArrowBackgroundOff});
    &:hover {
      background: url(${ArrowBackgroundOn});
    }
  }
  .slick-prev {
    left: -75px;
    z-index: 999;
    background: url(${ArrowBackgroundOff});
    width: 55px;
    height: 57px;
    object-fit: cover;
    &:hover {
      background: url(${ArrowBackgroundOn});
    }
    @media screen and (max-width: 400px) {
      display: none;
      z-index: 0;
    }
  }
`;

// Popup Store 포스터 카드
export const StoreContainer = styled.div`
  border: 1px solid ${COLORS.gray7};
  background-color: ${COLORS.gray8};
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.yellow3};
    border: 1px solid ${COLORS.orange4};
  }
`;

export const PopupImg = styled.img`
  width: 334px;
  height: 334px;
  border-radius: 8px 8px 0px 0px;
`;

export const InformationContainer = styled.div``;

export const StoreInformation = styled.div`
  padding: 16px;
  height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PopupTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.gray1};
  margin-bottom: 20px;
`;

export const PopupDate = styled.p`
  color: ${COLORS.gray5};
`;

export const PopupAddress = styled.p`
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Category = styled.div`
  padding: 4px 16px 3px;
  height: 21px;
  background: ${COLORS.gray3};
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${COLORS.orange4};
  }
`;

// 더보기
export const SeeMoreContainer = styled.div`
  width: 344px;
  height: 490px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
`;

export const SeeMoreImage = styled.img`
  width: 100%;
  height: 490px;
  object-fit: cover;
  border-radius: 8px;
`;

export const SeeMoreText = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  text-align: center;
  position: absolute;
  top: 0%;
  left: 0%;
  color: white;
  padding-top: 250px;
  font-weight: 700;
  font-size: 20px;
  box-sizing: border-box;
  transition: all 0.7s;
  background: rgba(50, 50, 50, 0.7);
  &:hover {
    background: rgba(143, 106, 10, 0.3);
  }
`;
