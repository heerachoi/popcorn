import React from 'react';
import { useState } from 'react';
import { InfoErrorForm, ErrorImgLabel } from './style';
import { BiImageAdd } from 'react-icons/bi';
import { storage } from '../../services/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { auth } from '../../services/firebase';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

interface InfoErrInput {
  title: string;
  storeName: string;
  infoErrContent: string;
  infoModifiContent: string;
}

// 정보 오류/수정 제보
const InfoError: any = () => {
  const initInfoErrModifiInput = {
    title: '',
    storeName: '',
    infoErrContent: '',
    infoModifiContent: '',
  };

  const [infoErrModifiInput, setInfoErrModifiInput] = useState<InfoErrInput>(
    initInfoErrModifiInput,
  );
  const [errImgFile, setErrImgFile] = useState(''); // 이미지 파일
  const [errFileName, setErrFileName] = useState(''); //이미지 파일 이름

  const userId = auth?.currentUser;

  // input onChange 함수
  const infoErrModifiOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInfoErrModifiInput({
      ...infoErrModifiInput,
      [event.target.name]: event.target.value,
    });
  };

  // 이미지 파일 input onChange 함수
  const errModifiImgOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const target = event.currentTarget;
    const theFile = (target.files as FileList)[0]; // 이벤트로부터 파일을 얻어와서 첫 번째 파일만 받음
    setErrFileName(theFile.name);

    const reader = new FileReader();
    reader.readAsDataURL(theFile); // file 객체를 data url로 바꿔줌

    reader.onloadend = (finishedEvent: any) => {
      setErrImgFile(finishedEvent.currentTarget.result);
    };
  };

  // // 제보하기 버튼 onSubmit 함수 (json db 추가)
  const errModifiInfoAddHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    // firebase storage에 이미지 업로드
    const errInfoImgRef = ref(storage, `errInfoImg/${errFileName}`);

    let downloadImgUrl;
    if (errImgFile) {
      const response = await uploadString(
        errInfoImgRef,
        errImgFile,
        'data_url',
      );
      downloadImgUrl = await getDownloadURL(response.ref);
    } else {
      downloadImgUrl = '';
    }

    // 제보 날짜 받기 위해 today라는 변수 생성
    const today = new Date();

    // db에 올라가는 데이터 구조
    const newErrModifiInfo = {
      id: uuidv4(),
      userId,
      title: infoErrModifiInput.title,
      storeName: infoErrModifiInput.storeName,
      infoErrContent: infoErrModifiInput.infoErrContent,
      infoModifiContent: infoErrModifiInput.infoModifiContent,
      errImg: downloadImgUrl,
      date: today.toLocaleString(),
    };

    // db에 추가
    try {
      axios.post(
        'http://localhost:3001/infoErrModifiContents',
        newErrModifiInfo,
      );
      setInfoErrModifiInput(initInfoErrModifiInput);
      setErrImgFile('');

      alert('제보 완료!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <InfoErrorForm onSubmit={errModifiInfoAddHandler}>
      <div>
        <h2>제목</h2>
        <input
          type="text"
          name="title"
          onChange={infoErrModifiOnChangeHandler}
          value={infoErrModifiInput.title}
        />
        <h2>브랜드명 (스토어 이름)</h2>
        <input
          type="text"
          name="storeName"
          onChange={infoErrModifiOnChangeHandler}
          value={infoErrModifiInput.storeName}
        />
        <h2>정보 오류 내용</h2>
        <input
          type="text"
          name="infoErrContent"
          onChange={infoErrModifiOnChangeHandler}
          value={infoErrModifiInput.infoErrContent}
        />
        <h2>정보 수정 내용</h2>
        <input
          type="text"
          name="infoModifiContent"
          onChange={infoErrModifiOnChangeHandler}
          value={infoErrModifiInput.infoModifiContent}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <ErrorImgLabel htmlFor="storeInfoImg">
          <BiImageAdd />
          {errImgFile && (
            <img src={errImgFile} style={{ width: 150, height: 150 }} />
          )}
        </ErrorImgLabel>
        <input
          type="file"
          accept="image/*"
          id="storeInfoImg"
          onChange={errModifiImgOnChangeHandler}
          style={{ display: 'none' }}
        />
      </div>
      <div>
        <button>취소</button>
        <button type="submit">제보하기</button>
      </div>
    </InfoErrorForm>
  );
};

export default InfoError;
