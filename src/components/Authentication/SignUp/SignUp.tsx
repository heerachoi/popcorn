import { useState } from 'react';
import { auth, db } from '../../../services/firebase';
import {
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  updateProfile,
  signInWithPhoneNumber,
  deleteUser,
  signOut,
  PhoneAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
  const [phoneVerify, setPhoneVerify] = useState(false);
  const [requestedPV, setRequestedPV] = useState(false);
  const [dataId, setDataId] = useState('');

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
    // 리캡챠가 실행되지 않았을 때만 리캡챠를 실행
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        're-container',
        {
          size: 'invisible',
          callback: () => {},
        },
        auth,
      );
    }
    const appVerifier = window.recaptchaVerifier;
    console.log(!appVerifier);
    const provider = new PhoneAuthProvider(auth);
    provider
      .verifyPhoneNumber('+82' + signUpInput.phoneNumber, appVerifier)
      .then((verificationId) => {
        setDataId(verificationId);
        setRequestedPV(true);
      });

    // 인증번호를 보내는 메서드, 2번째 인수는 휴대폰 번호
    // signInWithPhoneNumber(auth, '+82' + signUpInput.phoneNumber, appVerifier)
    //   .then((confirmationResult) => {
    //     window.confirmationResult = confirmationResult;
    //     console.log(confirmationResult);
    //     setDataId(confirmationResult.verificationId);
    //     setRequestedPV(true);
    //   })
    //   .catch((error) => {
    //     if (error.message.includes('invalid-phone-number'))
    //       return alert('알맞은 휴대폰 번호를 입력해 주세요.');
    //   });
  };

  const phoneVerifyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(window.verificationId);
    // Obtain verificationCode from the user.
    const code = signUpInput.phoneCode;
    const authCredential = PhoneAuthProvider.credential(dataId, code);
    console.log('code', code);
    console.log(authCredential);
    const userCredential = signInWithCredential(auth, authCredential).then(
      () => {
        deleteUser(auth.currentUser!);
        signOut(auth);
        setPhoneVerify(true);
        setRequestedPV(false);
      },
    );

    // const code = signUpInput.phoneCode;
    // window.confirmationResult
    //   .confirm(code)
    //   .then(() => {
    //     deleteUser(auth.currentUser!);
    //     signOut(auth);
    //     setPhoneVerify(true);
    //     setRequestedPV(false);
    //     alert('인증이 완료되었습니다.');
    //     // ...
    //   })
    //   .catch((error: any) => {
    //     // User couldn't sign in (bad verification code?)
    //     // ...
    //     console.log(error);
    //     if (error.message.includes('invalid-verification-code'))
    //       return alert('인증번호를 입력해 주세요.');
    //     if (error.message.includes('code-expired'))
    //       return alert('인증번호가 틀립니다. 다시 입력해 주세요.');
    //   });
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
      return confirmAlert({
        title: '오류',
        message: '빈칸을 입력해 주세요.',
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
    if (signUpInput.gender === '' || signUpInput.age === '')
      return confirmAlert({
        title: '오류',
        message: '카테고리를 선택해 주세요.',
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
    if (!phoneVerify || requestedPV) return alert('휴대폰 인증이 필요합니다.');
    // 이메일과 패스워드로 유저를 만들어주겠다. 라는 함수
    await createUserWithEmailAndPassword(
      // 위에서 만든 auth라는 것을 전달해주면서
      // email과 password를 전달해줘야함
      // 회원가입할 때 입력받는 email과 password를 이곳에 전달해주기만 하면 이 함수는 작동이 됨

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
          phoneNumber: signUpInput.phoneNumber,
        });
        console.log(user);
        // input값 초기화
        return confirmAlert({
          title: '가입완료',
          message: '회원가입이 완료되었습니다.',
          buttons: [
            {
              label: '확인',
              onClick: () => {
                navigate('/login');
              },
            },
          ],
        });
      })
      .catch((error) => {
        if (error.message.includes('email-already-in-use'))
          return confirmAlert({
            title: '오류',
            message: '이미 등록된 회원입니다. 이메일을 다시 입력해주세요.',
            buttons: [
              {
                label: '확인',
                onClick: () => {},
              },
            ],
          });
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
        <h3>휴대폰 번호</h3>
        <div id="re-container"></div>
        <input
          onChange={signUpInputChangeHandler}
          value={signUpInput.phoneNumber}
          name="phoneNumber"
          type="text"
        />
        <button id="phone" onClick={phoneNumberPostHandler}>
          인증번호 보내기
        </button>
        {requestedPV ? (
          <>
            <input
              onChange={signUpInputChangeHandler}
              value={signUpInput.phoneCode}
              name="phoneCode"
              type="text"
            />
            <button id="phoneCodeBtn" onClick={phoneVerifyHandler}>
              인증하기
            </button>
          </>
        ) : null}
        <div>
          <button
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인 화면으로 돌아가기
          </button>
        </div>
        <div>
          <button>가입</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
