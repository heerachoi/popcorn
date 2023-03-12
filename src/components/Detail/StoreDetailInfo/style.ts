import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const StoreDetailInfoWrap = styled.div`
  max-width: 1040px;
  width: 100vw;
  margin: 0 auto;
  margin-top: 48px;
  padding: 0 10px;
  @media screen and (max-width: 700px) {
    margin-top: 0px;
    padding: 0;
  }
`;

export const DetailContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-bottom: 1px solid ${COLORS.gray7};
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
  color: ${COLORS.gray1};
  @media screen and (max-width: 700px) {
    font-size: 18px;
    margin-left: 10px;
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
    border-bottom: 1px solid ${COLORS.gray7};
    margin: 0;
  }
`;

export const SideTitleIconText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;
`;

export const BookmarkClick = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const BookMarkImg = styled.img`
  width: 20px;
  margin-bottom: 5px;
`;

export const SideTitleIcon = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  margin-bottom: 5px;
  color: ${COLORS.gray5};
  cursor: pointer;
`;

export const ViewCount = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 4px;
  color: ${COLORS.gray5};
`;

export const ReserveImg = styled.img`
  width: 20px;
`;

export const SideTitleText = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.gray1};
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

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 15px;
    margin-left: 15px;
  }
`;

export const InfoTitle = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.orange1};
  width: 170px;
`;

export const InfoContentText = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.gray1};
  max-width: 80%;
  width: 100%;
  margin-right: 30px;
`;

export const InfoContentCategory = styled.span`
  padding: 4px 16px;
  height: 21px;
  max-width: 50px;
  background: ${COLORS.gray3};
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 700px) {
    min-width: 35px;
    padding: 4px;
    display: flex;
    justify-content: center;
  }
`;

export const SnsLinkWrap = styled.p``;
export const SnsImg = styled.img`
  width: 25px;
`;

export const OpeningHoursWrap = styled.div`
  display: flex;
`;

export const OpeningHoursBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.gray1};
  gap: 5px;
`;
