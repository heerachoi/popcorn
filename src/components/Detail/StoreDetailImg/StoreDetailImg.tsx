import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import Slider from 'react-slick';
import { uuidv4 } from '@firebase/util';

const StoreDetailImg = () => {
    const { state: detailData } = useLocation();

  return (
    <S.StoreDetailImgWrap>
      <S.DetailImgBox>
       {detailData.imgURL?.map((img:string) => (
        <S.DetailImg key={uuidv4()} src={img} />
       ))}
      </S.DetailImgBox>      
    </S.StoreDetailImgWrap>
  );
};
export default StoreDetailImg;
