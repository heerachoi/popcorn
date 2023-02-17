import styled from 'styled-components';

export const MyBookmarkReportWrap = styled.div``;

export const MyBookmarkReportContainer = styled.div`
  /* box-sizing: border-box; */
  max-width: 1040px;
  width: 100%;
  height: 620px;
  margin: 0 auto;
`;

export const MyBookmarkReportBox = styled.div`
  /* Rectangle 303 */

  box-sizing: border-box;

  position: absolute;
  width: 688px;
  height: 1084px;
  left: 580px;
  top: 220px;

  /* Grayscale/Gray3 */

  border: 1px solid #9b9b9b;
  border-radius: 8px;
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
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  background-color: transparent;
  text-align: center;
  display: block;
  border: 1px solid transparent;
  color: #323232;

  padding: 6px 100px;
  margin: 0 5px -1px 0;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-decoration: none;

  cursor: pointer;

  &:focus,
  &:active {
    background-color: #323232;
    color: white;
  }
`;

export const MyContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: beige; */
`;
