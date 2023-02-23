import { useNavigate } from 'react-router-dom';
import data from '../../../data/BookMark.json';
import { auth } from '../../../services/firebase';
import * as S from './style';
import { BsBookmarkFill } from 'react-icons/bs';

const BookMarkList = () => {
  const bookmarkList = data.BookMarkList;
  const navigate = useNavigate();
  const uid = auth.currentUser?.uid;

  return (
    <>
      <S.BookMarkContainer>
        {bookmarkList.map((bookmark: any) => {
          if (uid === bookmark.userId) {
            return (
              <S.BookMarkCard>
                <S.BookMarkThumbnail
                  key={bookmark.id}
                  // onClick={() => navigate(`/detail/${bookmark.storeId}`)}
                >
                  <S.BookMarkIcon>
                    <BsBookmarkFill
                      style={{ color: ' #323232', fontSize: '2rem' }}
                    />
                  </S.BookMarkIcon>
                  <img
                    src={bookmark.imgURL}
                    style={{ width: '296px', height: '296.46px' }}
                  ></img>
                </S.BookMarkThumbnail>

                <S.BookMarkCardTitle>{bookmark.title}</S.BookMarkCardTitle>
                <S.BookMarkCardDate>
                  {bookmark.open} - {bookmark.close}
                </S.BookMarkCardDate>
                <S.BookMarkCardFilterBtn>
                  <S.BookMarkCardFilterTxt>마감임박</S.BookMarkCardFilterTxt>
                </S.BookMarkCardFilterBtn>
              </S.BookMarkCard>
            );
          }
        })}
      </S.BookMarkContainer>
    </>
  );
};

export default BookMarkList;
