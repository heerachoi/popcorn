import React, { useState } from 'react';
import { NewStoreForm, StoreImgLabel } from './style';
import { BiImageAdd } from 'react-icons/bi';
import { storage } from '../../services/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { auth } from '../../services/firebase';

interface NewStoreInput {
  title: string;
  storeName: string;
  storePlace: string;
  startDate: string;
  endDate: string;
  etcContent: string;
}

const NewStoreReport: any = () => {
  const initNewStoreInput = {
    title: '',
    storeName: '',
    storePlace: '',
    startDate: '',
    endDate: '',
    etcContent: '',
  };

  const [newStoreInput, setNewStoreInput] =
    useState<NewStoreInput>(initNewStoreInput);
  const [imgFile, setImgFile] = useState(''); // 이미지 파일
  const [fileName, setFileName] = useState(''); // 이미지 파일 이름

  const userId = auth?.currentUser;

  // input onChange 함수
  const newStoreInputonChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewStoreInput({
      ...newStoreInput,
      [event.target.name]: event.target.value,
    });
  };

  // 이미지 파일 input onChange 함수
  const newStoreInfoImgoOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const target = event.currentTarget;
    console.log('target', target);

    const theFile = (target.files as FileList)[0]; // 이벤트로부터 파일을 얻어와서 첫 번째 파일만 받음
    console.log('theFile', theFile);
    setFileName(theFile.name);

    const reader = new FileReader();
    reader.readAsDataURL(theFile); // file 객체를 data url로 바꿔줌

    reader.onloadend = (finishedEvent: any) => {
      setImgFile(finishedEvent.currentTarget.result);
      console.log(
        'finishedEvent.currentTarget.result',
        finishedEvent.currentTarget.result,
      );
    };
  };

  // 제보하기 버튼 onSubmit 함수(json db 추가)
  const newStoreInfoAddHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

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
      userId,
      title: newStoreInput.title,
      storeName: newStoreInput.storeName,
      storePlace: newStoreInput.storePlace,
      startDate: newStoreInput.startDate,
      endDate: newStoreInput.endDate,
      etcContent: newStoreInput.etcContent,
      infoImg: downloadImageUrl,
      date: today.toLocaleString(),
    };

    // db에 추가
    try {
      axios.post('http://localhost:3001/newStores', newStore);
      setNewStoreInput(initNewStoreInput);
      setImgFile('');

      alert('제보 완료!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NewStoreForm onSubmit={newStoreInfoAddHandler}>
      <div>
        <h2>제목</h2>
        <input
          type="text"
          name="title"
          onChange={newStoreInputonChangeHandler}
          value={newStoreInput.title}
        />
        <div>
          <h2>브랜드명 (스토어 이름)</h2>
          <input
            type="text"
            name="storeName"
            onChange={newStoreInputonChangeHandler}
            value={newStoreInput.storeName}
          />
          <h2>위치</h2>
          <input
            type="text"
            name="storePlace"
            onChange={newStoreInputonChangeHandler}
            value={newStoreInput.storePlace}
          />
        </div>
        <div>
          <h2>기간</h2>
          <label htmlFor="">시작 날짜</label>
          <input
            type="date"
            name="startDate"
            onChange={newStoreInputonChangeHandler}
            value={newStoreInput.startDate}
          />
          <label htmlFor="">종료 날짜</label>
          <input
            type="date"
            name="endDate"
            onChange={newStoreInputonChangeHandler}
            value={newStoreInput.endDate}
          />
        </div>
        <h2>기타 내용</h2>
        <input
          type="text"
          name="etcContent"
          onChange={newStoreInputonChangeHandler}
          value={newStoreInput.etcContent}
        />
        <div style={{ marginTop: 20 }}>
          <StoreImgLabel htmlFor="storeInfoImg">
            <BiImageAdd />
            {imgFile && (
              <img src={imgFile} style={{ width: 150, height: 150 }} />
            )}
          </StoreImgLabel>
          <input
            type="file"
            accept="image/*"
            id="storeInfoImg"
            onChange={newStoreInfoImgoOnChangeHandler}
            style={{ display: 'none' }}
          />
        </div>
        <div>
          <button>취소</button>
          <button type="submit">제보하기</button>
        </div>
      </div>
    </NewStoreForm>
  );
};

export default NewStoreReport;
