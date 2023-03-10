// library
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { userInfo } from '../../../atoms';
import { kakaoAccessToken, userInfoState } from '../../../atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
// component
import BookmarkNoResult from '../NoResults/BookmarkNoResult';
import BookMarkStore from './BookMarkStore';
// API
import { getBookMark } from '../../../services/api';
// style
import * as S from './style';
import LoadingAnimation from '../../GlobalComponents/LoadingAnimation';

const BookMarkList = () => {
  const user = useRecoilValue(userInfo);
  const userInfos = user.userInfomation;
  const [kakaoUserInfo, setKakaoUserInfo] = useRecoilState(userInfoState);
  const accessToken = useRecoilValue(kakaoAccessToken);
  const { data, isLoading } = useQuery('BookMarkList', getBookMark);

  const navigate = useNavigate();
  if (isLoading) {
    console.log('로딩중');
    return <p><LoadingAnimation /></p>;
  }

  console.log();
  const bookmarkList = data?.filter((bookmark: any) => {
    return String(userInfos?.id) === bookmark?.user;
  });
  

  return (
    <>
      {bookmarkList.length === 0 ? (
        <BookmarkNoResult />
      ) : (
        <S.BookMarkContainer>
          {bookmarkList.map((li: any) => {
            return <BookMarkStore li={li} key={li.id}/>;
          })}
        </S.BookMarkContainer>
      )}
    </>
  );
};

export default BookMarkList;
