// library
import { useQuery } from 'react-query';
// api
import { getPopupData } from '../../services/api';
// components
import Banner from '../../components/HomePage/Banner/Banner';
import CategorySwiper from '../../components/HomePage/Swiper/CategorySwiper';
import ClosingSoonSwiper from '../../components/HomePage/Swiper/ClosingSoonSwiper';
import WomenPopularSwiper from '../../components/HomePage/Swiper/WomenPopularSwiper';
import MenPopularSwiper from '../../components/HomePage/Swiper/MenPopularSwiper';
import HomeSearch from '../../components/HomePage/Search/HomeSearch';
import TopButton from '../../components/GlobalComponents/TopButton';
// style
import * as S from './style';
import LoadingAnimation from '../../components/GlobalComponents/LoadingAnimation';

const HomePage = () => {
  const { isLoading, isError, data } = useQuery('popup', getPopupData, {
    staleTime: 5 * 60 * 1000,
    onSettled: () => {
      console.log('호출 되면 안된다.');
    },
  });

  if (isLoading) {
    return <LoadingAnimation />;
  }
  if (isError) {
    return <p>Error!!!</p>;
  }

  return (
    <S.HomePageContainer>
      <Banner />
      <S.SearchContainer>
        <HomeSearch />
      </S.SearchContainer>
      <S.HomePageContentContainer>
        <S.CategoryWrapper>
          <S.ListTitleContainer>
            <S.CategoryTitleBackgroundOne />
            <S.ListTitle>최근 오픈했어요!</S.ListTitle>
          </S.ListTitleContainer>
          <S.CategoryListContainer>
            <CategorySwiper data={data} />
          </S.CategoryListContainer>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <S.ListTitleContainer>
            <S.CategoryTitleBackgroundTwo />
            <S.ListTitle>곧 마감해요</S.ListTitle>
          </S.ListTitleContainer>
          <S.CategoryListContainer>
            <ClosingSoonSwiper data={data} />
          </S.CategoryListContainer>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <S.ListTitleContainer>
            <S.CategoryTitleBackgroundThree />
            <S.ListTitle>여성 인기 팝업스토어</S.ListTitle>
          </S.ListTitleContainer>
          <S.CategoryListContainer>
            <S.FilterStoreList>
              <WomenPopularSwiper data={data} />
            </S.FilterStoreList>
          </S.CategoryListContainer>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <S.ListTitleContainer>
            <S.CategoryTitleBackgroundThree />
            <S.ListTitle>남성 인기 팝업스토어</S.ListTitle>
          </S.ListTitleContainer>
          <S.CategoryListContainer>
            <S.FilterStoreList>
              <MenPopularSwiper data={data} />
            </S.FilterStoreList>
          </S.CategoryListContainer>
        </S.CategoryWrapper>
      </S.HomePageContentContainer>
      <TopButton />
    </S.HomePageContainer>
  );
};

export default HomePage;
