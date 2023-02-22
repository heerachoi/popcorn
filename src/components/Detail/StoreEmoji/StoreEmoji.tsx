import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { hateCount, likeCount, userInfo } from '../../../atoms';
import { getLikeHate, getNewStoreReport } from '../../../services/api';
import { auth } from '../../../services/firebase';
import * as S from './style';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

interface Props {
  detailData: any;
}

// 1. user 정보 불러와서 로그인 유무 확인
// 2. 로그인 O -> 버튼 활성화, 로그인 X -> 로그인 후 이용 안내
// 3. 좋아요 / 별로에요 둘 중 하나만 클릭 가능 -> 클릭한 이미지 효과 주기
// 4. 버튼 클릭 시 db에 현재 디테일 페이지의 스토어 id와 클릭한 user id, 좋아요인지 싫어요인지 올라감
// 5. 버튼 클릭 횟수 이미지 밑에 카운트 하기
// 6. 클릭한 이미지 한 번 더 클릭 시 취소하시겠습니까 안내 띄우고 db에서 삭제

const StoreEmoji: any = ({ detailData }: Props) => {
  const navigate = useNavigate();
  const setLike = useSetRecoilState(likeCount);
  const setHate = useSetRecoilState(hateCount);
  const user = useRecoilValue(userInfo);

  // likeHate db 불러오기
  const { isLoading, isError, data, error } = useQuery('likeHate', getLikeHate);
  // console.log('data', data);

  if (isLoading) {
    console.log('로딩중');
    return <p>Loading...</p>;
  }
  if (isError) {
    console.log('오류내용', error);
    return <p>Error!!!</p>;
  }
  // console.log('user.userInfomation.uid', user.userInfomation.uid);

  // likeHate DB에 있는 storeId와 현재 페이지 storeId가 같으면서
  // 현재 userId와 DB에 있는 userID가 같은 데이터 뽑아옴
  const newData = data.filter(
    (item: any) =>
      item.storeId === detailData.id && user.userInfomation.uid === item.userId,
  );
  console.log('newData', newData);

  // likeHate DB에 있는 storeId와 현재 페이지 storeId가 같으면서
  // vote가 like인 데이터만 뽑아옴
  const likes = data.filter(
    (item: any) => item.storeId === detailData.id && item.vote === 'like',
  );
  console.log('likes', likes);

  const hates = data.filter(
    (item: any) => item.storeId === detailData.id && item.vote === 'hate',
  );
  console.log('hates', hates);



  const likeHandler = async () => {       
    if (user.isLogin) {
      const newLike = {
        id: uuidv4(),
        storeId: detailData.id,
        userId: user.userInfomation.uid,
        vote: 'like',
      };
      try {
        axios.post('http://localhost:3003/likeHate', newLike);
        setLike(likes + 1);
        alert('좋아요!');
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('로그인 후 이용 가능합니다.');
      navigate('/login');
    }
  };

  const hateHandler = () => {
    if (user.isLogin) {
      const newHate = {
        id: uuidv4(),
        storeId: detailData.id,
        userId: user.userInfomation.uid,
        vote: 'hate',
      };
      try {
        axios.post('http://localhost:3003/likeHate/', newHate);
        setHate(hates + 1);
        alert('별로에요');
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('로그인 후 이용 가능합니다.');
      navigate('/login');
    }
  };

  return (
    <S.EmojiWrap>
      <S.EmojiContainer>
        <S.EmojiDiv>
          <S.EmojiIconBtn onClick={likeHandler}>
            <S.LikeHateImg src={require('../../../assets/Logo/like.png')} />
          </S.EmojiIconBtn>
          <S.TextBackground>
            <S.EmojiText>좋아요</S.EmojiText>
          </S.TextBackground>
          <S.EmojiText>{likes.length}</S.EmojiText>
        </S.EmojiDiv>
        <S.EmojiDiv>
          <S.EmojiIconBtn onClick={hateHandler}>
            <S.LikeHateImg src={require('../../../assets/Logo/hate.png')} />
          </S.EmojiIconBtn>
          <S.TextBackground style={{ width: '85px' }}>
            <S.EmojiText>별로에요</S.EmojiText>
          </S.TextBackground>
          <S.EmojiText>{hates.length}</S.EmojiText>
        </S.EmojiDiv>
      </S.EmojiContainer>
    </S.EmojiWrap>
  );
};

export default StoreEmoji;
