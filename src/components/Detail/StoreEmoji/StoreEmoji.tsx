import axios from 'axios';
import { useEffect, useState } from 'react';
// firebase
import { auth } from '../../../services/firebase';
// types
import { Store } from '../../../types/data/storeInterface';
// API
import { JSON_API } from '../../../services/api';
// style
import * as S from './style';
import COLORS from '../../../assets/CSS/colors';
import StoreLikeLogo from '../../../assets/Img/Feel=Happy, Color=green.svg';
import StoreHateLogo from '../../../assets/Img/Feel=Sad, Color=green.svg';
import LikeHoverImg from '../../../assets/Img/Feel=Happy, Color=Yellow.svg';
import HateHoverImg from '../../../assets/Img/Feel=Sad, Color=Yellow.svg';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';

interface Props {
  detailData: Store;
}

interface LikeHate {
  id: string,
  store: string,
  user: string,
  vote: string,
}

const StoreEmoji = ({ detailData }: Props) => {
  const user = useRecoilValue(userInfo);
  const [like, setLike] = useState<number>(0);
  const [hate, setHate] = useState<number>(0);
  const [likeColor, setLikeColor] = useState<string>(`${COLORS.gray1}`);
  const [hateColor, setHateColor] = useState<string>(`${COLORS.gray1}`);
  const [likeClicked, setLikeClicked] = useState<boolean>(false);
  const [hateClicked, setHateClicked] = useState<boolean>(false);
  const [currentLikeId, setCurrentLikeId] = useState<string>('');

  // 화면 렌더링 시 로그인 상태 확인
  useEffect(() => {
    if (user) {
      fetchLikeHate();
      likeCountHandler();
      hateCountHandler();
    } else {
      likeCountHandler();
      hateCountHandler();
      return console.log('로그인 안됨');
    }
  }, [user.isLogin]);

  useEffect(() => {
    setCurrentLikeId(user.userInfomation.id + detailData?.id);
  }, [user]);

  // 좋아요 추가
  const newLike = {
    id: user.userInfomation.id + detailData?.id,
    store: detailData?.id,
    user: String(user.userInfomation.id),
    vote: 'like',
  };

  // 별로예요 추가
  const hateLike = {
    id: user.userInfomation.id + detailData?.id,
    store: detailData?.id,
    user: String(user.userInfomation.id),
    vote: 'hate',
  };

  // 렌더링 시 유저 클릭 유무 확인
  const fetchLikeHate = async () => {
    const { data } = await axios.get(`${JSON_API}/likeHate`);
    data.map((item: LikeHate) => {
      if (item.user === String(user.userInfomation.id) && item.store === detailData?.id) {
        // setCurrentLikeId(item.id);
        if (item.vote === 'like') {
          setLikeColor(`${COLORS.red}`);
          setLikeClicked(true);
        } else if (item.vote === 'hate') {
          setHateColor(`${COLORS.red}`);
          setHateClicked(true);
        }
      } else {
        setLikeColor(`${COLORS.gray1}`);
        setHateColor(`${COLORS.gray1}`);
      }
    });
  };

  // 좋아요 숫자 카운트
  const likeCountHandler = async () => {
    const { data } = await axios.get(`${JSON_API}/likeHate`);
    const likes = data.filter((item: LikeHate) => {
      if (item.store === detailData?.id && item.vote === 'like') {
        return true;
      }
    });
    setLike(likes.length);
  };

  // 별로예요 숫자 카운트
  const hateCountHandler = async () => {
    const { data } = await axios.get(`${JSON_API}/likeHate`);
    const hates = data.filter((item: LikeHate) => {
      if (item.store === detailData?.id && item.vote === 'hate') {
        return true;
      }
    });
    setHate(hates.length);
  };

  // 좋아요 버튼
  const likeHandler = async () => {
    if (user.isLogin) {
      if (likeClicked) {
        // 좋아요 눌린 상태
        try {
          axios.delete(`${JSON_API}/likeHate/${currentLikeId}`);
          setLikeColor(`${COLORS.gray1}`);
          setLikeClicked(false);
          setLike(like - 1);
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
          setLike(like + 1);
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
    if (user.isLogin) {
      if (hateClicked) {
        // 별로예요 눌린 상태
        try {
          axios.delete(`${JSON_API}/likeHate/${currentLikeId}`);
          setHateColor(`${COLORS.gray1}`);
          setHateClicked(false);
          setHate(hate - 1);
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
          setHate(hate + 1);
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
            {likeClicked ? (
              <S.LikeHateImg src={LikeHoverImg} />
            ) : (
              <S.LikeHateImg src={StoreLikeLogo} />
            )}
          </S.EmojiIconBtn>

          <S.TextBackgroundContainer>
            <S.EmojiText style={{ color: likeColor }}>좋아요</S.EmojiText>
            <S.TextBackgroundOne />
          </S.TextBackgroundContainer>
          <S.countText>{like}</S.countText>
        </S.EmojiDiv>
        <S.EmojiDiv>
          <S.EmojiIconBtn onClick={hateHandler}>
            {hateClicked ? (
              <S.LikeHateImg src={HateHoverImg} />
            ) : (
              <S.LikeHateImg src={StoreHateLogo} />
            )}
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
