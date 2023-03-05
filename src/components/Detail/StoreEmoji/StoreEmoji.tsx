import axios from 'axios';
import { useEffect, useState } from 'react';
import { auth } from '../../../services/firebase';
import * as S from './style';
import COLORS from '../../../assets/CSS/colors';
import { Store } from '../../../types/data/storeInterface';
import { JSON_API } from '../../../services/api';

interface Props {
  detailData: Store;
}

const StoreEmoji: any = ({ detailData }: Props) => {
  const [currentUser, setCurrentUser] = useState<any>('');
  const [like, setLike] = useState<number>(0);
  const [hate, setHate] = useState<number>(0);
  const [likeColor, setLikeColor] = useState(`${COLORS.black}`);
  const [hateColor, setHateColor] = useState(`${COLORS.black}`);
  const [likeClicked, setLikeClicked] = useState(false);
  const [hateClicked, setHateClicked] = useState(false);
  const [currentLikeId, setCurrentLikeId] = useState('');

  // 화면 렌더링 시 로그인 상태 확인
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(auth.currentUser);
        fetchLikeHate();
        likeCountHandler();
        hateCountHandler();
      } else {
        return console.log('로그인 안됨');
      }
    });
  }, [currentUser]);

    useEffect(() => {
    setCurrentLikeId(currentUser.uid + detailData?.id);
  }, [currentUser]);

  // 좋아요 추가
  const newLike = {
    id: currentUser.uid + detailData?.id,
    store: detailData?.id,
    user: currentUser.uid,
    vote: 'like',
  };

  // 별로예요 추가
  const hateLike = {
    id: currentUser.uid + detailData?.id,
    store: detailData?.id,
    user: currentUser.uid,
    vote: 'hate',
  };

  // 렌더링 시 유저 클릭 유무 확인
  const fetchLikeHate = async () => {
    const { data } = await axios.get(`${JSON_API}/likeHate`);
    data.map((item: any) => {
      if (item.user === currentUser.uid && item.store === detailData?.id) {
        // setCurrentLikeId(item.id);
        if (item.vote === 'like') {
          setLikeColor(`${COLORS.red}`);
          setLikeClicked(true);
        } else if (item.vote === 'hate') {
          setHateColor(`${COLORS.red}`);
          setHateClicked(true);
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
      if (item.store === detailData?.id && item.vote === 'like') {
        return true;
      }
    });
    setLike(likes.length);
  };

  // 별로예요 숫자 카운트
  const hateCountHandler = async () => {
    const { data } = await axios.get(`${JSON_API}/likeHate`);
    const hates = data.filter((item: any) => {
      if (item.store === detailData?.id && item.vote === 'hate') {
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
          axios.delete(`${JSON_API}/likeHate/` + `${currentLikeId}`);
            setLikeColor(`${COLORS.black}`);
            setLikeClicked(false);
            setLike(like-1);
        } catch (error) {
          console.log('error', error);
        }
      } else if (hateClicked) {
        alert('좋아요, 별로예요 둘 중 하나만 가능합니다.');
      } else if (!likeClicked) {
        // 좋아요가 안눌린 상태
        try {
          axios.post(`${JSON_API}/likeHate`, newLike);
          setLikeColor(`${COLORS.red}`);
          setLikeClicked(true);
          setLike(like+1);
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
          setHateColor(`${COLORS.black}`);
          setHateClicked(false);
          setHate(hate-1);
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
          setHate(hate+1);
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
            <S.LikeHateImg
              src={require('../../../assets/Img/Feel=Happy, Color=green.png')}
            />
          </S.EmojiIconBtn>

          <S.TextBackgroundContainer>
            <S.EmojiText style={{ color: likeColor }}>좋아요</S.EmojiText>
            <S.TextBackgroundOne />
          </S.TextBackgroundContainer>
          <S.countText>{like}</S.countText>
        </S.EmojiDiv>
        <S.EmojiDiv>
          <S.EmojiIconBtn onClick={hateHandler}>
            <S.LikeHateImg
              src={require('../../../assets/Img/Feel=Sad, Color=green.png')}
            />
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
