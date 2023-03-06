import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import COLORS from '../../../assets/CSS/colors';

export const ImgSlideWrap = styled.div``;

export const ImgContainer = styled.div``;

export const MainImgContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const SliderStyle = styled(Slider)`
  cursor: pointer;
  width: 100%;
`;

export const MainImgDiv = styled.div`
  width: 130%;

  img {
    margin: 0 auto;
    /* object-fit: contain; */
    width: 100%;
    height: 700px;
    border-radius: 8px;
    border: 1px solid ${COLORS.gray7};
  }

  @media screen and (max-width: 575px) {   
    height: 35vh;
  }
`;

export const ThumbnailImgContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  /* background-color: yellow; */
  @media screen and (max-width: 575px) {
    width: 345px;
  }
`;

export const ThumbnailImg = styled.div`
  img {
    /* margin: 0 auto; */
    width: 98%;
    height: 230px;
    border-radius: 8px;
  }
  @media screen and (max-width: 575px) {
    img {
      /* margin: 0 auto; */
      width: 100px;
      height: 80px;
    }
  }
`;
