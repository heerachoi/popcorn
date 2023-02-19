import { uuidv4 } from '@firebase/util';
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
import { useState } from 'react';
import axios from 'axios';
import { auth } from '../../../services/firebase';

interface Props {
  detailData: any;
}

const StoreDetailInfo = ({ detailData }: Props) => {
  const initialState = {
    id: 123,
    storeId: '',
    userId: '',
    notification: false,
    title: '',
    open: '',
    close: '',
    imgURL: '',
  };

  // 여기서 버튼 클릭하면 추가되게
  const [newBookmarkClick, setNewBookmarkClick] = useState(initialState);
  // 북마크 true, false
  const [bookmarkClick, setBookmarkClick] = useState(false);

  const NewBookmark = {
    id: '',
    storeId: detailData.id,
    userId: auth.currentUser?.uid,
    notification: false,
    title: detailData.title,
    open: detailData.open,
    close: detailData.close,
    imgURL: detailData.imgURL[0],
  };

  // 클릭했을 때
  const postBookmarkHandler = async () => {
    // json서버를 열어야함
    await axios.post(`http://localhost:3011/BookMarkList`, NewBookmark);
    setNewBookmarkClick(initialState);
    alert('북마크에 추가됐어요!');
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
                <S.SideTitleIcon>12</S.SideTitleIcon>
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

                <S.BookmarkClick onClick={postBookmarkHandler}>
                  <S.SideTitleIcon>
                    <FaHeart />
                  </S.SideTitleIcon>
                  <S.SideTitleText>북마크</S.SideTitleText>
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
