import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QueryString from 'qs';
import axios from 'axios';
// 카카오 로그인 기능 구현 코드
const KakaoLogin = () => {
  const location = useLocation(); // useLocation hook 사용
  const REST_API_KEY = 'fbbe0ffd8e5a9275920fc4b89603b870'; // 카카오 디벨로퍼스에서 발급받은 REST API키
  const REDIRECT_URI = 'http://localhost:3000/login'; // 카카오 로그인이 이루어지는 페이지
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`; // 인가코드 요청 URL
  const CLIENT_SECRET = 'Tdn2Y3Xx4qXX8mBO2tYbe44g3xwaOj23'; // 카카오 디벨로퍼스에서 발급받은 client secret 키
  //주소창에 파라미터code를 가져온다 split 메서드를 활용한다
  const KAKAO_CODE = location.search.split('=')[1];
  //nickname state
  const [nickName, setNickName] = useState('');
  //popcorn id = kakao email
  const [userId, setUserId] = useState('');
  const [age, setAge] = useState('');
  //accessToken state
  const [accessToken, setAccessToken] = useState();

  const KakaoLoginHandler = () => {
    window.location.replace(link);
  };

  const code = new URL(window.location.href).searchParams.get('code');
  console.log('code', code);

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
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI, //위쪽에 전부 변수로 지정해주었기에불러오기만 하면된다
        code: KAKAO_CODE,
        client_secret: CLIENT_SECRET,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.log('error:', error));

    console.log('ACCESS_TOKEN', ACCESS_TOKEN);
    setAccessToken(ACCESS_TOKEN.access_token);
    console.log('accessToken', accessToken);
    localStorage.setItem('token_for_kakaotalk', ACCESS_TOKEN.access_token);
    // accessToken을 가지고 다시 한번 더 유저의 정보를 달라고 요청해야함
    const user = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        //access_token이 필요하다
        Authorization: `Bearer ${ACCESS_TOKEN.access_token}`,
      },
    });
    setNickName(user.data.properties.nickname);
    setUserId(user.data.kakao_account.email);
    setAge(user.data.kakao_account.age_range);

    // 로그인하고 json-server db에 저장하려면 코드를 어디에 어떤 식으로 짜야할까요?
  };
  console.log('nickName', nickName);
  console.log('userId', userId);
  console.log('age', age);

  useEffect(() => {
    getUser();
  }, []);

  // 로그아웃 accessToken 만료시키기
  const KakaoLogoutHandler = async () => {
    const isLogout = await fetch('https://kapi.kakao.com/v1/user/logout', {
      headers: {
        //accessToken을 만료시킨다
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    }).then((res) => res.json());
    localStorage.removeItem('token_for_kakaotalk');
    alert('로그아웃되었습니다');
  };

  return (
    <div>
      <button style={{ cursor: 'pointer' }} onClick={KakaoLoginHandler}>
        카카오로 계속하기
      </button>
      <button style={{ cursor: 'pointer' }} onClick={KakaoLogoutHandler}>
        로그아웃
      </button>
    </div>
  );
};

export default KakaoLogin;
