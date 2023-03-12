// libaray
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import QueryString from 'qs';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { kakaoAccessToken, userInfoState } from '../../../atoms';
// API
import { JSON_API } from '../../../services/api';
// style
import * as S from './style';
import kakaoLogo from '../../../assets/Img/kakaoLogo.svg';

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
  const location = useLocation();
  const REACT_APP_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  // const REACT_APP_REST_API_KEY = 'fbbe0ffd8e5a9275920fc4b89603b870';
  //const REDIRECT_URI = 'https://popcorn-hazel.vercel.app/login';
  const REDIRECT_URI = 'http://localhost:3000/login';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`; // 인가코드 요청 URL
  const REACT_APP_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; // 카카오 디벨로퍼스에서 발급받은 client secret 키
  const KAKAO_CODE = location.search.split('=')[1];
  const [accessToken, setAccessToken] = useRecoilState(kakaoAccessToken);
  const [kakaoUserInfo, setKakaoUserInfo] = useRecoilState(userInfoState);
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const kakaoLoginHandler = () => {
    window.location.replace(link);
  };

  //카카오 서버로 클라이언트 시크릿키값과 파라미터의 코드값을 보내 액세스토큰을 요청
  const getUser = async () => {
    const ACCESS_TOKEN = await fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: QueryString.stringify({
        //엑세스 토큰을 요청하기위해 필요한 토큰과 key값들
        grant_type: 'authorization_code',
        client_id: REACT_APP_REST_API_KEY,
        redirect_uri: REDIRECT_URI, //위쪽에 전부 변수로 지정해주었기에불러오기만 하면된다
        code: KAKAO_CODE,
        client_secret: REACT_APP_CLIENT_SECRET,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.log('error:', error));

    setAccessToken(ACCESS_TOKEN.access_token);
    localStorage.setItem('token_for_kakaotalk', ACCESS_TOKEN.access_token);
    // accessToken을 가지고 다시 한번 더 유저의 정보를 달라고 요청해야함
    const user = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        //access_token이 필요하다
        Authorization: `Bearer ${ACCESS_TOKEN.access_token}`,
      },
    });
    // 유저 정보를 json-server에 저장
    saveUserInfoToServer(user);
    localStorage.setItem('kakao_user_id', user.data.id);
    navigate('/');
  };
  const [currentUser, setCurrentUser] = useState<any>();

  // 유저정보 저장
  const saveUserInfoToServer = async (user: any) => {
    let newUserInfo: UserInfo = {
      age: user.data.kakao_account.age_range.slice(0, 2) + '대',
      email: user.data.kakao_account.email,
      nickName: user.data.properties.nickname,
      id: user.data.id,
      gender: user.data.kakao_account.gender
        ? user.data.kakao_account.gender
        : '선택안함',
      accessToken: localStorage.getItem('token_for_kakaotalk') ?? '',
    };

    // Recoil state 업데이트
    setKakaoUserInfo(newUserInfo);
    setCurrentUser(id);
    axios
      .post(`${JSON_API}/users`, newUserInfo)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
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
