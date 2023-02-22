import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import data from '../../../data/BookMark.json';
import { auth } from '../../../services/firebase';
import * as S from './style';
import { BsBookmarkFill } from 'react-icons/bs';

const BookMarkList = () => {
  const bookmarkList = data.BookMarkList;

  const navigate = useNavigate();

  const uid = auth.currentUser?.uid;
  // uid ===bookmarkList.userId

  // console.log('bookmarkList', bookmarkList);
  // console.log('detailData', detailData);
  return (
    <>
      <S.BookMarkContainer>
        {/* 북마크 리스트에 storeId가 같은 게 있으면 중복추가 금지 */}
        {bookmarkList
          // // 리스트에 있는 storeId값과 지금 선택한 detailData.id값 일치하면 출력 금지
          //         .filter((id) => detailData[0].id !== id.storeId)

          .map((bookmark) => {
            if (uid === bookmark.userId) {
              return (
                <S.BookMarkCard>
                  <S.BookMarkThumbnail
                    onClick={() => navigate(`/datail/${bookmark.storeId}`)}
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
