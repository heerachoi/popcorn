import { useEffect, useState } from 'react';
import { auth } from '../../../services/firebase';
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
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import axios from 'axios';
import { globalBtn } from '../../../atoms';
import { useSetRecoilState } from 'recoil';
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
  const setGlobalButton = useSetRecoilState(globalBtn);

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

  const initHelperTextSignUpInput = { ...initSignUpInput };

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
    setGlobalButton(true);
    setSignUpInput({
      ...signUpInput,
      [event.target.name]: event.target.value,
    });
  };

  const signUpSelectChanchHandler = (event: any) => {
    event.target.style.color = '#323232';
    setSignUpInput({
      ...signUpInput,
      gender: event.value,
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
    // if문을 넣으니 여러번 눌러도 리캡챠가 실행되었다.
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        're-container',
        {
          size: 'invisible',
          callback: (response: any) => {
            console.log('recaptchaVerifier response', response);
            // setRecaptcha(grecaptcha);
          },
          'expired-callback': (data: any) => {
            console.log('reCAPTCHA expired, refreshing...');
            window.recaptchaVerifier.reset();
          },
        },
        auth,
      );
    }

    const appVerifier = window.recaptchaVerifier;
    // 인증번호를 보내는 메서드, 2번째 인수는 휴대폰 번호
    signInWithPhoneNumber(auth, '+82' + signUpInput.phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setDataId(confirmationResult.verificationId);
        setRequestedPV(true);
      })
      .catch((error) => {
        if (error.message.includes('invalid-phone-number'))
          return alert('알맞은 휴대폰 번호를 입력해 주세요.');
      });
  };

  const phoneVerifyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const code = signUpInput.phoneCode;
    const authCredential = PhoneAuthProvider.credential(dataId, code);
    signInWithCredential(auth, authCredential)
      .then(() => {
        deleteUser(auth.currentUser!);
        signOut(auth);
        setPhoneVerify(true);
        setRequestedPV(false);
        alert('인증이 완료되었습니다.');
      })
      .catch((error: any) => {
        if (error.message.includes('invalid-verification-code'))
          return alert('인증번호를 입력해 주세요.');
        if (error.message.includes('code-expired'))
          return alert('인증번호가 틀립니다. 다시 입력해 주세요.');
      });
  };

  // 회원가입 클릭 이벤트
  const singUpHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('ekfefkwejfwlkefjweklfjwk');

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
        let userInfo = {
          age: signUpInput.age,
          email: signUpInput.email,
          gender: signUpInput.gender,
          nickName: signUpInput.nickName,
          phoneNumber: signUpInput.phoneNumber,
          profileImg: user.photoURL,
          id: user.uid,
        };
        axios.post('http://localhost:4000/users', userInfo).then(() => {
          return confirmAlert({
            title: '가입완료',
            message: '회원가입이 완료되었습니다.',
            buttons: [
              {
                label: '확인',
                onClick: async () => {
                  await signOut(auth);
                  setGlobalButton(false);
                  navigate('/login', { state: signUpInput.email });
                },
              },
            ],
          });
        });
      })
      .catch((error) => {
        console.log(error.message);
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
        password: '조건에 맞게 입력해 주세요.',
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

  const validateAge = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setHelperText({
        ...helperText,
        age: '생년월일을 입력해 주세요.',
      });
    } else {
      setHelperText({
        ...helperText,
        age: initHelperTextSignUpInput.age,
      });
    }
  };
  /////////// 유효성 검사 ////////////

  useEffect(() => {
    if (
      signUpInput.nickName === '' &&
      signUpInput.email === '' &&
      signUpInput.password === '' &&
      signUpInput.passwordCheck === '' &&
      signUpInput.gender === '' &&
      signUpInput.age === '' &&
      signUpInput.phoneNumber === '' &&
      signUpInput.phoneCode === ''
    )
      setGlobalButton(false);
  }, [
    signUpInput.nickName,
    signUpInput.email,
    signUpInput.password,
    signUpInput.passwordCheck,
    signUpInput.gender,
    signUpInput.age,
    signUpInput.phoneNumber,
    signUpInput.phoneCode,
  ]);

  return (
    <S.Wrap>
      <S.TitleWrap>
        <S.TextBackground>
          <S.Title>회원가입</S.Title>
        </S.TextBackground>
      </S.TitleWrap>
      <S.FormWrap onSubmit={singUpHandler}>
        <S.FormItemWrap>
          <S.FormText>닉네임</S.FormText>
          <S.FormInput
            placeholder="닉네임을 입력해 주세요."
            onChange={signUpInputChangeHandler}
            value={signUpInput.nickName}
            name="nickName"
            type="text"
            onBlur={validateNickName}
          />
          <S.HelperText>{helperText.nickName}</S.HelperText>
        </S.FormItemWrap>
        <S.FormItemWrap>
          <S.FormText>이메일 (아이디)</S.FormText>
          <S.FormInput
            placeholder="이메일을 입력해 주세요."
            onChange={signUpInputChangeHandler}
            value={signUpInput.email}
            name="email"
            type="email"
            onBlur={validateEmail}
          />
          <S.HelperText>{helperText.email}</S.HelperText>
        </S.FormItemWrap>
        <S.FormItemWrap>
          <S.FormText>
            비밀번호 (대문자, 소문자+숫자+특수문자 8자 이상)
          </S.FormText>
          <S.FormInput
            placeholder="비밀번호를 입력해 주세요."
            onChange={signUpInputChangeHandler}
            value={signUpInput.password}
            name="password"
            type="password"
            onBlur={validatePassword}
          />
          <S.HelperText>{helperText.password}</S.HelperText>
        </S.FormItemWrap>
        <S.FormItemWrap>
          <S.FormText>비밀번호 확인</S.FormText>
          <S.FormInput
            placeholder="비밀번호를 확인해 주세요."
            onChange={signUpInputChangeHandler}
            value={signUpInput.passwordCheck}
            name="passwordCheck"
            type="password"
            onBlur={validatePasswordCheck}
          />
          <S.HelperText>{helperText.passwordCheck}</S.HelperText>
        </S.FormItemWrap>
        <S.FormItemWrap>
          <S.FormText>생년월일</S.FormText>
          <S.FormDate
            value={signUpInput.age}
            name="age"
            onChange={signUpInputChangeHandler}
            onBlur={validateAge}
            type="date"
            required
            data-placeholder="생년월일을 입력해 주세요."
          />
          <S.HelperText>{helperText.age}</S.HelperText>
        </S.FormItemWrap>
        <S.FormItemWrap>
          <S.FormText>성별</S.FormText>
          {/* 선택 항목을 선택하지 않았는데도 폼이 전송되는 것은 문제가 되므로 선택 태그의 값을 선택하지 않으면 폼이 전송되지 않도록 required 속성을 셀렉트 박스 태그에 추가합니다. */}
          <S.FormSelect
            as="select"
            value={signUpInput.gender}
            name="gender"
            onChange={signUpSelectChanchHandler}
            onBlur={validateGender}
          >
            <option value="" disabled selected>
              성별을 선택해 주세요.
            </option>
            <option value="men">남자</option>
            <option value="women">여자</option>
            <option value="선택안함">선택안함</option>
          </S.FormSelect>
          <S.HelperText>{helperText.gender}</S.HelperText>
        </S.FormItemWrap>
        <S.FormItemWrap>
          <S.FormText>휴대전화 (숫자만 입력)</S.FormText>
          <div id="re-container"></div>
          <S.FormBtnWrap>
            <S.PhoneInput
              onChange={signUpInputChangeHandler}
              value={signUpInput.phoneNumber}
              name="phoneNumber"
              type="text"
            />
            <S.PhoneBtn id="phone" onClick={phoneNumberPostHandler}>
              인증번호 보내기
            </S.PhoneBtn>
          </S.FormBtnWrap>
        </S.FormItemWrap>
        <S.FormItemWrap>
          <S.FormBtnWrap>
            {requestedPV ? (
              <>
                <S.PhoneInput
                  onChange={signUpInputChangeHandler}
                  value={signUpInput.phoneCode}
                  name="phoneCode"
                  type="text"
                />
                <S.PhoneBtn id="phoneCodeBtn" onClick={phoneVerifyHandler}>
                  인증하기
                </S.PhoneBtn>
              </>
            ) : null}
          </S.FormBtnWrap>
        </S.FormItemWrap>
        <S.FormBtnWrap>
          <S.CancleBtn onClick={() => navigate('/login')}>취소</S.CancleBtn>
          <S.SignUpBtn
            disabled={
              helperText.nickName === '' &&
              helperText.email === '' &&
              helperText.password === '' &&
              helperText.passwordCheck === '' &&
              helperText.age === '' &&
              helperText.gender === '' &&
              phoneVerify
                ? false
                : true
            }
          >
            회원가입
          </S.SignUpBtn>
        </S.FormBtnWrap>
      </S.FormWrap>
    </S.Wrap>
  );
};

export default SignUp;
