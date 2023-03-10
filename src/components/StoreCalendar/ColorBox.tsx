import React from 'react'
import * as S from './style';
import COLORS from '../../assets/CSS/colors';

 const categoryColorList = [
  { category: '패션', color: `${COLORS.orange2}`},
  { category: '식음료', color: `${COLORS.green1}`},
  { category: '캐릭터', color: `${COLORS.yellow4}`},
  { category: '소품', color: `${COLORS.blue1}`},
  { category: '주류', color: `${COLORS.pink}`},
  { category: '기타', color: `${COLORS.blue3}`},
];

const ColorBox = () => {
  return (
    <>
    <S.ColorInformationContainer>
      {categoryColorList.map((item, index) => (
                  <S.ColorInformationWrapper key={index} color={item.color}>
                    <S.CategoryColor style={{backgroundColor:`${item.color}`}}/>
                    <S.CategoryTitle style={{color:`${item.color}`}}>{item.category}</S.CategoryTitle>
                  </S.ColorInformationWrapper>
                ))}          
    </S.ColorInformationContainer>
 </>
  )
}

export default ColorBox
