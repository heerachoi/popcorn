import Banner from '../../components/HomePage/Banner/Banner';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import CategorySwiper from '../../components/HomePage/Swiper/CategorySwiper';
import ClosingSoonSwiper from '../../components/HomePage/Swiper/ClosingSoonSwiper';
import { PopularToMen, PopularToWomen } from '../../utils/Filter';

const HomePage: any = () => {
  const navigate = useNavigate();
  const womenTopTwo = PopularToWomen();
  const menTopTwo = PopularToMen(); 

  return (
    <>
      <Banner />
      <S.HomePageContentContainer>
        <S.CategoryWrapper>
          <S.ListTitleContainer>
          <S.CategoryTitleBackgroundOne/>
          <S.ListTitle>최근 오픈했어요</S.ListTitle>
        </S.ListTitleContainer>
        <S.CategoryListContainer>
          <S.FilterStoreList>
            <CategorySwiper/>
          </S.FilterStoreList>
        </S.CategoryListContainer>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <S.ListTitleContainer>
          <S.CategoryTitleBackgroundTwo/>
          <S.ListTitle>곧 마감해요</S.ListTitle>
        </S.ListTitleContainer>
        <S.CategoryListContainer>
          <S.FilterStoreList>
            <ClosingSoonSwiper/>
          </S.FilterStoreList>
        </S.CategoryListContainer>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
           <S.ListTitleContainer>
          <S.CategoryTitleBackgroundThree/>
          <S.ListTitle>여성 인기 팝업스토어</S.ListTitle>
        </S.ListTitleContainer>
        <S.CategoryListContainer>
          <S.FilterStoreList>
            {womenTopTwo?.map((popup:any) => {
              return (
                <S.StoreContainer key={popup.id} onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}>
                   <S.PopupImg src={popup.imgURL[0]} alt="팝업스토어사진"/>
                  <S.StoreInformation>
                    <S.PopupTitle>{popup.title}</S.PopupTitle>
                  <S.PopupDate>
                    {popup.open} - {popup.close}
                  </S.PopupDate>
                  <S.PopupAddress>{popup.address}</S.PopupAddress>
                  <S.CategoryContainer>
                    <S.Category onClick={(event) => { 
                        event.stopPropagation(); 
                        navigate(`/search?location=${popup.location}`);
                      }}> 
                      {popup.location} 
                    </S.Category>
                    <S.Category onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/search?category=${popup.category}`);
                      }}>{popup.category}
                    </S.Category>
                    <S.Category onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/search?item=${popup.item}`);
                      }}>{popup.item}</S.Category>
                  </S.CategoryContainer>
                  </S.StoreInformation>
                </S.StoreContainer>
              )
            }) }
            <S.SeeMoreContainer onClick={() => navigate(`/search`)}>
              더 많은 팝업스토어 보기
            </S.SeeMoreContainer>
          </S.FilterStoreList>
        </S.CategoryListContainer>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <S.ListTitleContainer>
          <S.CategoryTitleBackgroundThree/>
          <S.ListTitle>남성 인기 팝업스토어</S.ListTitle>
        </S.ListTitleContainer>
        <S.CategoryListContainer>
          <S.FilterStoreList>
            {menTopTwo?.map((popup:any) => {
              return (
                <S.StoreContainer key={popup.id} onClick={() => navigate(`/detail/${popup.id}`, { state: popup })}>
                   <S.PopupImg src={popup.imgURL[0]} alt="팝업스토어사진"/>
                  <S.StoreInformation>
                    <S.PopupTitle>{popup.title}</S.PopupTitle>
                  <S.PopupDate>
                    {popup.open} - {popup.close}
                  </S.PopupDate>
                  <S.PopupAddress>{popup.address}</S.PopupAddress>
                  <S.CategoryContainer>
                    <S.Category onClick={(event) => { 
                        event.stopPropagation(); 
                        navigate(`/search?location=${popup.location}`);
                      }}> 
                      {popup.location} 
                    </S.Category>
                    <S.Category onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/search?category=${popup.category}`);
                      }}>{popup.category}
                    </S.Category>
                    <S.Category onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/search?item=${popup.item}`);
                      }}>{popup.item}</S.Category>
                  </S.CategoryContainer>
                  </S.StoreInformation>
                </S.StoreContainer>
              )
            }) }
            <S.SeeMoreContainer onClick={() => navigate(`/search`)}>
              더 많은 팝업스토어 보기
            </S.SeeMoreContainer>
          </S.FilterStoreList>
        </S.CategoryListContainer>
        </S.CategoryWrapper>
      </S.HomePageContentContainer>
      
    </>
  );
};

export default HomePage;