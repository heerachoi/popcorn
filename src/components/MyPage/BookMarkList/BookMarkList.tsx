import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { auth } from '../../../services/firebase';
import * as S from './style';
import { BsBookmarkFill } from 'react-icons/bs';
import { getBookMark } from '../../../services/api';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';

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
  console.log('data', data);
  console.log('bookmarkList', bookmarkList);
  console.log('user', user);
  return (
    <>
      <S.BookMarkContainer>
        {bookmarkList.map((li: any) => {
          {
            return (
              <S.BookMarkCard>
                <S.BookMarkThumbnail key={li.id}>
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
    </>
  );
};

export default BookMarkList;
