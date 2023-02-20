import styled from 'styled-components';

export const MyBookmarkReportWrap = styled.div``;

export const MyBookmarkReportContainer = styled.div`
  /* box-sizing: border-box; */
  /* max-width: 1040px;
  width: 100%;
  height: 620px;
  margin: 0 auto; */
`;

export const MyBookmarkReportBox = styled.div`
  /* Rectangle 303 */
  box-sizing: border-box;

  position: absolute;
  /* width: 60%; */
  width: 688px;
  height: 1084px;
  left: 772px;
  top: 158px;

  background: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-radius: 8px;

  padding: 0 40px;

`;
export const MyBookmarkReportTabMenu = styled.ul`
  padding: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;

`;

export const MyTitleTabBtn = styled.button`
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  display: block;
  border: none;
  color: black;
  padding: 6px 18px;
  margin: 0 5px -1px 0;
  /* border-bottom: 1px solid #9B9B9B; */
  text-decoration: none;

  cursor: pointer;
  width: 45%;
  &:hover {
    border-bottom: 3px solid #323232;
  }
`;

export const MyContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: beige; */
`;
