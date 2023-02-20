import * as S from './style';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../services/firebase';
import { AiFillLeftCircle } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import styled from 'styled-components';
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

  const signInInputReset = (event: React.MouseEvent<HTMLDivElement>) => {
    setSignInInput({
      ...signInInput,
      [event.currentTarget.className]: '',
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
        <S.LoginImg
          src={require('../../../assets/Logo/Frame_59.png')}
          alt="로그인 Logo"
        />
      </S.LoginImgWrap>
      <S.TitleWrap>
        <S.TextBackground>
          <S.Title>로그인</S.Title>
        </S.TextBackground>
      </S.TitleWrap>
      <S.FormWrap onSubmit={signInClickHandler}>
        <S.FormInput
          placeholder="아이디를 입력해 주세요."
          value={signInInput.email}
          name="email"
          type="text"
          onChange={signInInputChangeHandler}
          onBlur={validateEmail}
        />
        {signInInput.email && (
          <div
            style={{ cursor: 'pointer' }}
            className="email"
            onClick={signInInputReset}
          >
            <CancleIcon size={18} />
          </div>
        )}
        <S.HelperText style={{ color: 'red' }}>{helperText.email}</S.HelperText>
        <S.FormInput
          placeholder="비밀번호를 입력해 주세요."
          value={signInInput.password}
          name="password"
          type="password"
          onChange={signInInputChangeHandler}
          onBlur={validatePassword}
        />
        {signInInput.password && (
          <div
            style={{ cursor: 'pointer' }}
            className="password"
            onClick={signInInputReset}
          >
            <CancleIcon size={18} />
          </div>
        )}
        <S.HelperText style={{ color: 'red' }}>
          {helperText.password}
        </S.HelperText>
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.FormBtnWrap onClick={() => navigate('/')}>
          <AiFillLeftCircle style={{ color: '#9b9b9b' }} size={18} />
          <S.NavigateBtn>홈으로 이동</S.NavigateBtn>
        </S.FormBtnWrap>
        <S.FormSignWrap>
          <S.NavigateBtn as="span" onClick={() => navigate('/signup')}>
            아직 회원이 아니신가요?
          </S.NavigateBtn>
          <S.SignUpBtn>회원가입</S.SignUpBtn>
        </S.FormSignWrap>
      </S.FormWrap>
    </S.Wrap>
  );
};

export default Login;

export const CancleIcon = styled(MdCancel)`
  position: relative;
  left: 370px;
  bottom: 60px;
  color: #676767;
`;
