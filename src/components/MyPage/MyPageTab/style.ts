import styled from 'styled-components';

export const MyBookmarkReportWrap = styled.div``;

export const MyBookmarkReportContainer = styled.div``;

export const MyBookmarkReportBox = styled.div`
  position: absolute;
  /* width: 60%; */
  width: 50%;
  height: 1084px;
  left: 36%;
  top: 150px;

  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 8px;

  padding: 0 40px;
  /* overflow: auto;

&::-webkit-scrollbar {
  width: 5px;
}
&::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: #ccc;
} */
`;

export const MyBookmarkReportTabMenu = styled.ul`
  padding: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  border-bottom: 2px solid #9b9b9b;
`;

export const MyTitleTabTitleBox = styled.div``;
export const MyTitleTabBtn = styled.button`
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  display: block;
  border: none;
  color: black;
  padding-bottom: 10px;
  margin-top: 13px;
  text-decoration: none;

  cursor: pointer;
  width: 50%;
  &.active {
    color: #00c113;
    border-bottom: 2px solid #00c113;
  }
`;

export const MyContentBox = styled.div`
`;
