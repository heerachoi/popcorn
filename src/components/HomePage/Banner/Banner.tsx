// library
import { Link } from 'react-router-dom';
// style
import * as S from './style';
import popcornBnr1 from '../../../assets/Logo/popcornBanner1 2.svg';
import popcornBnr2 from '../../../assets/Logo/popcornBanner2 2.svg';
import popcornBnr3 from '../../../assets/Logo/popcornBanner3 3.svg';

const Banner = () => {
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
    <S.StyledSlider {...settings}>
      <S.IMG>
        <Link to="/search">
          <img src={popcornBnr2} alt="배너1" />
        </Link>
      </S.IMG>
      <Link to="/search">
        <img src={popcornBnr1} alt="배너2" />
      </Link>
      <Link to="/search">
        <img src={popcornBnr3} alt="배너2" />
      </Link>
    </S.StyledSlider>
  );
};

export default Banner;
