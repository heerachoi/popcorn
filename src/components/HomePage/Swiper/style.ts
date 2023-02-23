import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackgroundOff from '../../../assets/Img/arrowBackgroundOff.png';
import ArrowBackgroundOn from '../../../assets/Img/arrowBackgroundOn.png';



export const SwiperContainer = styled(Slider)`
  width: 1100px;
  height: 506px;

  img {
    cursor: pointer;
    height: 334px;
    width: 334px;
  }

  .slick-arrow {
    /* display: flex; */
    /* z-index: 999; */
    /* background-color: aliceblue; */
    width: 52px;
    height: 59px;
    background:url(${ArrowBackgroundOff});
  }

  li {
    margin: 0;
    padding: 0;
  }

  .slick-track:before {
    /* background-color: aliceblue; */
  }

  .slick-slide {
    width: 334px;
    margin-right: 18px;
    
  }
  
  .slick-next {
    z-index: 999;
    background-color: white;
    width: 52px;
    height: 59px;
    background:url(${ArrowBackgroundOff});
     &:hover {
      background:url(${ArrowBackgroundOn});
    }
  }
  .slick-prev {
    z-index: 999;
    background:url(${ArrowBackgroundOff});
    width: 55px;
    height: 59px;
    object-fit: cover;
    /* background-color: black; */
    &:hover {
      background:url(${ArrowBackgroundOn});
    }
  }
`;

// Popup Store 포스터 카드
export const StoreContainer = styled.div`
  border: 1px solid ${COLORS.gray7};
  background-color: ${COLORS.gray8};
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    background-color: ${COLORS.orange4};
    border: 1px solid ${COLORS.orange2};
  }
`;

export const PopupImg = styled.img`
  width: 334px;
  height: 334px;
  border-radius: 8px 8px 0px 0px;
`;

export const InformationContainer = styled.div`
`;


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
  background: ${COLORS.gray3};
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 12px;  
  display: flex;
  align-items: center;
  &:hover{
    background-color: ${COLORS.orange2};
  }
`;