import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { hateCount, likeCount, userInfo } from '../../../atoms';
import { getLikeHate, getNewStoreReport } from '../../../services/api';
import { auth } from '../../../services/firebase';
import * as S from './style';
import { v4 as uuidv4 } from 'uuid';
import COLORS from '../../../assets/CSS/colors';

interface Props {
  detailData: any;
}

const StoreEmoji: any = ({ detailData }: Props) => {
  const [currentUser, setCurrentUser] = useState<any>('');
  const [like, setLike] = useRecoilState(likeCount);
  const [hate, setHate] = useRecoilState(hateCount);
  const [color, setColor] = useState(`${COLORS.black}`);
  const [likeClicked, setLikeClicked] = useState(false);
  const [hateClicked, setHateClicked] = useState(false);
  const [currentLikeId, setCurrentLikeId] = useState('');

  // 화면 렌더링 시 로그인 상태 확인
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(auth.currentUser);
        fetchLikeHate();
      } else {
        return console.log('로그인 안됨');
      }
    });
  }, [currentUser]);

  console.log('currentUser', currentUser);

  useEffect(() => {
    fetchLikeHate();
    likeCountHandler();
    hateCountHandler();
  }, [likeClicked, hateClicked]);

  const newLike = {
    id: uuidv4(),
    storeId: detailData.id,
    userId: currentUser.uid,
    vote: 'like',
  };

  const hateLike = {
    id: uuidv4(),
    storeId: detailData.id,
    userId: currentUser.uid,
    vote: 'hate',
  };

  const fetchLikeHate = async () => {
    const { data } = await axios.get('http://localhost:3003/likeHate');
    console.log('data!!!!!!!!', data);

    // console.log('likes', likes);

    data.map((item: any) => {
      // 좋아요, 별로에요 숫자

      if (item.userId === currentUser.uid && item.storeId === detailData.id) {
        if (item.vote === 'like') {
          // setColor(`${COLORS.red}`);
          setLikeClicked(true);
          setCurrentLikeId(item.id);
        } else if (item.vote === 'hate') {
          // setColor(`${COLORS.black}`);
          setHateClicked(true);
          setCurrentLikeId(item.id);
        }
      } else {
        setColor(`${COLORS.black}`);
      }
      // console.log('item', item);
      // console.log('itemId', item.id);
      // console.log('item.storeId', item.storeId);
      // console.log('detailData.id', detailData.id);
    });
  };

  const likeCountHandler = async () => {
    const { data } = await axios.get('http://localhost:3003/likeHate');

    const likes = data.filter((item: any) => {
      if (item.storeId === detailData.id && item.vote === 'like') {
        return true;
      }
    });
    setLike(likes.length);
  };

  const hateCountHandler = async () => {
    const { data } = await axios.get('http://localhost:3003/likeHate');
    const hates = data.filter((item: any) => {
      if (item.storeId === detailData.id && item.vote === 'hate') {
        return true;
      }
    });
    setHate(hates.length);
  };

  // 좋아요 버튼
  const likeHandler = async () => {
    if (currentUser) {
      if (likeClicked) {
        // 좋아요 눌린 상태
        try {
          axios.delete(`http://localhost:3003/likeHate/${currentLikeId}`);
          setColor(`${COLORS.black}`);
          setLikeClicked(false);
          // setLike(like + 1);          
        } catch (err) {
          console.log('err', err);
        }
      } else if (hateClicked) {
        alert('좋아요, 별로에요 둘 중 하나만 가능합니다.');
      } else if (!likeClicked) {
        // 좋아요가 안눌린 상태
        try {
          axios.post('http://localhost:3003/likeHate', newLike);
          // setLike(like + 1);
          setColor(`${COLORS.red}`);
          setLikeClicked(true);
          
        } catch (err) {
          console.log('err', err);
        }
      }
    } else {
      alert('로그인이 필요합니다.');
    }
  };

  const hateHandler = async  () => {
    if (currentUser) {
      if (hateClicked) {
        // 별로에요 눌린 상태
        try {
          axios.delete(`http://localhost:3003/likeHate/${currentLikeId}`);
          setColor(`${COLORS.black}`);
          setHateClicked(false);
          // setLike(like + 1);
          // alert('이미 클릭함');
        } catch (err) {
          console.log('err', err);
        }
      } else if (likeClicked) {
        alert('둘 중 하나만 클릭하세요.');
      } else if (!hateClicked) {
        // 별로에요 안눌린 상태
        try {
          axios.post('http://localhost:3003/likeHate', hateLike);
          // setLike(like + 1);
          setColor(`${COLORS.red}`);
          setHateClicked(true);
          alert('별로에요');
        } catch (err) {
          console.log('err', err);
        }
      }
    } else {
      alert('로그인이 필요합니다.');
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
            <S.EmojiText style={{ color: color }}>좋아요</S.EmojiText>
          </S.TextBackground>
          <S.EmojiText>{like}</S.EmojiText>
        </S.EmojiDiv>
        <S.EmojiDiv>
          <S.EmojiIconBtn onClick={hateHandler}>
            <S.LikeHateImg src={require('../../../assets/Logo/hate.png')} />
          </S.EmojiIconBtn>
          <S.TextBackground style={{ width: '85px' }}>
            <S.EmojiText>별로에요</S.EmojiText>
          </S.TextBackground>
          <S.EmojiText>{hate}</S.EmojiText>
        </S.EmojiDiv>
      </S.EmojiContainer>
    </S.EmojiWrap>
  );
};

export default StoreEmoji;
