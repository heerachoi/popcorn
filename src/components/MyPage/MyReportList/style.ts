import styled from 'styled-components';

export const ReportWrap = styled.div``;
export const ReportContainer = styled.div`
background-color: beige;
width: 100%;
`;

export const ListBox = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
`;

export const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 10px;
  height: 40px;

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
  color: green;
`;