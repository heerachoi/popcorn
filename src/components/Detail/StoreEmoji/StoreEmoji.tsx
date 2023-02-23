import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { hateCount, likeCount } from '../../../atoms';
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
  const [likeColor, likeSetColor] = useState(`${COLORS.black}`);
  const [hateColor, hateSetColor] = useState(`${COLORS.black}`);
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

  useEffect(() => {
    fetchLikeHate();
    likeCountHandler();
    hateCountHandler();
  }, [likeClicked, hateClicked]);

  // 좋아요 추가
  const newLike = {
    id: uuidv4(),
    storeId: detailData.id,
    userId: currentUser.uid,
    vote: 'like',
  };

  // 별로에요 추가
  const hateLike = {
    id: uuidv4(),
    storeId: detailData.id,
    userId: currentUser.uid,
    vote: 'hate',
  };

  // 렌더링 시 유저 클릭 유무 확인
  const fetchLikeHate = async () => {
    const { data } = await axios.get('http://localhost:3003/likeHate');

    data.map((item: any) => {
      if (item.userId === currentUser.uid && item.storeId === detailData.id) {
        if (item.vote === 'like') {
          likeSetColor(`${COLORS.red}`);
          setLikeClicked(true);
          setCurrentLikeId(item.id);
        } else if (item.vote === 'hate') {
          hateSetColor(`${COLORS.red}`);
          setHateClicked(true);
          setCurrentLikeId(item.id);
        }
      } else {
        likeSetColor(`${COLORS.black}`);
        hateSetColor(`${COLORS.black}`);
      }
    });
  };

  // 좋아요 숫자 카운트
  const likeCountHandler = async () => {
    const { data } = await axios.get('http://localhost:3003/likeHate');

    const likes = data.filter((item: any) => {
      if (item.storeId === detailData.id && item.vote === 'like') {
        return true;
      }
    });
    setLike(likes.length);
  };

  // 별로에요 숫자 카운트
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
          likeSetColor(`${COLORS.black}`);
          setLikeClicked(false);
        } catch (error) {
          console.log('error', error);
        }
      } else if (hateClicked) {
        alert('좋아요, 별로에요 둘 중 하나만 가능합니다.');
      } else if (!likeClicked) {
        // 좋아요가 안눌린 상태
        try {
          axios.post('http://localhost:3003/likeHate', newLike);
          likeSetColor(`${COLORS.red}`);
          setLikeClicked(true);
        } catch (error) {
          console.log('error', error);
        }
      }
    } else {
      alert('로그인이 필요합니다.');
    }
  };

  // 별로에요 버튼
  const hateHandler = async () => {
    if (currentUser) {
      if (hateClicked) {
        // 별로에요 눌린 상태
        try {
          axios.delete(`http://localhost:3003/likeHate/${currentLikeId}`);
          hateSetColor(`${COLORS.black}`);
          setHateClicked(false);
        } catch (error) {
          console.log('error', error);
        }
      } else if (likeClicked) {
        alert('좋아요, 별로에요 둘 중 하나만 가능합니다.');
      } else if (!hateClicked) {
        // 별로에요 안눌린 상태
        try {
          axios.post('http://localhost:3003/likeHate', hateLike);
          hateSetColor(`${COLORS.red}`);
          setHateClicked(true);
        } catch (error) {
          console.log('error', error);
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
            <S.EmojiText style={{ color: likeColor }}>좋아요</S.EmojiText>
          </S.TextBackground>
          <S.EmojiText>{like}</S.EmojiText>
        </S.EmojiDiv>
        <S.EmojiDiv>
          <S.EmojiIconBtn onClick={hateHandler}>
            <S.LikeHateImg src={require('../../../assets/Logo/hate.png')} />
          </S.EmojiIconBtn>
          <S.TextBackground style={{ width: '85px' }}>
            <S.EmojiText style={{ color: hateColor }}>별로에요</S.EmojiText>
          </S.TextBackground>
          <S.EmojiText>{hate}</S.EmojiText>
        </S.EmojiDiv>
      </S.EmojiContainer>
    </S.EmojiWrap>
  );
};

export default StoreEmoji;
