import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import data from '../../../data/bookMarkList.json';
import { auth } from '../../../services/firebase';
import * as S from './style';
import { BsBookmarkFill } from 'react-icons/bs';

<<<<<<< HEAD
// interface Props {
//   detailData: any;
// }
const BookMarkList = () => {
=======
interface Props {
  detailData: any;
}
const BookmarkList = ({ detailData }: Props) => {
>>>>>>> 4a3cfadb8a1c2abc75ca37141beecfb46bbc9a2f
  const bookmarkList = data.BookMarkList;

  const navigate = useNavigate();

  const uid = auth.currentUser?.uid;
  // uid ===bookmarkList.userId

  // console.log('bookmarkList', bookmarkList);
  // console.log('detailData', detailData);
  // button : disabled
  return (
    <>
      <S.BookMarkContainer>
        {/* 북마크 리스트에 storeId가 같은 게 있으면 중복추가 금지 */}
        {bookmarkList
          // // 리스트에 있는 storeId값과 지금 선택한 detailData.id값 일치하면 출력 금지
          //         .filter((id) => detailData[0].id !== id.storeId)

          .map((bookmark) => {
            console.log('bookmark', bookmark);
            console.log('uid', uid);
            console.log('bookmark.userId', bookmark.userId);

            if (uid === bookmark.userId) {
              return (
                <S.BookMarkCard>
                  <BsBookmarkFill />
                  <S.BookMarkThumbnail
                    onClick={() => navigate(`/datail/${bookmark.storeId}`)}
                  >
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

export default BookmarkList;
