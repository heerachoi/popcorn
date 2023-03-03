import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { hateCount, likeCount } from '../../../atoms';
import { auth } from '../../../services/firebase';
import * as S from './style';
import { v4 as uuidv4 } from 'uuid';
import COLORS from '../../../assets/CSS/colors';
import { Store } from '../../../types/data/storeInterface';
import { JSON_API } from '../../../services/api';
import StoreLikeLogo from '../../../assets/Img/Feel=Happy, Color=green.svg';
import StoreHateLogo from '../../../assets/Img/Feel=Sad, Color=green.svg';

interface Props {
  detailData: Store;
}

const StoreEmoji: any = ({ detailData }: Props) => {
  const [currentUser, setCurrentUser] = useState<any>('');
  const [like, setLike] = useRecoilState(likeCount);
  const [hate, setHate] = useRecoilState(hateCount);
  const [likeColor, setLikeColor] = useState(`${COLORS.black}`);
  const [hateColor, setHateColor] = useState(`${COLORS.black}`);
  const [likeClicked, setLikeClicked] = useState(false);
  const [hateClicked, setHateClicked] = useState(false);
  const [currentLikeId, setCurrentLikeId] = useState('');
  console.log('currentLikeId', currentLikeId);

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
    console.log('렌더링!');
    fetchLikeHate();
    console.log('fetchLikeHate 호출');
  }, [likeClicked, hateClicked]);

  useEffect(() => {
    console.log('언제 되는 렌더링?');
    likeCountHandler();
    console.log('likeCountHandler 호출');
    hateCountHandler();
    console.log('hateCountHandler 호출');
  }, [likeColor, hateColor, like, hate]);

  // 좋아요 추가
  const newLike = {
    id: uuidv4(),
    storeId: detailData?.id,
    userId: currentUser.uid,
    vote: 'like',
  };

  // 별로예요 추가
  const hateLike = {
    id: uuidv4(),
    storeId: detailData?.id,
    userId: currentUser.uid,
    vote: 'hate',
  };

  // 렌더링 시 유저 클릭 유무 확인
  const fetchLikeHate = async () => {
    const { data } = await axios.get(`${JSON_API}/likeHate`);
    data.map((item: any) => {
      if (item.userId === currentUser.uid && item.storeId === detailData?.id) {
        setCurrentLikeId(item.id);
        console.log('item.id', item.id);
        if (item.vote === 'like') {
          setLikeColor(`${COLORS.red}`);
          setLikeClicked(true);
        } else if (item.vote === 'hate') {
          setHateColor(`${COLORS.red}`);
          setHateClicked(true);
          // setCurrentLikeId(item.id);
        }
      } else {
        setLikeColor(`${COLORS.black}`);
        setHateColor(`${COLORS.black}`);
      }
    });
  };

  // 좋아요 숫자 카운트
  const likeCountHandler = async () => {
    const { data } = await axios.get(`${JSON_API}/likeHate`);
    const likes = data.filter((item: any) => {
      if (item.storeId === detailData?.id && item.vote === 'like') {
        return true;
      }
    });
    setLike(likes.length);
    console.log('like', like);
  };

  // 별로예요 숫자 카운트
  const hateCountHandler = async () => {
    const { data } = await axios.get(`${JSON_API}/likeHate`);
    const hates = data.filter((item: any) => {
      if (item.storeId === detailData?.id && item.vote === 'hate') {
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
          console.log('currentLikeId!!!', currentLikeId);
          if (currentLikeId !== null) {
            axios.delete(`${JSON_API}/likeHate/${currentLikeId}`);
            console.log('삭제성공');
            setLikeColor(`${COLORS.black}`);
            setLikeClicked(false);
            likeCountHandler();
          }
        } catch (error) {
          console.log('error', error);
        }
      } else if (hateClicked) {
        alert('좋아요, 별로예요 둘 중 하나만 가능합니다.');
      } else if (!likeClicked) {
        // 좋아요가 안눌린 상태
        try {
          axios.post(`${JSON_API}/likeHate`, newLike);
          console.log('추가성공');
          setLikeColor(`${COLORS.red}`);
          setLikeClicked(true);
        } catch (error) {
          console.log('error', error);
        }
      }
    } else {
      alert('로그인이 필요합니다.');
    }
  };

  // 별로예요 버튼
  const hateHandler = async () => {
    if (currentUser) {
      if (hateClicked) {
        // 별로예요 눌린 상태
        try {
          axios.delete(`${JSON_API}/likeHate/${currentLikeId}`);
          console.log('--------------------------------');
          setHateColor(`${COLORS.black}`);
          setHateClicked(false);
          hateCountHandler();
        } catch (error) {
          console.log('error', error);
        }
      } else if (likeClicked) {
        alert('좋아요, 별로예요 둘 중 하나만 가능합니다.');
      } else if (!hateClicked) {
        // 별로예요 안눌린 상태
        try {
          axios.post(`${JSON_API}/likeHate`, hateLike);
          setHateColor(`${COLORS.red}`);
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
            <S.LikeHateImg src={StoreLikeLogo} />
          </S.EmojiIconBtn>

          <S.TextBackgroundContainer>
            <S.EmojiText style={{ color: likeColor }}>좋아요</S.EmojiText>
            <S.TextBackgroundOne />
          </S.TextBackgroundContainer>
          <S.countText>{like}</S.countText>
        </S.EmojiDiv>
        <S.EmojiDiv>
          <S.EmojiIconBtn onClick={hateHandler}>
            <S.LikeHateImg src={StoreHateLogo} />
          </S.EmojiIconBtn>
          <S.TextBackgroundContainer>
            <S.EmojiText style={{ color: hateColor }}>별로예요</S.EmojiText>
            <S.TextBackgroundTwo />
          </S.TextBackgroundContainer>
          <S.countText>{hate}</S.countText>
        </S.EmojiDiv>
      </S.EmojiContainer>
    </S.EmojiWrap>
  );
};

export default StoreEmoji;
