import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';

export const MasterDetailPageWrap = styled.div``;

export const MasterDetailContainer = styled.div``;

export const TabMenu = styled.ul`
  padding: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

export const MenuTitleTabBtn = styled.button`
  background-color: #f6f6f6;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  display: block;
  border: 1px solid #e0e0e0;
  color: ${COLORS.black};
  padding: 6px 18px;
  margin: 0 5px -1px 0;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-decoration: none;

  cursor: pointer;

  &:focus,
  &:active {
    background-color: navy;
    color: ${COLORS.white};
  }
`;

export const ContentBox = styled.div``;
