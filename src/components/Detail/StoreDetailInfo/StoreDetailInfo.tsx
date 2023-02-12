import { uuidv4 } from '@firebase/util';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DetailWeather from './DetailWeather';
import KakaoShare from './KakaoShare';
import * as S from './style';

const StoreDetailInfo = () => {
  const { state: detailData } = useLocation();

  return (
    <S.StoreDetailInfoWrap>
      <S.TitleWrap>
        <S.Title>{detailData.title}</S.Title>
      </S.TitleWrap>
      <S.ImgWrap>
        {detailData.imgURL?.map((img: string) => (
          <S.Img key={uuidv4()} src={img} alt="사진" />
        ))}
      </S.ImgWrap>
      <S.OperationPeriodWrap>
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
            <S.OpeningHoursText key={uuidv4()}> {closeTime}</S.OpeningHoursText>
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
      </S.BrandPageWrap>
      <S.BrandPageWrap>
        <S.BrandTitle> 예약 </S.BrandTitle>{' '}
        <S.BrandText>
          <Link to={detailData.reserveURL} target="_blank">
            예약 홈페이지
          </Link>
        </S.BrandText>
      </S.BrandPageWrap>
      <KakaoShare detailData={detailData} />
      <DetailWeather />
    </S.StoreDetailInfoWrap>
  );
};

export default StoreDetailInfo;
