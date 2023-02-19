import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import data from '../../../data/bookMarkList.json';
import { auth } from '../../../services/firebase';
import * as S from './style';
import axios from 'axios';

const BookMarkList = () => {
  const bookmarkList = data.BookMarkList;

  const navigate = useNavigate();

  const uid = auth.currentUser?.uid;
  // uid ===bookmarkList.userId
  return (
    <>
      <S.BookMarkContainer>
        {bookmarkList.map((bookmark) => {
          if (uid === bookmark.userId) {
            return (
              <S.BookMarkCard
                onClick={() => navigate(`/datail/${bookmark.storeId}`)}
              >
                <S.BookMarkThumbnail>
                  <img
                    src={bookmark.imgURL}
                    style={{ width: '296px', height: '296.46px' }}
                  />
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
