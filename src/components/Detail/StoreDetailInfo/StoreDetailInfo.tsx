import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import StoreDetailImg from '../StoreDetailImg/StoreDetailImg';
import DetailWeather from './DetailWeather';
import KakaoShare from './KakaoShare';
import * as S from './style';
import { TbClock } from 'react-icons/tb';
import { MdIosShare } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { BsInstagram, BsGlobe, BsFillSunFill } from 'react-icons/bs';
import StoreEmoji from '../StoreEmoji/StoreEmoji';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from '../../../services/firebase';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  detailData: any;
}
// detailData로 이미 store의 데이터를 불러오고 있다.
// detailData = popupStore.json 데이터 객체 하나
const StoreDetailInfo = ({ detailData }: Props) => {
  const initialState = {
    id: '',
    storeId: '',
    userId: '',
    notification: false,
    title: '',
    open: '',
    close: '',
    imgURL: '',
    status: false,
  };

  // 여기서 버튼 클릭하면 추가되게
  const [newBookmarkClick, setNewBookmarkClick] = useState(initialState);
  // 북마크 true, false 상태값
  const [bookmarkDeleteBtnClick, setBookmarkDeleteBtnClick] = useState(true);
  // 북마크 삭제하고 삭제된 북마크 빼고 리스트 불러오기
  // const [bookmarkDeleteClickList, setBookmarkDeleteClickList] =
  //   useState(initialState);

  const NewBookmark = {
    id: uuidv4(),
    storeId: detailData.id,
    userId: auth.currentUser?.uid,
    notification: false,
    title: detailData.title,
    open: detailData.open,
    close: detailData.close,
    imgURL: detailData.imgURL[0],
    status: false, // 북마크의 바뀐 상태 true, false
  };

  // 북마크 리스트에 있는 북마크 db
  // bookmarkData.id = 북마크 리스트에 있는 스토어의 아이디
  const [bookmarkData, setBookmarkData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log('bookmarkData', bookmarkData);

  const fetchBookmarks = async () => {
    const { data } = await axios.get('http://localhost:3011/BookMarkList');
    setBookmarkData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  // const bookmark = bookmarkData?.find((bm: any) => {
  //   return bm.storeId === detailData.id && bm.userId === auth.currentUser?.uid;
  // });
  // console.log('bookmark!!!!!!!!!!!!!!!!!!!!', bookmark);

  // const bookmatkListStatusChangeHandler = async () => {
  //   await axios.patch(`http://localhost:3011/BookMarkList/${bookmark.id}`, {
  //     status: !bookmark.status,
  //   });

  //   axios.get('http://localhost:3011/BookMarkList');
  // };

  // 클릭했을 때 북마크에 추가 + 삭제
  // bookmarkData.id = 북마크리스트에 있는 스토어의 uuid
  // detailData.id = 현재 보고 있는 스토어 아이디
  const postBookmarkHandler = async () => {
    // auth.currentUser?.uid 얘가 있으면
    if (auth.currentUser?.uid) {
      bookmarkData.map((bookmark: any) => {
        console.log('bookmark.storeId', bookmark.storeId);
        console.log('detailData.id', detailData.id);
        console.log('bookmark.userId', bookmark.userId);
        console.log('auth.currentUser?.uid', auth.currentUser?.uid);
        if (bookmark.storeId !== detailData.id) {
          axios.post(`http://localhost:3011/BookMarkList`, NewBookmark);
          try {
            setNewBookmarkClick(initialState);
          } catch (err) {
            console.log('92번!!!!!!!');
            console.log('err', err);
          }
        } else {
          if (bookmark.userId !== auth.currentUser?.uid) {
            axios.post(`http://localhost:3011/BookMarkList`, NewBookmark);
            try {
              setNewBookmarkClick(initialState);
            } catch (err) {
              console.log('92번!!!!!!!');
              console.log('err', err);
            }
          } else {
            // const bookmark = bookmarkData?.find((bm: any) => {
            //   return (
            //     bm.storeId === detailData.id &&
            //     bm.userId === auth.currentUser?.uid
            //   );
            // });
            axios.delete(`http://localhost:3011/BookMarkList/${bookmark.id}`);
            try {
              console.log('뭐양');
            } catch (err) {
              console.log('err', err);
            }
          }
        }
      });
    } else {
      alert('로그인이 필요합니다!');
    }
  };
  // 보내면 이 유저가 쓴것 , 유저가 쓴 북마크데이터
  // 그 중에서 detail아이디랑 일치하는 게 있는지 확인하고
  // 없으면 추가, 있으면 제거
  // axios.post(`http://localhost:3011/BookMarkList`, NewBookmark);
  //   추가를 해주면 set을 해줘야함
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
                    {bookmarkDeleteBtnClick ? (
                      <BsBookmark />
                    ) : (
                      <BsBookmarkFill />
                    )}
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
      <StoreEmoji />
    </S.StoreDetailInfoWrap>
  );
};

export default StoreDetailInfo;

{
  /* <S.OperationPeriodWrap>
              <S.OperationPeriodTitle>운영기간 : </S.OperationPeriodTitle>
              <S.OperationPeriodText>
                {`${detailData.open} ~ ${detailData.close}`}
              </S.OperationPeriodText>
            </S.OperationPeriodWrap>
            <S.OpeningHoursWrap>
              <S.OpeningHoursTitle>운영시간 : </S.OpeningHoursTitle>
              <S.OpeningHoursBox>
                {detailData.openingTime?.map((openTime: string) => (
                  <S.OpeningHoursText key={uuidv4()}>
                    {openTime + '-'}
                  </S.OpeningHoursText>
                ))}
              </S.OpeningHoursBox>
              <S.OpeningHoursBox>
                {detailData.closeTime?.map((closeTime: string) => (
                  <S.OpeningHoursText key={uuidv4()}>
                    {' '}
                    {closeTime}
                  </S.OpeningHoursText>
                ))}
              </S.OpeningHoursBox>
            </S.OpeningHoursWrap>
            <S.AddressWrap>
              <S.AddressTitle>위치 : </S.AddressTitle>
              <S.AddressText>{detailData.address}</S.AddressText>
            </S.AddressWrap>
            <S.ExplainWrap>
              <S.ExplainTitle>스토어 설명 :</S.ExplainTitle>
              <S.ExplainText> {detailData.explain}</S.ExplainText>
            </S.ExplainWrap>
            <S.SNSWrap>
              <S.SNSTitle>sns 계정 : </S.SNSTitle>{' '}
              <S.SNSText>
                <Link to={detailData.sns} target="_blank">
                  인스타그램
                </Link>
              </S.SNSText>
            </S.SNSWrap>
            <S.BrandPageWrap>
              <S.BrandTitle>브랜드 페이지 : </S.BrandTitle>{' '}
              <S.BrandText>
                <Link to={detailData.web} target="_blank">
                  브랜드홈페이지
                </Link>
              </S.BrandText>
            </S.BrandPageWrap> */
}

{
  /* <S.BrandPageWrap>
        <S.BrandTitle>예약</S.BrandTitle>
        <S.BrandText>
          <Link to={detailData.reserveURL} target="_blank">
            예약 홈페이지
          </Link>
        </S.BrandText>
      </S.BrandPageWrap>
      <KakaoShare detailData={detailData} />
      <DetailWeather /> */
}
