import { Link } from 'react-router-dom';
import popcornBnr1 from '../../../assets/popcornBnr1.jpg';
import popcornBnr2 from '../../../assets/popcornBnr2.jpg';
import popcornBnr3 from '../../../assets/popcornBnr3.jpg';
import { StyledSlider, IMG } from './style';

const Banner: any = () => {
  const settings: any = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: 10,
  };
  return (
    <StyledSlider {...settings}>
      <IMG>
        <Link to="/">
          <img src={popcornBnr1} alt="배너1" />
        </Link>
      </IMG>
      <Link to="/detail">
        <img src={popcornBnr2} alt="배너2" />
      </Link>
      <Link to="/my">
        <img src={popcornBnr3} alt="배너2" />
      </Link>
    </StyledSlider>
  );
};

export default Banner;
