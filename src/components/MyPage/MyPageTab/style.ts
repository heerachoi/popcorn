import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';


export const MyBookmarkReportWrap = styled.div``;

export const MyBookmarkReportContainer = styled.div``;

export const MyBookmarkReportBox = styled.div` 
  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 0 15px;
`;

export const MyBookmarkReportTabMenu = styled.ul`
  padding: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #9b9b9b;
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
    padding-bottom: 12.5px;
    color: #00C113;
    border-bottom: 2px solid #00C113;
  }
`;

export const MyContentBox = styled.div`
  height: 800px;
  overflow: scroll;
`;
