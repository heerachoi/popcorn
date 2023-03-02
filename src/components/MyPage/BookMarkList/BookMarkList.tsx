import { useQuery } from 'react-query';
import * as S from './style';
import { getBookMark, JSON_API } from '../../../services/api';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';
import BookmarkNoResult from '../NoResults/BookmarkNoResult';
import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';

const BookMarkList = () => {
  const observerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const [item, setItem] = useState<any>([]);
  const [loading, setLoaging] = useState(false);
  const user = useRecoilValue(userInfo);
  const userInfos = user.userInfomation;

  const { data, isLoading } = useQuery(
    ['BookMarkList', page],
    () => getBookMark(page),
    {
      keepPreviousData: true, // 이전 데이터 유지
    },
  );

  const loadMoreHandler = async () => {
    try {
      setItem([...item, ...data]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('렌더링 됨');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadMoreHandler();
        }
      });
    }, options);        
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loadMoreHandler]);

  useEffect(() => {
    setLoaging(isLoading);
  }, [isLoading]);

  if (isLoading && page === 1) {
    console.log('로딩중');
    return <p>Loading...</p>;
  }

  const bookmarkList = data?.filter((bookmark: any) => {
    return userInfos?.uid === bookmark?.userId;
  });
  console.log('bookmarkList', bookmarkList);

  return (
    <>
      {bookmarkList.length === 0 ? (
        <BookmarkNoResult />
      ) : (
        <S.BookMarkContainer>
          {bookmarkList.map((li: any) => {
            return (
              <S.BookMarkCard key={li.id}>
                <S.BookMarkStoreImg src={li.imgURL} />
                <S.BookMarkStoreInfo>
                  <S.BookMarkStoreContainer>
                    <S.StoreTitle>{li.title}</S.StoreTitle>
                    <S.StoreDate>
                      {li.open} - {li.close}
                    </S.StoreDate>
                  </S.BookMarkStoreContainer>
                  <S.StoreCategoryContainer>
                    <S.StoreCategory>{li.item}</S.StoreCategory>
                  </S.StoreCategoryContainer>
                </S.BookMarkStoreInfo>
              </S.BookMarkCard>
            );
          })}
          <div ref={observerRef}>여기!!</div>
        </S.BookMarkContainer>
      )}
    </>
  );
};

export default BookMarkList;
