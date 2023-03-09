import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QueryString from 'qs';
import axios from 'axios';
import { JSON_API } from '../../../services/api';
import * as S from './style';
import kakaoLogo from '../../../assets/Img/kakaoLogo.svg';
import { useRecoilState } from 'recoil';
import {
  kakaoAccessToken,
  kakaoRefreshToken,
  userInfoState,
} from '../../../atoms';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

interface UserInfo {
  age: string;
  email: string;
  nickName: string;
  id: string;
  gender: string;
  accessToken: string;
}

// 카카오 로그인 기능 구현 코드
const KakaoLogin = () => {
  const REACT_APP_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/login';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`; // 인가코드 요청 URL
  const REACT_APP_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; // 카카오 디벨로퍼스에서 발급받은 client secret 키
  const location = useLocation();
  const kakaoLoginHandler = () => {
    window.location.replace(link);
  };
  //주소창에 code를 가져오기
  const KAKAO_CODE = location.search.split('=')[1];
  const [accessToken, setAccessToken] = useRecoilState(kakaoAccessToken);
  const [refreshToken, setRefreshToken] = useRecoilState(kakaoRefreshToken);

  // 로그인
  // POST로 우리가 알고 있는 정보, 아까 받은 code, grantType, clientID, redirectURI를 url형태로 만들고 송신함
  const getKakaoToken = async () => {
    const ACCESS_TOKEN = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        // 요청 헤더에 대한 정보
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: QueryString.stringify({
        //엑세스 토큰을 요청하기위해 필요한 토큰과 key값들
        grant_type: 'authorization_code',
        client_id: REACT_APP_REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: KAKAO_CODE,
        client_secret: REACT_APP_CLIENT_SECRET,
      }),
    })
      .then((res) => res.json()) // response로 accessToken, id_token, refresh_token 등을 json형태로 받을 수 있음
      .catch((error) => console.log('error:', error));
    setAccessToken(ACCESS_TOKEN.access_token);
    // accessToken 로컬스토리지에 저장
    localStorage.setItem('token_for_kakaotalk', ACCESS_TOKEN.access_token);
  };

  // 카카오 유저 정보 json-server에 저장하기(/users)

  // refresh token으로 전역에서 로그인 유지하기

  useEffect(() => {
    getKakaoToken();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '16px' }}>
      <S.LoginOrText>또는</S.LoginOrText>
      <S.KakaoLoginBtn type="button" onClick={kakaoLoginHandler}>
        <img
          src={kakaoLogo}
          alt="카카오 로고"
          style={{ marginRight: '16px' }}
        />
        <p>카카오로 계속하기</p>
      </S.KakaoLoginBtn>
    </div>
  );
};

export default KakaoLogin;
