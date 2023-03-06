import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const contactUsWarp = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 465px);

  @media screen and (max-width: 1040px) {
    display: block;
  }
`;
export const cardBox = styled.div`
  width: 465px;
  height: 120px;
  /* background: yellow; */
  display: flex;
  margin-top: 48px;

  @media screen and (max-width: 1040px) {
    width: 340px;
    height: 150px;
    margin-top: 10px;
  }
`;
export const background = styled.div`
  width: 120px;
  height: 120px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.gray7};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1040px) {
   width: 100px;
   height: 100px;
  }
   
`;

export const Img = styled.img`
@media screen and (max-width: 1040px) {
   width: 65px;
   height: 65px;
  }
`;

export const TextBox = styled.div`
  margin-left: 23px;
  width: 322px;
  height: 112px;
  @media screen and (max-width: 1040px){
   width: 200px;
  }

`;

export const TitleText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${COLORS.orange6};

  @media screen and (max-width: 1040px){
    font-size: 14px;
  }

`;

export const NameText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: ${COLORS.gray1};

  @media screen and (max-width: 1040px){
    font-size: 18px;
  }
`;
export const LinkWarp = styled.div`
  margin-top: 20px;
`;
export const LinkBox = styled.div`
  display: grid;
  grid-template-columns: 90px 120px;

  @media screen and (max-width: 1040px){    
    display: block;
  }
`;
export const LinkText = styled.p`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: ${COLORS.gray5};

  @media screen and (max-width: 1040px){
    font-size: 11px;
  }
`;

export const Alink = styled.a`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  text-decoration: none;
  color: ${COLORS.gray5};

  @media screen and (max-width: 1040px){
    font-size: 10px;
  }
`;
