import styled from 'styled-components';

// BookMarkList.tsx

export const BookMarkContainer = styled.div`
  /* overflow: scroll; */
  /* background-color: yellowgreen; */
`;

export const BookMarkCard = styled.div`
  display: inline-block;
  /* position: absolute; */
  width: 296px;
  height: 458px;
  left: 0px;
  top: 0px;

  background: #ffffff;
  border: 1px solid #a6a6a6;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px;
`;

export const BookMarkThumbnail = styled.div`
  position: relative;
  width: 296px;
  height: 296.46px;
  left: 0px;
  right: 0px;
  top: 0%;
  bottom: 35.27%;

  /* Grayscale/Gray5 */

  /* background: #d9d9d9; */
  border-radius: 8px 8px 0px 0px;
  background-color: #d9d9d9;
`;

export const BookMarkIcon = styled.div`
  position: absolute;
  margin-left: 260px;
`;

export const BookMarkCardTitle = styled.p`
  left: 20px;
  right: 27px;
  top: 67.83%;
  bottom: 22.87%;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #323232;
  margin-left: 8%;
`;

export const BookMarkCardDate = styled.p`
  width: 178px;
  left: 20px;
  top: 79.48%;
  bottom: 16.81%;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #9b9b9b;
  margin-left: 8%;
`;

export const BookMarkCardFilterBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 16px;
  gap: 8px;

  width: 22%;
  height: 22px;
  left: 20px;
  bottom: 20px;

  border: 1px solid #a6a6a6;
  border-radius: 20px;
  cursor: pointer;
  background-color: transparent;
  margin-left: 8%;

  &:hover {
    background-color: #ffeb62;
  }
`;

export const BookMarkCardFilterTxt = styled.span`
  /* 마감임박 */

  width: 50px;
  height: 14px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  /* Grayscale/Gray3 */

  color: #9b9b9b;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin-left: -10px;
`;
