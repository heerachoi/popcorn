import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';

export const ContentWrap = styled.div`
  height: 618px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${COLORS.gray7};
  }
`;

export const ListContainer = styled.div``;

export const ListBox = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid ${COLORS.gray5};
  &:hover {
    cursor: pointer;
  }
`;

export const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 10px;
  height: 35px;
`;

export const TitleText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${COLORS.gray1};
  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export const DateText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  color: ${COLORS.gray1};
  
`;

export const NameText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  color: ${COLORS.gray5};
`;

export const StatusText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  float: right;
  color: ${COLORS.green1};
`;
