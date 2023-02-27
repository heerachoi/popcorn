import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const StoreDetailInfoWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  margin-top: 48px;
`;

export const DetailContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`;

export const ImgWrap = styled.div``;

export const DetailInfoContent = styled.section``;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  /* background-color: beige; */
`;

export const Title = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 800;
  font-size: 28px;
  line-height: 38px;
`;

export const SideTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SideTitleIconText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;
  cursor: pointer;
`;

export const BookmarkClick = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const SideTitleIcon = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  margin-bottom: 2px;
  color: #9b9b9b;
`;

export const ReserveImg = styled.img`
  width: 20px;
`;

export const SideTitleText = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 16px;
`;

export const InfoContentWrap = styled.div`
  /* display: flex; */
  height: 430px;
  margin-top: 30px;
`;

export const InfoContentBox = styled.div`
  display: grid;
  grid-template-columns: 130px 70%;
  grid-gap: 25px;
`;

// export const InfoTitleBackground = styled.div`
//   width: 70px;
//   height: 12px;
//   background-color: #ffeb62;
//   position: absolute;
//   box-sizing: border-box;
//   border-radius: 12px;
//   top: 800px;
//   text-align: center;
// `;

export const InfoTitle = styled.div`
  position: relative;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const InfoContentText = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  font-weight: 500;
`;

export const InfoContentCategory = styled.span`
  height: 21px;
  background: ${COLORS.gray3};
  border-radius: 20px;
  color: white;
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 4px 16px 3px;
`;

// export const InfoTable = styled.table`
//   font-family: 'Apple SD Gothic Neo';
//   font-style: normal;
//   font-size: 14px;
// `;

// export const InfoTbody = styled.tbody``;

// export const InfoTr = styled.tr``;

// export const InfoTitleText = styled.td`
//   font-weight: 800;
//   width: 130px;
//   padding: 15px 0;
// `;

export const SnsLinkWrap = styled.p``;
export const SnsImg = styled.img`
  width: 20px;
`;

export const Hr = styled.hr`
  max-width: 1040px;
  width: 100%;
`;

export const OperationPeriodWrap = styled.div``;

export const OperationPeriodTitle = styled.span`
  font-size: 17px;
`;

export const OperationPeriodText = styled.span``;

export const OpeningHoursWrap = styled.div`
  display: flex;
`;

export const OpeningHoursBox = styled.div`
  display: flex;
  flex-direction: column;
`;
