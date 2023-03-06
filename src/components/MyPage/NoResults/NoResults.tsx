import React from 'react';
import * as S from './style';
import PleaseReport from '../../../assets/Img/Feel=Wow, Color=green.svg';
const NoResults = () => {
  return (
    <S.ResultWarp>
      <S.ResultContainer>
        <S.ResultImg src={PleaseReport} />
        <S.ResultText>제보할 내용이 있다면 제보해 주세요!</S.ResultText>
      </S.ResultContainer>
    </S.ResultWarp>
  );
};

export default NoResults;
