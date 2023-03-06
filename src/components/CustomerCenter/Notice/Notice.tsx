import React from 'react'
import * as S from './style'

const Notice = () => {
  return (
    <S.NoticeWrap>
        <S.NoticeListBox>
            <S.ListContent>
                <S.ListText>POPCORN 홈페이지 오픈🎉</S.ListText>
                <S.ListText>2023.03.05</S.ListText>
            </S.ListContent>
        </S.NoticeListBox>
    </S.NoticeWrap>
  )
}

export default Notice