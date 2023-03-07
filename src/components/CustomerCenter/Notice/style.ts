import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const NoticeWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
    height: 80px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: ${COLORS.gray5};
  }
`;

export const NoticeListBox = styled.div`
  width: 100%;
  margin-bottom: 15px;
  border-bottom: 1px solid ${COLORS.gray5};
  
`;

export const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding:  10px;
  height: 35px;

  
`;

export const ListText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray1};
  @media screen and (max-width: 1040px) {
    font-size: 14px;
  }
`;
