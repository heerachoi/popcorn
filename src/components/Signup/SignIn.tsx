import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';

interface SignInInput {
  email: string;
  password: string;
}

const SignIn = () => {
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
      return alert('빈칸을 입력해 주세요.');

    await signInWithEmailAndPassword(
      auth,
      signInInput.email,
      signInInput.password,
    )
      .then((userCredential) => {
        setSignInInput(initSignInInput);
        window.location.href = '/';
      })
      .catch((error: any) => {
        if (error.message.includes('user-not-found'))
          return alert('회원가입 되지 않은 회원입니다.');
        if (error.message.includes('wrong-password'))
          return alert('비밀번호가 틀렸습니다. 다시 확인해주세요.');
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
          '비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.',
      });
    } else {
      setHelperText({
        ...helperText,
        password: initHelperTextSignUpInput.password,
      });
    }
  };

  return (
    <form onSubmit={signInClickHandler}>
      <h3>ID</h3>
      <input
        value={signInInput.email}
        name="email"
        type="text"
        onChange={signInInputChangeHandler}
        onBlur={validateEmail}
      />
      <div style={{ color: 'red' }}>{helperText.email}</div>
      <h3>PW</h3>
      <input
        value={signInInput.password}
        name="password"
        type="password"
        onChange={signInInputChangeHandler}
        onBlur={validatePassword}
      />
      <div style={{ color: 'red' }}>{helperText.password}</div>
      <button>로그인</button>
    </form>
  );
};

export default SignIn;
