// library
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { globalBtn, modalStatus } from '../../../atoms';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
// firebase
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
// component
import CustomModal from '../../../shared/CustomModal';
// API
import { JSON_API } from '../../../services/api';
// Style
import * as S from './style';
import COLORS from '../../../assets/CSS/colors';

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
  const setGlobalButton = useSetRecoilState(globalBtn); // button 상태가 false면 페이지 이동 아니라면 모달창 오픈
  const [isModal, setIsModal] = useRecoilState(modalStatus); // 모달 true면 켜짐
  const modalStatusReset = useResetRecoilState(modalStatus); // recoil의 modalStatus를 defalut값으로 바꿔준다.

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
  const [phoneVerify, setPhoneVerify] = useState<boolean>(false); // 인증완료가 되지 않으면 회원가입 버튼을 누를 수 없게 하는 state
  const [requestedPV, setRequestedPV] = useState<boolean>(false); // 휴대폰 인증번호 요청 성공시 인증번호 입력칸을 생기게 하는 state
  const [dataId, setDataId] = useState<string>('');

  // 모달
  const modalStatusChangeHandler = (error: string) => {
    setIsModal({ ...isModal, [error]: !isModal.error }); // error가 뜨면 이 함수를 return 해준다. recoil에 있는 '키(error)' : 값 boolean의 반대
  };
  const modalReset = () => {
    modalStatusReset(); // recoil 리셋
  };

  // 회원가입 완료
  const signUpCompleteAlert = async () => {
    await signOut(auth); // 자동 로그인되서 로그아웃 해줌
    setGlobalButton(false); // 페이지 이동 방지 true값을 false로 바꿔줌
    modalStatusReset(); // modal을 닫아줌, 아니면 뒤로 갔을 때 모달 창이 떠 있다.
    navigate('/login', { state: signUpInput.email }); // 로그인 페이지로 이동, state : 회원가입 때 입력한 email
  };

  const signUpInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGlobalButton(true); // input 값이 바뀌는 순간 페이지 이동을 막기 위해 기본값을 true로 바꿔줌
    setSignUpInput({
      ...signUpInput, // 나머지 인풋값 그대로
      [event.target.name]: event.target.value, // 태그에서 설정해준 event.target.name : event.target.value를 'key': 'value'로 설정한다.
    });
  };

  const signUpSelectChanchHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    event.target.style.color = `${COLORS.black}`; // select에서 옵션을 선택하면 색깔이 바뀌게 하기 위해서
    setGlobalButton(true);
    setSignUpInput({
      ...signUpInput,
      [event.target.name]: event.target.value,
    });
  };

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
        're-container', // 리캡챠를 사용할 태그의 id
        {
          size: 'invisible', // 안보이는 리캡챠 설정
          callback: () => {
            // 리캡챠가 실행되면 콜백함수를 받음
            // setRecaptcha(grecaptcha);
          },
          'expired-callback': () => {
            console.log('reCAPTCHA expired, refreshing...');
            window.recaptchaVerifier.reset(); // 만료된 리캡챠를 리셋해주기 위한 함수   ❌ 아직 error 처리중
          },
        },
        auth, // getAuth()
      );
    }

    const appVerifier = window.recaptchaVerifier;
    // 인증번호를 보내는 메서드, 2번째 인수는 휴대폰 번호
    signInWithPhoneNumber(auth, '+82' + signUpInput.phoneNumber, appVerifier) // 입력한 번호로 인증번호 보내기
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setDataId(confirmationResult.verificationId); // 리캡챠에서 제공하는 Id
        setRequestedPV(true); // 번호입력칸 나옴
      })
      .catch((error) => {
        if (error.message.includes('invalid-phone-number'))
          return modalStatusChangeHandler('validPhoneNumber'); // 에러가 뜨면 모달창으로 알려줌
      });
  };

  // 인증번호 검증 이벤트
  const phoneVerifyHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const code = signUpInput.phoneCode; // 유저가 입력한 인증번호
    const authCredential = PhoneAuthProvider.credential(dataId, code); // 리캡챠에서 인증번호를 보낼 때 제공해준 Id와 code를 확인
    signInWithCredential(auth, authCredential) // 확인 완료 후 회원가입 및 로그인
      .then(() => {
        deleteUser(auth.currentUser!); // 회원가입 되자마자 회원탈퇴
        signOut(auth); // 회원가입 되자마자 로그아웃
        setPhoneVerify(true); // 회원가입 버튼을 누를 수 있음
        setRequestedPV(false); // 인증번호 입력칸 사라짐
        modalStatusChangeHandler('phoneValidComplete'); // 인증이 완료되었다는 모달창이 뜸
      })
      .catch((error) => {
        if (error.message.includes('invalid-verification-code'))
          return modalStatusChangeHandler('invalidVerificationCode'); // 유효하지 않은 인증번호 모달
        if (error.message.includes('code-expired'))
          return modalStatusChangeHandler('codeExpired'); // 만료된 인증번호 모달
      });
  };

  // 회원가입 클릭 이벤트
  const singUpHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUserWithEmailAndPassword(
      // 로그인 및 회원가입
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
        const userInfo = {
          age: signUpInput.age,
          email: signUpInput.email,
          gender: signUpInput.gender,
          nickName: signUpInput.nickName,
          phoneNumber: signUpInput.phoneNumber,
          profileImg: user.photoURL,
          id: user.uid,
        };
        axios.post(`${JSON_API}/users`, userInfo).then(() => {
          return modalStatusChangeHandler('signUpComplete');
        });
      })
      .catch((error) => {
        if (error.message.includes('email-already-in-use'))
          return modalStatusChangeHandler('emailAlreadyInUse'); // 이미 가입된 아이디 모달
      });
  };

  /////////// 유효성 검사 ////////////
  // 밑에서 onBlur에 이 함수를 넣어줌, focus 상태가 아닐 때 함수 실행됨
  const validateNickName = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value.length < 2 || event.target.value.length > 5) {
      // foucs한 value가 이 조건이라면
      setHelperText({
        ...helperText,
        nickName: '2글자 이상 5글자 이하로 작성해주세요.', // 닉네임 아래 경고문
      });
    } else {
      setHelperText({
        ...helperText,
        nickName: initHelperTextSignUpInput.nickName, // 아니라면 경고문 사라짐
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
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
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
        passwordCheck: '비밀번호가 다릅니다. 확인해주세요.',
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

  const isSignUpBtnDisabled = () => {
    return !(
      Object.values(helperText).every((input) => input === '') && phoneVerify
    );
  };

  const isEmptySignUpInput = () => {
    return Object.values(signUpInput).every((input) => input === '');
  };

  // 모든 인풋창이 비었을 때 페이지 이동 가능하게 함
  useEffect(() => {
    if (isEmptySignUpInput()) {
      setGlobalButton(false);
    }
  }, [Object.values(signUpInput)]);

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
            maxLength={4}
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
            maxLength={20}
            onBlur={validateEmail}
          />
          <S.HelperText>{helperText.email}</S.HelperText>
        </S.FormItemWrap>
        <S.FormItemWrap>
          <S.FormText>비밀번호 (소문자+숫자+특수문자 8자 이상)</S.FormText>
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
            <option value="male">남자</option>
            <option value="female">여자</option>
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
            <S.PhoneBtn
              id="phone"
              disabled={requestedPV && true}
              onClick={phoneNumberPostHandler}
            >
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
          <S.CancelBtn onClick={() => navigate('/login')}>취소</S.CancelBtn>
          {/* 모든 조건을 충족하면 회원가입을 누를 수 있다. */}
          <S.SignUpBtn disabled={isSignUpBtnDisabled()}>회원가입</S.SignUpBtn>
        </S.FormBtnWrap>
      </S.FormWrap>
      {/* 위에서 error가 떳을 때 Modal이 뜨는 태그들 */}
      {isModal.validPhoneNumber && (
        <CustomModal
          title="알림"
          text="알맞은 휴대폰 번호를 입력해 주세요."
          cancel="취소"
          submit="확인"
          onClick={modalReset}
        />
      )}
      {isModal.phoneValidComplete && (
        <CustomModal
          title="알림"
          text="인증이 완료되었습니다."
          cancel="취소"
          submit="확인"
          onClick={modalReset}
        />
      )}
      {isModal.invalidVerificationCode && (
        <CustomModal
          title="알림"
          text="인증번호를 입력해 주세요."
          cancel="취소"
          submit="확인"
          onClick={modalReset}
        />
      )}
      {isModal.codeExpired && (
        <CustomModal
          title="오류"
          text="인증번호가 틀립니다. 다시 입력해 주세요."
          cancel="취소"
          submit="확인"
          onClick={modalReset}
        />
      )}
      {isModal.signUpComplete && (
        <CustomModal
          title="가입완료"
          text="회원가입이 완료되었습니다."
          cancel="취소"
          submit="확인"
          onClick={signUpCompleteAlert}
        />
      )}
      {isModal.emailAlreadyInUse && (
        <CustomModal
          title="오류"
          text="이미 등록된 회원입니다. 이메일을 다시 입력해주세요."
          cancel="취소"
          submit="확인"
          onClick={modalReset}
        />
      )}
    </S.Wrap>
  );
};

export default SignUp;
