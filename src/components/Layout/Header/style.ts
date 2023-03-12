import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';
import { FaBars } from 'react-icons/fa';
import { BsMapFill } from 'react-icons/bs';
import mapGreen from '../../../assets/Img/mapPin=green.svg';
import mapHover from '../../../assets/Img/mapPin=orange.svg';

export const Wrap = styled.div`
  max-width: 1040px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 840px) {
    padding: 0 10px;
  }
`;

export const Title = styled.img`
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    opacity: 0;
  }
`;

export const DummyBox = styled.div``;

export const BtnWrap = styled.div`
  width: 700px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
  &.NavOn {
    background-color: ${COLORS.gray1};
    top: 68px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    right: 0px;
    gap: 50px;
    width: 100%;
    height: 100vh;
    z-index: 999;
    margin-left: 50px;
  }
  &.NavOff {
    right: -300px;
  }
  @media screen and (max-width: 840px) {
    display: none;
    gap: 0px;
  }
`;

export const CategoryBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -8px;
  border: none;
  background-color: transparent;
  color: ${COLORS.black};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  @media screen and (max-width: 840px) {
    color: ${COLORS.white};
    top: 30px;
  }
`;

export const MapBtn = styled(CategoryBtn)`
  @media screen and (max-width: 840px) {
    color: ${COLORS.white};
  }
`;

// Header
export const MenuIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const MobileMenuContainer = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 840px) {
    display: flex;
  }
`;

export const MenuIcon = styled(FaBars)`
  font-size: 20px;
  display: none;
  @media screen and (max-width: 840px) {
    display: inline;
  }
`;

export const HoverBox = styled.div`
  width: 100px;
  position: relative;
  transition: opacity 0.2s linear;
  transition: transform 0.3s ease-out;

  &:hover .TitleImg {
    opacity: 1;
    transform: scale(1.2);
  }
  &:hover .title {
    opacity: 0;
  }
  @media screen and (max-width: 740px) {
    width: 260px;
    &:hover .TitleImg {
      transform: none;
    }
  }
`;

export const TitleImg = styled(Title)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 40px;
  opacity: 0;
`;

export const BtnBox = styled.div`
  position: relative;
`;

export const TextBackground = styled.div`
  cursor: pointer;
  /* width: 150px; */
  height: 20px;
  background-color: ${COLORS.yellow1};
  box-sizing: border-box;
  padding-left: 10px;
  border-radius: 12px;
  &:hover {
    background-color: ${COLORS.orange2};
  }
  @media screen and (max-width: 840px) {
    padding-top: 50px;
    background-color: ${COLORS.black};
    &:hover {
      background-color: ${COLORS.black};
    }
  }
`;

export const MenuImageBackground = styled(TextBackground)`
  width: 39px;
  height: 39px;
  border-radius: 60px;
  top: 20px;
`;

export const MenuImageBackgroundMobile = styled(MenuImageBackground)`
  background-color: ${COLORS.yellow1};
`;

export const mapDiv = styled.div``;
export const mapPinImg = styled.div`
  width: 30px;
  height: 36px;
  cursor: pointer;
  background-image: url(${mapGreen});
  background-repeat: no-repeat;
  &:hover {
    background-image: url(${mapHover});
  }
`;
export const MenuText = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  width: 120px;
  color: ${COLORS.white};
  padding: 0 0 0 8px;
  margin-top: 40px;
`;

export const MapIcon = styled(BsMapFill)`
  cursor: pointer;
  font-size: 20px;
  position: relative;
  right: 1px;
  top: 9px;
  border: none;
`;
