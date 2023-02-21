import styled from 'styled-components';

export const ReportListWrap = styled.div``;
export const ReportListContainer = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleBackground = styled.div`
  width: 340px;
  height: 30px;
  background-color: #ffeb62;
  position: absolute;
  box-sizing: border-box;
  padding-left: 20px;
  border-radius: 12px;
  right: 808px;
  top: 110px;
`;

export const ReportTitleBox = styled.div`
  /* position: relative; */
  margin-top: 53px;
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
`;

export const ReportContentListWrap = styled.div`
  margin-top: 47px;
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
  align-items: baseline;
`;

export const ReportTitle = styled.div`
  text-align: center;
  margin: 10px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-size: 17px;
  font-weight: bold;
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

export const CancleBtn = styled.button`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  margin: 15px;
  margin-bottom: 22px;
  width: 200px;
  height: 60px;

  background-color: #f5f5f5;
  color: #9b9b9b;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  cursor: pointer;

  &:hover {
    color: #9b9b9b;
    background-color: #d9d9d9;
  }
`;

export const CheckBtn = styled.button`
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  margin: 15px;
  margin-bottom: 22px;
  width: 200px;
  height: 60px;

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
    background-color: #676767;
  }
`;
