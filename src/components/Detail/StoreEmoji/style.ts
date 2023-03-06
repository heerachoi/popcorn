import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

export const EmojiWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`;

export const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const EmojiDiv = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LikeHateImg = styled.img`
  width: 128px;

  &:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.2);
  }
`;

export const EmojiIconBtn = styled.button`
  font-size: 40px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const TextBackgroundContainer = styled.div`
`

export const TextBackgroundOne = styled.div`
  width: 64px;
  height: 18px;
  background-color: ${COLORS.orange3};
  position: absolute;
  border-radius: 12px;
  margin-top:-20px;
  margin-left: -11px;
`;

export const TextBackgroundTwo = styled(TextBackgroundOne)`
  width: 77px;
`


export const EmojiText = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  z-index: 999;
  position: relative;
  top:-8px;
  margin-bottom: 24px;
  
`;

export const countText = styled.span`
  margin-top: 5px;
  font-family: 'Apple SD Gothic Neo';
  /* font-style: normal; */
  font-weight: 700;
  font-size: 16px;
  /* line-height: 24px; */
  color: ${COLORS.gray5};
`;
