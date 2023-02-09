import { useState } from 'react';
import { auth, db } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  updateProfile,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import SignOut from './SignOut';
import DeleteAccount from './DeleteAccount';
import SignIn from './SignIn';

interface SignUpInput {
  nickName: string;
  email: string;
  password: string;
  passwordCheck: string;
  gender: string;
  age: string;
  phoneNumber: string;
  phoneCode: string;
}

const SignUp = () => {
  const initSignUpInput = {
    nickName: '',
    email: '',
    password: '',
    passwordCheck: '',
    gender: '',
    age: '',
    phoneNumber: '',
    phoneCode: '',
  };

  const initHelperTextSignUpInput = {
    nickName: '',
    email: '',
    password: '',
    passwordCheck: '',
    gender: '',
    age: '',
    phoneNumber: '',
    phoneCode: '',
  };

  const [signUpInput, setSignUpInput] = useState<SignUpInput>(initSignUpInput);
  const [helperText, setHelperText] = useState<SignUpInput>(
    initHelperTextSignUpInput,
  );

  const signUpInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSignUpInput({
      ...signUpInput,
      [event.target.name]: event.target.value,
    });
  };

  const signUpSelectChanchHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSignUpInput({
      ...signUpInput,
      [event.target.name]: event.target.value,
    });
  };

  // 전역에 선언되서 phone라는 아이디를 읽기 전에 먼저 렌더링됨

  // 인증번호 보내는 이벤트
  const phoneNumberPostHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    // 언어 선택
    auth.languageCode = 'ko';
    // 리캡챠, 1번째 인수는 클릭한 버튼의 아이디와 같아야 한다.
    window.recaptchaVerifier = new RecaptchaVerifier(
      'phone',
      {
        size: 'invisible',
        callback: (response: any) => {},
      },
      auth,
    );

    const appVerifier = window.recaptchaVerifier;
    // 인증번호를 보내는 메서드, 2번째 인수는 휴대폰 번호
    signInWithPhoneNumber(auth, '+82' + signUpInput.phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        // ...
      })
      .catch((error) => {
        alert(error);
      });
  };

  // 회원가입 클릭 이벤트
  const singUpHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      signUpInput.nickName === '' ||
      signUpInput.email === '' ||
      signUpInput.password === '' ||
      signUpInput.passwordCheck === '' ||
      signUpInput.password === '' ||
      signUpInput.password === ''
    )
      return alert('빈칸을 입력해 주세요.');
    if (signUpInput.gender === '' || signUpInput.age === '')
      return alert('카테고리를 선택해 주세요.');

    await createUserWithEmailAndPassword(
      auth,
      signUpInput.email,
      signUpInput.password,
    )
      .then(({ user }) => {
        // 회원가입하고 바로 프로필 업데이트
        updateProfile(user, {
          displayName: signUpInput.nickName,
        });
        // 회원가입하고 바로 데이터베이스 저장
        setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          nickName: user.displayName,
          profileImg: user.photoURL,
          email: signUpInput.email,
          gender: signUpInput.gender,
          age: signUpInput.age,
        });
        // input값 초기화
        setSignUpInput(initSignUpInput);
      })
      .catch((error) => {
        if (error.message.includes('email-already-in-use'))
          return alert('이미 등록된 회원입니다.');
      });
  };

  /////////// 유효성 검사 ////////////
  const validateNickName = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value.length < 2 || event.target.value.length > 10) {
      setHelperText({
        ...helperText,
        nickName: '2글자 이상 10글자 이하로 작성해주세요.',
      });
    } else {
      setHelperText({
        ...helperText,
        nickName: initHelperTextSignUpInput.nickName,
      });
    }
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

  const validatePasswordCheck = () => {
    if (signUpInput.password !== signUpInput.passwordCheck) {
      setHelperText({
        ...helperText,
        passwordCheck: '비밀번호는가 다릅니다. 확인해주세요.',
      });
    } else {
      setHelperText({
        ...helperText,
        passwordCheck: initHelperTextSignUpInput.passwordCheck,
      });
    }
  };

  const validateGender = (event: React.FocusEvent<HTMLSelectElement>) => {
    if (event.target.value === '') {
      setHelperText({
        ...helperText,
        gender: '카테고리를 선택해 주세요.',
      });
    } else {
      setHelperText({
        ...helperText,
        gender: initHelperTextSignUpInput.gender,
      });
    }
  };

  const validateAge = (event: React.FocusEvent<HTMLSelectElement>) => {
    if (event.target.value === '') {
      setHelperText({
        ...helperText,
        age: '카테고리를 선택해 주세요.',
      });
    } else {
      setHelperText({
        ...helperText,
        age: initHelperTextSignUpInput.age,
      });
    }
  };
  /////////// 유효성 검사 ////////////

  return (
    <div>
      <form onSubmit={singUpHandler}>
        <h3>닉네임</h3>
        <input
          onChange={signUpInputChangeHandler}
          value={signUpInput.nickName}
          name="nickName"
          type="text"
          onBlur={validateNickName}
        />
        <div style={{ color: 'red' }}>{helperText.nickName}</div>
        <h3>이메일</h3>
        <input
          onChange={signUpInputChangeHandler}
          value={signUpInput.email}
          name="email"
          type="email"
          onBlur={validateEmail}
        />
        <div style={{ color: 'red' }}>{helperText.email}</div>
        <h3>비밀번호</h3>
        <input
          onChange={signUpInputChangeHandler}
          value={signUpInput.password}
          name="password"
          type="password"
          onBlur={validatePassword}
        />
        <div style={{ color: 'red' }}>{helperText.password}</div>
        <h3>비밀번호 확인</h3>
        <input
          onChange={signUpInputChangeHandler}
          value={signUpInput.passwordCheck}
          name="passwordCheck"
          type="password"
          onBlur={validatePasswordCheck}
        />
        <div style={{ color: 'red' }}>{helperText.passwordCheck}</div>
        <h3>성별</h3>
        <select
          value={signUpInput.gender}
          name="gender"
          onChange={signUpSelectChanchHandler}
          onBlur={validateGender}
        >
          <option value="">성별을 선택해 주세요</option>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
          <option value="선택안함">선택안함</option>
        </select>
        <div style={{ color: 'red' }}>{helperText.gender}</div>
        <h3>연령</h3>
        <select
          value={signUpInput.age}
          name="age"
          onChange={signUpSelectChanchHandler}
          onBlur={validateAge}
        >
          <option value="">연령을 선택해 주세요</option>
          <option value="10대">10대</option>
          <option value="20대">20대</option>
          <option value="30대">30대</option>
          <option value="40대">40대</option>
          <option value="50대">50대</option>
          <option value="60대">60대</option>
          <option value="70대">70대</option>
          <option value="선택안함">선택안함</option>
        </select>
        <div style={{ color: 'red' }}>{helperText.age}</div>
        <button>가입</button>
      </form>
      <h3>휴대폰 번호</h3>
      <input
        onChange={signUpInputChangeHandler}
        value={signUpInput.phoneNumber}
        name="phoneNumber"
        type="text"
      />
      <button id="phone" onClick={phoneNumberPostHandler}>
        인증번호 보내기
      </button>
      <input
        onChange={signUpInputChangeHandler}
        value={signUpInput.phoneCode}
        name="phoneCode"
        type="text"
      />
      <button onClick={phoneNumberPostHandler}>인증하기</button>
      <SignOut />
      <DeleteAccount />
      <SignIn />
    </div>
  );
};

export default SignUp;
