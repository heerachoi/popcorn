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
`;

export const Grid = styled.div`
  padding: 13px;
  display: grid;
  grid-template-columns: 170px 1fr;
`;

export const ReportTitle = styled.div`
  text-align: center;
  margin : 10px;
  font-size: 18px;
  font-weight: 700;
  color: navy;
`;

export const ReportContentText = styled.div`
  margin: 10px ;

  img {
    width: 150px;
    height: 150px;
  }
`;

export const ButtonBox = styled.div`
  float: right;
  margin: 10px;
`;

export const CheckBtn = styled.button`
  font-size: 16px;
  font-weight: 800;
  margin: 10px;
  width: 130px;
  height: 40px;
  border-radius: 8px;

  background-color: transparent;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;
