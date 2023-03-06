import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QueryString from 'qs';
import axios from 'axios';
import { JSON_API } from '../../../services/api';
import * as S from './style';
import kakaoLogo from '../../../assets/Img/kakaoLogo.svg';
import { useRecoilState } from 'recoil';
import { modalStatus } from '../../../atoms';
import { kakaoAccessToken, userInfoState } from '../../../atoms';
import { useNavigate } from 'react-router-dom';

// const userInfoState = atom({
//   key: 'userInfoState',
//   default: {
//     age: '',
//     email: '',
//     nickName: '',
//     id: '',
//     accessToken: '',
//   },
// });
// 카카오 로그인 기능 구현 코드
const KakaoLogin = () => {
  const location = useLocation(); // useLocation hook 사용
  const REACT_APP_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_REST_API_KEY}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=code`; // 인가코드 요청 URL
  const REACT_APP_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; // 카카오 디벨로퍼스에서 발급받은 client secret 키
  console.log('REACT_APP_REST_API_KEY', REACT_APP_REST_API_KEY);
  console.log('REACT_APP_REDIRECT_URI', REACT_APP_REDIRECT_URI);
  console.log('REACT_APP_CLIENT_SECRET', REACT_APP_CLIENT_SECRET);
  //주소창에 파라미터code를 가져온다 split 메서드를 활용한다
  const KAKAO_CODE = location.search.split('=')[1];
  const [isModal, setIsModal] = useRecoilState(modalStatus);
  const [accessToken, setAccessToken] = useRecoilState(kakaoAccessToken);
  const [kakaoUserInfo, setKakaoUserInfo] = useRecoilState(userInfoState);
  //nickname state
  const [nickName, setNickName] = useState('');
  //popcorn id = kakao email
  const [userId, setUserId] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  const [gender, setGender] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  const kakaoLoginHandler = () => {
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
        client_id: REACT_APP_REST_API_KEY,
        redirect_uri: REACT_APP_REDIRECT_URI, //위쪽에 전부 변수로 지정해주었기에불러오기만 하면된다
        code: KAKAO_CODE,
        client_secret: REACT_APP_CLIENT_SECRET,
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
    setId(user.data.id);
    setGender(
      user.data.kakao_account.gender
        ? user.data.kakao_account.gender
        : user.data.kakao_account.gender_needs_agreement,
    );

    // 유저 정보를 json-server에 저장
    saveUserInfoToServer(user);
    navigate('/');
  };

  // 유저정보 저장
  const saveUserInfoToServer = (user: any) => {
    console.log('age', age);
    let newUserInfo = {
      age: user.data.kakao_account.age_range.slice(0, 2),
      email: user.data.kakao_account.email,
      nickName: user.data.properties.nickname,
      id: user.data.id,
      gender: user.data.kakao_account.gender
        ? user.data.kakao_account.gender
        : user.data.kakao_account.gender_needs_agreement,
      accessToken: localStorage.getItem('token_for_kakaotalk') ?? '',
    };
    // Recoil state 업데이트
    setKakaoUserInfo(newUserInfo);
    axios
      .post(`${JSON_API}/users`, newUserInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('user.data', user.data);
    console.log('age', age);
  };

  console.log('nickName', nickName);
  console.log('userId', userId);

  console.log('id', id);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '16px' }}>
      <S.LoginOrText>또는</S.LoginOrText>
      <S.KakaoLoginBtn onClick={kakaoLoginHandler}>
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
