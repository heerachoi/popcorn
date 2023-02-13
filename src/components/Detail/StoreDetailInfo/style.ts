import styled from 'styled-components';

export const StoreDetailInfoWrap = styled.div``;

export const TitleWrap = styled.div``;
export const Title = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
`;

export const ImgWrap = styled.div``;
export const Img = styled.img`
  width: 300px;
  height: 300px;
`;

export const OperationPeriodWrap = styled.div``;
export const OperationPeriodTitle = styled(Title)`
  font-size: 20px;
`;
export const OperationPeriodText = styled(OperationPeriodTitle)``;

export const OpeningHoursWrap = styled.div`
  display: flex;
`;
export const OpeningHoursBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OpeningHoursTitle = styled(OperationPeriodTitle)``;
export const OpeningHoursText = styled(OperationPeriodTitle)``;

export const AddressWrap = styled.div``;
export const AddressTitle = styled(OperationPeriodTitle)``;
export const AddressText = styled(OperationPeriodTitle)``;

export const ExplainWrap = styled.div``;
export const ExplainTitle = styled(OperationPeriodTitle)``;
export const ExplainText = styled(OperationPeriodTitle)``;

export const SNSWrap = styled.div``;
export const SNSTitle = styled(OperationPeriodTitle)``;
export const SNSText = styled(OperationPeriodTitle)``;

export const BrandPageWrap = styled.div``;
export const BrandTitle = styled(OperationPeriodTitle)``;
export const BrandText = styled(OperationPeriodTitle)``;
