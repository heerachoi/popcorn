import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSlider = styled(Slider)`
  img {
    cursor: pointer;
    width: 100%;
    height: 30rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-dots {
    display: flex;
    width: 100px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
  }

  .slick-dots li {
    width: 6px;
    height: 6px;
    margin: 0 13px;

    @media screen and (max-width: 400px) {
      display: none;
    }
  }

  .slick-dots li button {
    width: 6px;
    height: 6px;
  }

  .slick-dots li button:before {
    width: 20px;
    height: 20px;
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }

  li {
    margin: 0;
    padding: 0;
  }

  .slick-list {
  }

  .slick-slider {
    display: block;
    margin: 0 auto;
  }
  @media screen and (max-width: 400px) {
    height: 172px;
  }

  @media screen and (max-width: 400px) {
    height: 172px;
  }
`;

export const IMG = styled.div`
  width: 100%;
  height: 30rem;
`;
