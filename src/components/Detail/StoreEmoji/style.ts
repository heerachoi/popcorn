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
  margin-bottom: 52px
`;

export const EmojiDiv = styled.div`
  margin: 0 8%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LikeImg = styled.img`
  width: 128px;
`;

export const EmojiIconBtn = styled.button`
  font-size: 40px;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const EmojiText = styled.span`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
