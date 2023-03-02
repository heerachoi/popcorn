import styled from 'styled-components';

export const ImgSlideWrap = styled.div``;

export const ImgContainer = styled.div``;

export const MainImgContainer = styled.div``;

export const MainImgDiv = styled.div` 
  height: 40vh;
  img {
    margin: 0 auto;
    object-fit: contain;
    height: 100%;
  }
   @media screen and (max-width: 575px) {
    height: 35vh;
  }
`;

export const ThumbnailImgContainer = styled.div`
  margin: 25px auto;
  width: 535px;
  @media screen and (max-width: 575px) {
    width: 345px;
  }
`;

export const ThumbnailImg = styled.div`
  img {
    margin: 0 auto;
    width: 170px;
    height: 120px;
  }
  @media screen and (max-width: 575px) {
    img {
    /* margin: 0 auto; */
    width: 100px;
    height: 80px;
  }
  }
`;

