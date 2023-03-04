import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const ReportWrap = styled.div`
  width: 100%;
  /* background-color: yellow; */
`;
export const ReportContainer = styled.div`
  margin-top: 24px;
`;

export const ListBox = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
`;

export const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 10px;
  /* margin-top: 10px; */
  height: 30px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
`;

export const ReportTitleText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const ReportDateText = styled.p`
  font-size: 12px;
  color: gray;
`;

export const ReportCategory = styled.p`
  font-size: 12px;
  color: gray;
`;

export const ReportStatusText = styled.p`
  font-size: 12px;
  float: right;
  color: ${COLORS.green1};
`;
