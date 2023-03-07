import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';

export const ReportListWrap = styled.div``;
export const ReportListContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleBackground = styled.div`
  width: 340px;
  height: 25px;
  background-color: ${COLORS.green2};
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  text-align: center;

  @media screen and (max-width: 700px){
    width: 280px;
    height: 20px;
  }
`;

export const StoreReportTitleBackground = styled.div`
  width: 420px;
  height: 25px;
  background-color: ${COLORS.green2};
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  text-align: center;

  @media screen and (max-width: 700px) {
    width: 320px;
    height: 20px;
  }
  
`;

export const ReportTitleBox = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.p`
  position: relative;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  top: -15px;

  @media screen and (max-width: 700px) {
    font-size: 25px;
  }
`;

export const ReportContentListWrap = styled.div`
  margin-top: 49px;
  width: 100%;
`;

export const GridBox = styled.div`
  border: 1px solid ${COLORS.gray7};
  border-radius: 10px;
  background: ${COLORS.gray8};
  min-height: 700px;
`;

export const Grid = styled.div`
  padding: 13px;
  display: grid;
  grid-template-columns: 170px 1fr;
  align-items: start;

  @media screen and (max-width: 700px) {
   grid-template-columns: 150px 1fr;
  }
`;

export const ReportTitle = styled.div`
  margin: 10px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray1};
`;

export const ReportContentText = styled.div`
  margin: 10px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray1};

  img {
    width: 150px;
    height: 150px;
  }

  
`;

export const ReportImg = styled.img`
  width: 150px;
  height: 150px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancleBtn = styled.button`
  border: 1px solid ${COLORS.gray7};
  border-radius: 8px;
  margin: 15px;
  margin-bottom: 22px;
  width: 200px;
  height: 60px;

  background-color: ${COLORS.gray8};
  color: ${COLORS.gray5};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  cursor: pointer;

  &:hover {
    color: ${COLORS.gray5};
    background-color: ${COLORS.gray7};
  }
`;

export const CheckBtn = styled.button`
  border: 1px solid ${COLORS.gray5};
  border-radius: 8px;
  margin: 15px;
  margin-bottom: 22px;
  width: 200px;
  height: 60px;

  background-color: ${COLORS.gray6};
  color: white;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.gray3};
  }
`;
