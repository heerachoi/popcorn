import { useQuery } from 'react-query';
import * as S from './style';
import {
  getBookMark,
  getBookMarkStore,
  getPopupData,
} from '../../../services/api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';
import BookmarkNoResult from '../NoResults/BookmarkNoResult';
import { kakaoAccessToken, userInfoState } from '../../../atoms';
import { useNavigate } from 'react-router';
import { Store } from '../../../types/data/storeInterface';
import BookMarkStore from './BookMarkStore';

const BookMarkList = () => {
  const user = useRecoilValue(userInfo);
  const userInfos = user.userInfomation;
  const [kakaoUserInfo, setKakaoUserInfo] = useRecoilState(userInfoState);
  const accessToken = useRecoilValue(kakaoAccessToken);
  const { data, isLoading } = useQuery('BookMarkList', getBookMark);

  const navigate = useNavigate();
  if (isLoading) {
    console.log('로딩중');
    return <p>Loading...</p>;
  }

  const bookmarkList = data?.filter((bookmark: any) => {
    return userInfos?.uid === bookmark?.user;
  });

  return (
    <>
      {bookmarkList.length === 0 ? (
        <BookmarkNoResult />
      ) : (
        <S.BookMarkContainer>
          {bookmarkList.map((li: any) => {
            return <BookMarkStore li={li} />;
          })}
        </S.BookMarkContainer>
      )}
    </>
  );
};

export default BookMarkList;
