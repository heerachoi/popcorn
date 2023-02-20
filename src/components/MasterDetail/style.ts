import styled from 'styled-components';

export const ReportListWrap = styled.div``;
export const ReportListContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`;
export const ReportTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 32px;
  }
`;

export const ReportContentListWrap = styled.div`
  margin-top: 10px;
  border-radius: 8px;
  width: 100%;
`;

export const GridBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #f5f5f5;
  max-height: 900px;
`;

export const Grid = styled.div`
  padding: 13px;
  display: grid;
  grid-template-columns: 170px 1fr;
`;

export const ReportTitle = styled.div`
  text-align: center;
  margin: 10px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
`;

export const ReportContentText = styled.div`
  margin: 10px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-size: 14px;

  img {
    width: 150px;
    height: 150px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBtn = styled.button`
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  margin: 15px;
  width: 150px;
  height: 50px;

  background-color: #bdbdbd;
  color: white;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: #9b9b9b;
  }
`;
