import { useNavigate } from 'react-router-dom';
import data from '../../../data/bookMarkList.json';
import * as S from './style';

const BookMarkList = () => {
  const bookmarkList = data.BookMarkList;
  const navigate = useNavigate();

  return (
    <>
      <S.BookMarkContainer>
        {bookmarkList.map((bookmark) => {
          return (
            <S.BookMarkCard onClick={() => navigate(`/datail/1`)}>
              <S.BookMarkThumbnail></S.BookMarkThumbnail>
              <S.BookMarkCardTitle>{bookmark.storeId}</S.BookMarkCardTitle>
              <S.BookMarkCardDate>2023.02.04 - 2023.02.26</S.BookMarkCardDate>
              <S.BookMarkCardFilterBtn>
                <S.BookMarkCardFilterTxt>마감임박</S.BookMarkCardFilterTxt>
              </S.BookMarkCardFilterBtn>
            </S.BookMarkCard>
          );
        })}
      </S.BookMarkContainer>
    </>
  );
};

export default BookMarkList;
