import React from 'react';
import * as S from './style';
import { BsEmojiSmile, BsEmojiFrown } from 'react-icons/bs';

const StoreEmoji = () => {

  // 버튼 테스트
  const iconOnClick = () => {
    alert('좋아요')
  }

  return (
    <S.EmojiWrap>
      <S.EmojiContainer>
        <S.EmojiDiv>
          <S.EmojiIconBtn onClick={iconOnClick}>
            <BsEmojiSmile />
          </S.EmojiIconBtn>
          <S.EmojiText>좋아요</S.EmojiText>
          <S.EmojiText>32</S.EmojiText>
        </S.EmojiDiv>
        <S.EmojiDiv>
          <S.EmojiIconBtn>
            <BsEmojiFrown />
          </S.EmojiIconBtn>
          <S.EmojiText>별로에요</S.EmojiText>
          <S.EmojiText>5</S.EmojiText>
        </S.EmojiDiv>
      </S.EmojiContainer>
    </S.EmojiWrap>
  );
};

export default StoreEmoji;
{
  /* <S.SideTitleIconText>
              <S.SideTitleIcon>12</S.SideTitleIcon>
              <S.SideTitleText>조회수</S.SideTitleText>
            </S.SideTitleIconText> */
}
