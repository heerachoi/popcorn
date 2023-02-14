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

const StoreDetailInfo = () => {
  const { state: detailData } = useLocation();

  return (
    <S.StoreDetailInfoWrap>
      <S.ImgWrap>
        {/* {detailData.imgURL?.map((img: string) => (
          <S.Img key={uuidv4()} src={img} alt="사진" />
        ))} */}
        <StoreDetailImg />
      </S.ImgWrap>

      <S.DetailInfoContent>
        <S.TitleWrap>
          <S.Title>{detailData.title}</S.Title>
          <S.SideTitleWrap>
            <S.SideTitleIconText>
              <S.SideTitleIcon>12</S.SideTitleIcon>
              <S.SideTitleText>조회수</S.SideTitleText>
            </S.SideTitleIconText>
            <S.SideTitleIconText>
              <S.SideTitleIcon>
                <TbClock />
              </S.SideTitleIcon>
              <S.SideTitleText>예약</S.SideTitleText>
            </S.SideTitleIconText>
            <S.SideTitleIconText>
              <S.SideTitleIcon>
                <MdIosShare />
              </S.SideTitleIcon>
              <S.SideTitleText>공유</S.SideTitleText>
            </S.SideTitleIconText>
            <S.SideTitleIconText>
              <S.SideTitleIcon>
                <FaHeart />
              </S.SideTitleIcon>
              <S.SideTitleText>북마크</S.SideTitleText>
            </S.SideTitleIconText>
          </S.SideTitleWrap>
        </S.TitleWrap>

        <S.InfoContentWrap>
          <S.InfoTable>
            <S.InfoTr>
              <S.InfoTitleText>운영기간</S.InfoTitleText>
              <S.InfoContentText>{`${detailData.open} ~ ${detailData.close}`}</S.InfoContentText>
            </S.InfoTr>
            <S.InfoTr>
              <S.InfoTitleText>운영시간</S.InfoTitleText>
              <S.OpeningHoursWrap>
                <S.OpeningHoursBox>
                  {detailData.openingTime?.map((openTime: string) => {
                    return <span>{openTime + '-'}</span>;
                  })}
                </S.OpeningHoursBox>
                <S.OpeningHoursBox>
                  {detailData.closeTime?.map((closeTime: string) => {
                    return <span>{closeTime}</span>;
                  })}
                </S.OpeningHoursBox>
              </S.OpeningHoursWrap>
            </S.InfoTr>
            <S.InfoTr>
              <S.InfoTitleText>주소</S.InfoTitleText>
              <S.InfoContentText>{detailData.address}</S.InfoContentText>
            </S.InfoTr>
            <S.InfoTr>
              <S.InfoTitleText>날씨</S.InfoTitleText>
              <S.InfoContentText><BsFillSunFill /></S.InfoContentText>
            </S.InfoTr>
            <S.InfoTr>
              <S.InfoTitleText>스토어 설명</S.InfoTitleText>
              <S.InfoContentText>{detailData.explain}</S.InfoContentText>
            </S.InfoTr>
            <S.InfoTr>
              <S.InfoTitleText>SNS계정</S.InfoTitleText>
              <S.InfoContentText>
                <S.SnsLinkWrap>
                  <Link to={detailData.sns} target="_blank" style={{color:'black'}}>
                    <BsInstagram />
                  </Link>
                </S.SnsLinkWrap>
                <S.SnsLinkWrap>
                  <Link to={detailData.web} target="_blank" style={{color:'black'}}>
                    <BsGlobe />
                  </Link>
                </S.SnsLinkWrap>
              </S.InfoContentText>
            </S.InfoTr>
            <S.InfoTr>
              <S.InfoTitleText>카테고리</S.InfoTitleText>
              <S.InfoContentText>{detailData.item}</S.InfoContentText>
            </S.InfoTr>
          </S.InfoTable>
        </S.InfoContentWrap>
      </S.DetailInfoContent>
      
      {/* 하단 선 */}
     <S.Hr /> 
     
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
