import React from 'react';
import { useQuery } from 'react-query';
import { getNewStoreReport } from '../../../services/api';
import * as S from './style';


const StoreEmoji: any = () => {
  const { data } = useQuery('newStores', getNewStoreReport)
  console.log('data',data);
  // 버튼 테스트
  const iconOnClick = () => {
    alert('좋아요');
  };

  return (
    <S.EmojiWrap>
      <S.EmojiContainer>
        <S.EmojiDiv>
          <S.EmojiIconBtn onClick={iconOnClick}>
            <S.LikeImg src={require('../../../assets/Logo/like.png')} />
          </S.EmojiIconBtn>
          <S.EmojiText>좋아요</S.EmojiText>
          <S.EmojiText>32</S.EmojiText>
        </S.EmojiDiv>
        <S.EmojiDiv>
          <S.EmojiIconBtn>
            <S.LikeImg src={require('../../../assets/Logo/hate.png')} />
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
