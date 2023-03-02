import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QueryString from 'qs';
import axios from 'axios';
// 카카오 로그인 기능 구현 코드
const KakaoLogin = () => {
  const location = useLocation(); // useLocation hook 사용
  const REST_API_KEY = 'fbbe0ffd8e5a9275920fc4b89603b870'; // 카카오 디벨로퍼스에서 발급받은 REST API키
  const REDIRECT_URI = 'http://localhost:3000/login'; // 카카오 로그인 후 리다이렉트될 URI
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

    const user = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        //access_token이 필요하다
        Authorization: `Bearer ${ACCESS_TOKEN.access_token}`,
      },
    });
    setNickName(user.data.properties.nickname);
    setUserId(user.data.kakao_account.email);
    setAge(user.data.kakao_account.age_range);

    console.log('user.data.properties.nickname', user.data.properties.nickname);
    console.log('user.data', user.data);
    console.log('user.data.properties', user.data.properties);
    console.log('user.data.kakao_account', user.data.kakao_account);
    console.log(
      'user.data.kakao_account.profile.nickname',
      user.data.kakao_account.profile.nickname,
    );
    console.log('user.data.kakao_account.email', user.data.kakao_account.email);
    console.log(
      'user.data.kakao_account.age_range',
      user.data.kakao_account.age_range,
    );
  };
  console.log('nickName', nickName);
  console.log('userId', userId);
  console.log('age', age);

  useEffect(() => {
    getUser();
  }, []);

  // accessToken을 가지고 다시 한번 더 유저의 정보를 달라고 요청해야함

  return (
    <div>
      <button onClick={KakaoLoginHandler}>카카오로 계속하기</button>
    </div>
  );
};

export default KakaoLogin;
