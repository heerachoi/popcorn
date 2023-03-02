import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSlider = styled(Slider)`
  /* height: 27.5rem; */
      /* width: 100vw; */

  img {
    cursor: pointer;
    height: 27.5rem;
    width: 100vw;
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
  }

  .slick-dots li button {
    width: 6px;
    height: 6px;
  }

  .slick-dots li button:before {
    width: 6px;
    height: 6px;
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
    /* marign-right: 20px; */
    /* background-color: aqua; */
  }


.slick-slider {
  display: block;
  margin: 0 auto;
  /* background-color: aqua; */
}

  @media screen and (max-width: 400px) {
    /* img {
      height: 20rem;
      width: 100vw;
    } */
  }
`;

export const IMG = styled.div`
  width: 100%;
  height: 27.5rem;
`;
