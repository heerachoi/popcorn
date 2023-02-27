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

export const TextBackground = styled.div`
  width: 70px;
  height: 12px;
  background-color: #ffeb62;
  position: absolute;
  box-sizing: border-box;
  border-radius: 12px;
  top: 1350px;
  text-align: center;
`;

export const EmojiText = styled.span`
  position: relative;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

export const countText = styled.span`
  margin-top: 5px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #9B9B9B;
`;
