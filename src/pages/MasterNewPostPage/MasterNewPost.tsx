import React from 'react';
import * as S from './style';
import { BiImageAdd } from 'react-icons/bi';

const MasterNewPost = () => {
  return (
    <S.NewPostWrap>
      <S.NewPostTitle>새 게시물 작성</S.NewPostTitle>
      <S.NewPostContainer>
        <S.PostGrid>
          <S.PostTitle>제보 제목</S.PostTitle>
          <S.TitleInput type="text" placeholder="제목"/>
        </S.PostGrid>
        <S.PostGrid>
          <S.PostTitle>주소</S.PostTitle>
          <S.TitleInput
            type="text"
            placeholder="(ex: 서울특별시 성동구 성수동)"
          />
        </S.PostGrid>
        <S.TreeGridBox>
          <S.PostTitle>기간</S.PostTitle>
          <S.TitleInput
            style={{ width: 200, marginRight: '50px' }}
            type="date"
            data-placeholder='시작 일자'
          />
          <S.TitleInput 
          style={{ width: 200 }} 
          type="date" 
          data-placeholder='종료 일자'
          />
        </S.TreeGridBox>
        <S.TreeGridBox>
          <S.PostTitle>
            영업시간
            <div>(월~금)</div>
          </S.PostTitle>
          <S.TitleInput
            style={{ width: 200 }}
            type="text"
            placeholder="오픈시간"
          />
          <S.TitleInput
            style={{ width: 200 }}
            type="text"
            placeholder="마감시간"
          />
        </S.TreeGridBox>
        <S.TreeGridBox>
          <S.PostTitle>
            영업시간
            <div>(주말)</div>
          </S.PostTitle>
          <S.TitleInput
            style={{ width: 200 }}
            type="text"
            placeholder="오픈시간"
          />
          <S.TitleInput
            style={{ width: 200 }}
            type="text"
            placeholder="마감시간"
          />
        </S.TreeGridBox>
        <S.PostGrid>
          <S.PostTitle>특이사항</S.PostTitle>
          <S.TitleInput
            style={{ height: '60px' }}
            type="text"
            placeholder="특이사항을 입력해 주세요. (ex:월요일 휴무, 금요일만 20시 마감)"
          />
        </S.PostGrid>
        <S.TreeGridBox>
          <S.PostTitle>SNS</S.PostTitle>
          <S.TitleInput
            style={{ width: 300 }}
            type="text"
            placeholder="공식 SNS나 웹사이트 주소를 입력해 주세요."
          />
          <S.TitleInput
            style={{ width: 300 }}
            type="text"
            placeholder="공식 SNS나 웹사이트 주소를 입력해 주세요."
          />
        </S.TreeGridBox>
        <S.PostGrid>
          <S.PostTitle>카테고리</S.PostTitle>
          <S.TitleInput style={{ width: 300 }} type="text" placeholder='카테고리를 입력해 주세요.'/>
        </S.PostGrid>
        <S.PostGrid>
          <S.PostTitle>이미지</S.PostTitle>
          <S.ImgLabel htmlFor="newPostImg">
            <BiImageAdd style={{fontSize:'30px'}} />
            {/* {imgFile && (
              <img src={imgFile} style={{ width: 150, height: 150 }} />
            )} */}
          </S.ImgLabel>
          <input
            type="file"
            accept="image/*"
            id="newPostImg"
            style={{ display: 'none' }}
          />
        </S.PostGrid>
        <S.BtnBox>
          <S.CancleAddBtn>취소</S.CancleAddBtn>
          <S.CancleAddBtn type="submit">작성하기</S.CancleAddBtn>
        </S.BtnBox>
      </S.NewPostContainer>
    </S.NewPostWrap>
  );
};

export default MasterNewPost;

// import { BsInstagram, BsGlobe, BsFillSunFill } from 'react-icons/bs';
// <BsInstagram />
// <BsGlobe />
