import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import * as S from './style';
import { BsBookmarkFill } from 'react-icons/bs';
import { getBookMark } from '../../../services/api';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';
import BookmarkNoResult from '../NoResults/BookmarkNoResult';

const BookMarkList = () => {
  const user = useRecoilValue(userInfo);
  const userInfos = user.userInfomation;
  const { data, isLoading } = useQuery('BookMarkList', getBookMark);

  if (isLoading) {
    console.log('로딩중');
    return <p>Loading...</p>;
  }
  const bookmarkList = data?.filter((bookmark: any) => {
    return userInfos?.uid === bookmark?.userId;
  });

  return (
    <>
      {bookmarkList.length === 0 ? (
        <BookmarkNoResult />
      ) : (
        <S.BookMarkContainer>
          {bookmarkList.map((li: any) => {
            {
              return (
                <S.BookMarkCard key={li.id}>
                  <S.BookMarkThumbnail>
                    <S.BookMarkIcon>
                      <BsBookmarkFill
                        style={{ color: ' #323232', fontSize: '2rem' }}
                      />
                    </S.BookMarkIcon>
                    <img
                      src={li.imgURL}
                      style={{ width: '296px', height: '296.46px' }}
                    ></img>
                  </S.BookMarkThumbnail>

                  <S.BookMarkCardTitle>{li.title}</S.BookMarkCardTitle>
                  <S.BookMarkCardDate>
                    {li.open} - {li.close}
                  </S.BookMarkCardDate>
                  <S.BookMarkCardFilterBtn>
                    <S.BookMarkCardFilterTxt>마감임박</S.BookMarkCardFilterTxt>
                  </S.BookMarkCardFilterBtn>
                </S.BookMarkCard>
              );
            }
          })}
        </S.BookMarkContainer>
      )}
    </>
  );
};

export default BookMarkList;
