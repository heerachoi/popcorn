// library
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { globalBtn } from '../../atoms';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { ko } from 'date-fns/esm/locale';
// firebase
import { auth } from '../../services/firebase';
import { storage } from '../../services/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
// api
import { JSON_API } from '../../services/api';
// style
import * as S from './style';
import { BiImageAdd } from 'react-icons/bi';

interface NewStoreInput {
  title: string;
  storeName: string;
  storeAddress: string;
}

const NewStoreReport = () => {
  // date Picker 날짜 state
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  // 주소찾기 API 팝업창
  const [isOpenPost, setIsOpenPost] = useState<boolean>(false);

  const navigate = useNavigate();
  const setGlobalButton = useSetRecoilState(globalBtn);

  const initNewStoreInput = {
    title: '',
    storeName: '',
    storeAddress: '',
  };
  const [newStoreInput, setNewStoreInput] =
    useState<NewStoreInput>(initNewStoreInput);
  const [imgFile, setImgFile] = useState<string>(''); // 이미지 파일
  const [fileName, setFileName] = useState<string>(''); // 이미지 파일 이름
  const [etcContent, setEtcContent] = useState<string>('');
  const user = auth?.currentUser;

  // input onChange 함수
  const newStoreInputonChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGlobalButton(true);
    if (event.target.value.length > 20) {
      return alert('20글자 이하로 작성해 주세요.');
    } else {
      setNewStoreInput({
        ...newStoreInput,
        [event.target.name]: event.target.value,
      });
    }
  };

  // 이미지 파일 input onChange 함수
  const newStoreInfoImgoOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGlobalButton(true);
    const target = event.currentTarget;

    const theFile = (target.files as FileList)[0]; // 이벤트로부터 파일을 얻어와서 첫 번째 파일만 받음
    setFileName(theFile.name);

    const reader = new FileReader();
    reader.readAsDataURL(theFile); // file 객체를 data url로 바꿔줌

    reader.onloadend = (finishedEvent: any) => {
      setImgFile(finishedEvent.currentTarget.result);
    };
  };

  const cancleHandler = () => {
    if (window.confirm('작성을 취소하시겠습니까?')) {
      navigate('/');
    }
  };

  // 제보하기 버튼 onSubmit 함수(json db 추가)
  const newStoreInfoAddHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setGlobalButton(false);
    if (newStoreInput.storeAddress === '') {
      return alert('주소를 입력해 주세요!');
    }
    // firebase storage에 이미지 업로드
    const imgRef = ref(storage, `storeInfoImg/${fileName}`);

    let downloadImageUrl;
    if (imgFile) {
      const response = await uploadString(imgRef, imgFile, 'data_url');
      downloadImageUrl = await getDownloadURL(response.ref);
    } else {
      downloadImageUrl = '';
    }

    // 제보 날짜 받기 위해 today라는 변수 생성
    const today = new Date();

    // db에 올라가는 데이터 구조
    const newStore = {
      id: uuidv4(),
      user,
      title: newStoreInput.title,
      storeName: newStoreInput.storeName,
      storeAddress: newStoreInput.storeAddress,
      startDate: startDate?.toLocaleDateString(),
      endDate: endDate?.toLocaleDateString(),
      etcContent,
      infoImg: downloadImageUrl,
      reportedDate: today.toLocaleString(),
      category: '신규',
      status: false,
    };

    // db에 추가
    try {
      axios.post(`${JSON_API}/newStores`, newStore);
      setNewStoreInput(initNewStoreInput);
      setImgFile('');
      setEtcContent('');
      setStartDate(undefined);
      setEndDate(undefined);

      alert('제보 완료!');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      newStoreInput.title === '' &&
      newStoreInput.storeName === '' &&
      newStoreInput.storeAddress === '' &&
      startDate === undefined &&
      endDate === undefined &&
      etcContent === ''
    )
      setGlobalButton(false);
  }, [
    newStoreInput.title,
    newStoreInput.storeName,
    newStoreInput.storeAddress,
    startDate,
    endDate,
    etcContent,
  ]);

  // datePicker onChange 함수
  const startDateOnchange = (date: Date) => {
    setStartDate(date);
  };

  const endDateOnChange = (date: Date) => {
    if (startDate === undefined) {
      alert('시작 일자를 먼저 선택해 주세요.');
    } else {
      setEndDate(date);
    }
  };

  // 주소 검색 버튼 -> 주소 찾기 API 팝업창 뜸
  const openPostHandler = () => {
    setIsOpenPost(!isOpenPost);
  };

  // 주소 검색 후 특정 주소를 클릭했을 때 발생하는 이벤트
  const onCompletePost = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setNewStoreInput({
      ...newStoreInput,
      storeAddress: fullAddress,
    });
  };

  return (
    <S.NewStoreForm onSubmit={newStoreInfoAddHandler}>
      <S.ReportGrid>
        <S.ReportTitle>제보 제목</S.ReportTitle>
        <S.ReportTitleInput
          type="text"
          name="title"
          placeholder="제목을 입력해 주세요."
          required
          onChange={newStoreInputonChangeHandler}
          value={newStoreInput.title}
        />
      </S.ReportGrid>
      <S.ReportGrid>
        <S.ReportTitle>
          브랜드명
          <div>(스토어 이름)</div>
        </S.ReportTitle>
        <S.ReportTitleInput
          type="text"
          name="storeName"
          placeholder="스토어 이름을 입력해 주세요."
          required
          onChange={newStoreInputonChangeHandler}
          value={newStoreInput.storeName}
        />
      </S.ReportGrid>
      <S.ThreeGrid>
        <S.ReportTitle>주소</S.ReportTitle>
        <S.AddressInput
          width="300px"
          readOnly
          type="text"
          name="storeAddress"
          placeholder="주소를 검색해 주세요. "
          required
          onChange={newStoreInputonChangeHandler}
          value={newStoreInput.storeAddress}
        />

        <S.AddressBtn type="button" onClick={openPostHandler}>
          주소 검색
        </S.AddressBtn>
        {isOpenPost ? (
            <S.PostModal>
              <S.DaumPostcodeModal autoClose onComplete={onCompletePost} />
            </S.PostModal>
        ) : null}
      </S.ThreeGrid>

      <S.ThreeGrid>
        <S.ReportTitle>기간</S.ReportTitle>
        <S.DatePickerContainer>
          <S.DatePickerBox
            required
            locale={ko}
            selected={startDate}
            onChange={startDateOnchange}
            selectsStart
            startDate={startDate}
            closeOnScroll={true}
            showPopperArrow={false}
            dateFormat="yyyy-MM-dd"
            placeholderText="시작 일자"
          />
        </S.DatePickerContainer>
        <S.DatePickerContainer>
          <S.DatePickerBox
            required
            locale={ko}
            selected={endDate}
            onChange={endDateOnChange}
            selectsEnd
            endDate={endDate}
            minDate={startDate}
            closeOnScroll={true}
            showPopperArrow={false}
            dateFormat="yyyy-MM-dd"
            placeholderText="종료 일자"
          />
        </S.DatePickerContainer>
      </S.ThreeGrid>
      <S.ReportGrid>
        <S.ReportTitle>제보 내용</S.ReportTitle>
        <S.TextArea
          style={{ height: 100 }}
          name="etcContent"
          placeholder='제보 내용을 입력해 주세요. 없을 시 "없음"으로 입력해 주세요.'
          required
          onChange={(e) => setEtcContent(e.target.value)}
          value={etcContent}
        />
      </S.ReportGrid>
      <S.ReportGrid>
        <S.ReportTitle>이미지</S.ReportTitle>
        <S.StoreImgLabel htmlFor="storeInfoImg">
          <BiImageAdd style={{ fontSize: '60px' }} />
          {imgFile && <img src={imgFile} style={{ width: 150, height: 150 }} />}
        </S.StoreImgLabel>
        <input
          type="file"
          accept="image/*"
          id="storeInfoImg"
          onChange={newStoreInfoImgoOnChangeHandler}
          style={{ display: 'none' }}
        />
      </S.ReportGrid>
      <S.ButtonBox>
        <S.CancelBtn onClick={cancleHandler}>취소</S.CancelBtn>
        <S.AddBtn type="submit">제보하기</S.AddBtn>
      </S.ButtonBox>
    </S.NewStoreForm>
  );
};

export default NewStoreReport;
