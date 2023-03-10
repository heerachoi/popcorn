// library
import { useQuery } from 'react-query';
import { userInfo } from '../../../atoms';
import { useRecoilValue } from 'recoil';
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
  const { data, isLoading } = useQuery('BookMarkList', getBookMark);

  if (isLoading) {
    return <LoadingAnimation />;
  }

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
            return <BookMarkStore li={li} key={li.id} />;
          })}
        </S.BookMarkContainer>
      )}
    </>
  );
};

export default BookMarkList;
