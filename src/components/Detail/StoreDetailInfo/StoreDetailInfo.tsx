/* style */
import * as S from './style';
/* library */
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import KakaoShare from './KakaoShare';
import StoreDetailImg from '../StoreDetailImg/StoreDetailImg';
/* icons */
import { BsBookmarkHeart } from 'react-icons/bs';
import { TbClock } from 'react-icons/tb';
import { MdIosShare } from 'react-icons/md';
import { BsInstagram, BsGlobe, BsFillSunFill } from 'react-icons/bs';
/* componant */
import { Store } from '../../../types/data/storeInterface';
import COLORS from '../../../assets/CSS/colors';
import { BookMark } from '../../../types/data/storeInterface';
import StoreEmoji from '../StoreEmoji/StoreEmoji';
/* firebase */
import { auth } from '../../../services/firebase';
interface Props {
  detailData: Store;
}

const StoreDetailInfo = ({ detailData }: Props) => {
  const [currentUser, setCurrentUser] = useState<any>('');
  const [changeColor, setChangeColor] = useState<string>(`${COLORS.black}`);
  const [bookMarkState, setBookMarkState] = useState<boolean>();
  const [currentBookMarkId, setCurrentBookMarkId] = useState<string>('');

  // 현재 로그인한 사용자 가져오기
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(auth.currentUser);
        fetchBookmarks();
      } else {
        return console.log('로그인 안됨');
      }
    });
  }, [currentUser]);

  // 북마크 상태 업데이트
  useEffect(() => {
    fetchBookmarks();
  }, [bookMarkState, changeColor]);

  const NewBookmark = {
    id: uuidv4(),
    storeId: detailData?.id,
    userId: auth.currentUser?.uid,
    notification: false,
    title: detailData?.title,
    open: detailData?.open,
    close: detailData?.close,
    imgURL: detailData?.imgURL[0],
  };

  // 페이지 렌딩시 유저의 북마크 유무 확인
  const fetchBookmarks = async () => {
    const { data } = await axios.get('http://localhost:3011/BookMarkList'); // 북마크 리스트
    data.map((bookmark: BookMark) => {
      if (
        bookmark.userId === currentUser.uid &&
        bookmark.storeId === detailData.id
      ) {
        // 유저가 북마크를 했음
        setChangeColor(`${COLORS.orange2}`);
        setBookMarkState(true);
        setCurrentBookMarkId(bookmark.id);
      } else {
        // 북마크안했음
        setChangeColor(`${COLORS.black}`);
        setBookMarkState(false);
      }
    });
  };

  // 클릭했을 때 북마크에 추가 + 삭제
  const postBookmarkHandler = async () => {
    if (currentUser) {
      if (bookMarkState) {
        // 북마크가 있을 경우 삭제
        try {
          axios.delete(
            `http://localhost:3011/BookMarkList/${currentBookMarkId}`,
          );
          setChangeColor(`${COLORS.black}`);
          setBookMarkState(false);
        } catch (error) {
          console.log('error', error);
        }
      } else {
        //북마크가 없을 경우 추가
        try {
          axios.post(`http://localhost:3011/BookMarkList`, NewBookmark);
          setChangeColor(`${COLORS.orange2}`);
          setBookMarkState(true);
        } catch (error) {
          console.log('error', error);
        }
      }
    } else {
      alert('로그인이 필요합니다!');
    }
  };
  return (
    <S.StoreDetailInfoWrap>
      <S.DetailContainer>
        {/* 이미지 슬라이드 컴포넌트 */}
        <StoreDetailImg />
        {/* 디테일 정보 부분 (이모티콘 위 하단선까지) */}
        <S.DetailInfoContent>
          <S.TitleWrap>
            <S.Title>{detailData?.title}</S.Title>
            <S.SideTitleWrap>
              <S.SideTitleIconText>
                <S.SideTitleIcon>{detailData?.view.all}</S.SideTitleIcon>
                <S.SideTitleText>조회수</S.SideTitleText>
              </S.SideTitleIconText>
              <S.SideTitleIconText>
                <S.SideTitleIcon>
                  <TbClock />
                </S.SideTitleIcon>
                <S.SideTitleText>
                  <Link
                    to={detailData?.reserveURL}
                    target="_blank"
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    예약
                  </Link>
                </S.SideTitleText>
              </S.SideTitleIconText>
              <S.SideTitleIconText>
                <S.SideTitleIcon>
                  <MdIosShare />
                </S.SideTitleIcon>
                <S.SideTitleText>
                  {/* 공유 */}
                  <KakaoShare detailData={detailData} />
                </S.SideTitleText>
              </S.SideTitleIconText>
              <S.SideTitleIconText>
                {/* 북마크 */}
                <S.BookmarkClick
                  onClick={postBookmarkHandler}
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  <S.SideTitleText>
                    <BsBookmarkHeart style={{ color: changeColor }} />
                  </S.SideTitleText>
                </S.BookmarkClick>
              </S.SideTitleIconText>
            </S.SideTitleWrap>
          </S.TitleWrap>
          <S.InfoContentWrap>
            <S.InfoTable>
              <S.InfoTbody>
                <S.InfoTr>
                  <S.InfoTitleText>운영기간</S.InfoTitleText>
                  <S.InfoContentText>{`${detailData?.open} ~ ${detailData?.close}`}</S.InfoContentText>
                </S.InfoTr>
              </S.InfoTbody>
              <S.InfoTbody>
                <S.InfoTr>
                  <S.InfoTitleText>운영시간</S.InfoTitleText>
                  <S.OpeningHoursWrap>
                    <S.OpeningHoursBox>
                      {detailData?.openingTime?.map((openTime: string) => {
                        return <span key={uuidv4()}>{openTime + '-'}</span>;
                      })}
                    </S.OpeningHoursBox>
                    <S.OpeningHoursBox>
                      {detailData?.closeTime?.map((closeTime: string) => {
                        return <span key={uuidv4()}>{closeTime}</span>;
                      })}
                    </S.OpeningHoursBox>
                  </S.OpeningHoursWrap>
                </S.InfoTr>
              </S.InfoTbody>
              <S.InfoTbody>
                <S.InfoTr>
                  <S.InfoTitleText>주소</S.InfoTitleText>
                  <S.InfoContentText>{detailData?.address}</S.InfoContentText>
                </S.InfoTr>
              </S.InfoTbody>
              <S.InfoTbody>
                <S.InfoTr>
                  <S.InfoTitleText>날씨</S.InfoTitleText>
                  <S.InfoContentText>
                    <BsFillSunFill />
                  </S.InfoContentText>
                </S.InfoTr>
              </S.InfoTbody>
              <S.InfoTbody>
                <S.InfoTr>
                  <S.InfoTitleText>스토어 설명</S.InfoTitleText>
                  <S.InfoContentText>{detailData?.explain}</S.InfoContentText>
                </S.InfoTr>
              </S.InfoTbody>
              <S.InfoTbody>
                <S.InfoTr>
                  <S.InfoTitleText>SNS계정</S.InfoTitleText>
                  <S.InfoContentText>
                    <S.SnsLinkWrap>
                      <Link
                        to={detailData?.sns}
                        target="_blank"
                        style={{ color: 'black' }}
                      >
                        <BsInstagram />
                      </Link>
                    </S.SnsLinkWrap>
                    <S.SnsLinkWrap>
                      <Link
                        to={detailData?.web}
                        target="_blank"
                        style={{ color: 'black' }}
                      >
                        <BsGlobe />
                      </Link>
                    </S.SnsLinkWrap>
                  </S.InfoContentText>
                </S.InfoTr>
              </S.InfoTbody>
              <S.InfoTbody>
                <S.InfoTr>
                  <S.InfoTitleText>카테고리</S.InfoTitleText>
                  <S.InfoContentText>{detailData?.item}</S.InfoContentText>
                </S.InfoTr>
              </S.InfoTbody>
            </S.InfoTable>
          </S.InfoContentWrap>
        </S.DetailInfoContent>
      </S.DetailContainer>
      {/* 하단 선 */}
      <S.Hr />
      {/* 좋아요/별로에요 이모티콘 컴포넌트 */}
      <StoreEmoji detailData={detailData} />
    </S.StoreDetailInfoWrap>
  );
};

export default StoreDetailInfo;
