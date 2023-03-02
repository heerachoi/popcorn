import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const StoreDetailInfoWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  margin-top: 48px;
  padding: 0 10px;
  @media screen and (max-width: 700px) {
    margin-top: 0px;
  }
`;

export const DetailContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #D9D9D9;
  padding-bottom: 36px;
`;

export const ImgWrap = styled.div``;

export const DetailInfoContent = styled.section`
  width: 100%;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  /* background-color: beige; */
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 27px;
    margin-top: 16px;
  }
`;

export const Title = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 800;
  font-size: 28px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

export const SideTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 20px;
  @media screen and (max-width: 700px) {
    justify-content: space-around;
    padding-bottom: 16px;
    border-bottom: 1px solid #D9D9D9;
  }
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
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

export const InfoContentWrap = styled.div`
  margin-top: 30px;
`;

export const InfoContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InfoSubBox = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: aliceblue; */
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap:15px;
  }
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
  /* position: relative; */
  font-family: 'Apple SD Gothic Neo';
  /* font-style: normal; */
  font-weight: 700;
  font-size: 16px;
  width: 170px;
`;

export const InfoContentText = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  font-weight: 500;
  max-width: 80%;
  width: 100%;
  margin-right: 30px;
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

// export const Hr = styled.hr`
//   max-width: 1040px;
//   width: 100%;
// `;

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
