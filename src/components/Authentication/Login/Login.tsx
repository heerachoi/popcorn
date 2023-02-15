import * as S from './style';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../services/firebase';
interface SignInInput {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const initSignInInput = {
    email: '',
    password: '',
  };

  const initHelperTextSignUpInput = {
    email: '',
    password: '',
  };

  const [signInInput, setSignInInput] = useState<SignInInput>(initSignInInput);
  const [helperText, setHelperText] = useState<SignInInput>(
    initHelperTextSignUpInput,
  );

  const signInInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSignInInput({
      ...signInInput,
      [event.target.name]: event.target.value,
    });
  };

  // 로그인 이벤트
  const signInClickHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    if (signInInput.email === '' || signInInput.password === '')
      confirmAlert({
        title: '오류',
        message: '빈 칸을 입력해 주세요.',
        buttons: [
          {
            label: '확인',
            onClick: () => {},
          },
          {
            label: '취소',
            onClick: () => {},
          },
        ],
      });

    await signInWithEmailAndPassword(
      auth,
      signInInput.email,
      signInInput.password,
    )
      .then((res) => {
        console.log('res', res); // res.idtoken을 크롬 브라우저 쿠키에 set해주고, 토큰 아이디가 쿠키에 남아있으면 로그인 상태를 확인해줌
        navigate('/');
      })
      .catch((error: any) => {
        if (error.message.includes('user-not-found'))
          confirmAlert({
            title: '오류',
            message: '회원가입이 되지 않은 이메일입니다.',
            buttons: [
              {
                label: '확인',
                onClick: () => {},
              },
              {
                label: '취소',
                onClick: () => {},
              },
            ],
          });
        if (error.message.includes('wrong-password'))
          confirmAlert({
            title: '오류',
            message: '비밀번호가 틀렸습니다. 다시 확인해주세요.',
            buttons: [
              {
                label: '확인',
                onClick: () => {},
              },
              {
                label: '취소',
                onClick: () => {},
              },
            ],
          });
      });
  };

  const validateEmail = (event: React.FocusEvent<HTMLInputElement>) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(event.target.value)) {
      setHelperText({ ...helperText, email: '이메일 형식을 기입해주세요.' });
    } else {
      setHelperText({ ...helperText, email: initHelperTextSignUpInput.email });
    }
  };

  const validatePassword = (event: React.FocusEvent<HTMLInputElement>) => {
    var regexPw =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regexPw.test(event.target.value)) {
      setHelperText({
        ...helperText,
        password:
          '8자 이상, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.',
      });
    } else {
      setHelperText({
        ...helperText,
        password: initHelperTextSignUpInput.password,
      });
    }
  };

  return (
    <S.Wrap>
      <S.LoginImgWrap>
        <S.LoginImg>이미지</S.LoginImg>
      </S.LoginImgWrap>
      <S.TitleWrap>
        <S.Title>로그인</S.Title>
      </S.TitleWrap>
      <S.FormWrap onSubmit={signInClickHandler}>
        <S.FormInput
          value={signInInput.email}
          name="email"
          type="text"
          onChange={signInInputChangeHandler}
          onBlur={validateEmail}
        />
        <S.HelperText style={{ color: 'red' }}>{helperText.email}</S.HelperText>
        <S.FormInput
          value={signInInput.password}
          name="password"
          type="password"
          onChange={signInInputChangeHandler}
          onBlur={validatePassword}
        />
        <S.HelperText style={{ color: 'red' }}>
          {helperText.password}
        </S.HelperText>
        <S.FormBtnWrap>
          <S.NavigateBtn onClick={() => navigate('/signup')}>
            회원가입 하러가기
          </S.NavigateBtn>
          <S.NavigateBtn onClick={() => navigate('/')}>
            홈으로 이동하기
          </S.NavigateBtn>
        </S.FormBtnWrap>
        <S.LoginBtn>로그인</S.LoginBtn>
      </S.FormWrap>
    </S.Wrap>
  );
};

export default Login;
