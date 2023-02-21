import styled from 'styled-components';

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
  margin-bottom: 52px;
`;

export const EmojiDiv = styled.div`
  margin: 0 8%;

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

export const TextBackground = styled.div`
  width: 70px;
  height: 12px;
  background-color: #ffeb62;
  position: absolute;
  box-sizing: border-box;
  padding-left: 18px;
  border-radius: 12px;
  top: 1250px;
  /* right: 808px;
  top: 110px; */
`;

export const EmojiText = styled.span`
  margin-top: 12px;
  position: relative;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
