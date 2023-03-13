// library
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
// API
import { getPopupData } from '../../../services/api';
// style
import * as S from './style';

const BookMarkStore = ({ li }: any) => {
  const navigate = useNavigate();
  const { data: popupData } = useQuery('popup', getPopupData, {
    staleTime: 500000,
  });
  const popup = popupData?.filter((pop: any) => {
    return pop.id === li.store;
  })[0];

  return (
    <S.BookMarkCard
      key={li.id}
      onClick={() => {
        navigate(`/detail/${li.store}`, { state: popup });
      }}
    >
      <S.BookMarkStoreImg src={li.imgURL} />
      <S.BookMarkStoreInfo>
        <S.BookMarkStoreContainer>
          <S.StoreTitle>{li.title}</S.StoreTitle>
          <S.StoreDate>
            {li.open} - {li.close}
          </S.StoreDate>
        </S.BookMarkStoreContainer>
        <S.StoreCategoryContainer>
          <S.StoreCategory>{li.item}</S.StoreCategory>
        </S.StoreCategoryContainer>
      </S.BookMarkStoreInfo>
    </S.BookMarkCard>
  );
};

export default BookMarkStore;
