import React from 'react';
import * as S from './style';

const BookmarkNoResult = () => {
  return (
    <S.ResultWarp>
      <S.ResultContainer>
        <S.ResultImg
          src={require('../../../assets/Img/Feel=Heart, Color=green.png')}
        />
        <S.ResultText>마음에 드는 스토어를 북마크해 보세요!</S.ResultText>
      </S.ResultContainer>
    </S.ResultWarp>
  );
};

export default BookmarkNoResult;
