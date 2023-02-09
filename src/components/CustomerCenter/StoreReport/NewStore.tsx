import React from 'react';
import { useState } from 'react';
import { NewStoreForm, StoreImgLabel } from './style';
import { BiImageAdd } from 'react-icons/bi';
import { setDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const NewStore = () => {
  const [storeName, setStoreName] = useState<string>(''); // 브랜드명
  const [storePlace, setStorePlace] = useState<string>(''); // 위치
  const [etcContent, setEtcContent] = useState<string>(''); // 기타
  const [startDate, setStartDate] = useState(''); // 시작날짜
  const [endDate, setEndDate] = useState(''); // 종료날짜
  const [imgFile, setImgFile] = useState(''); // 이미지 파일
  const [fileName, setFileName] = useState(''); // 이미지 파일 이름

  // 브랜드명 onChange함수
  const storeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStoreName(event.target.value);
  };

  // 위치 onChange함수
  const storePlaceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStorePlace(event.target.value);
  };

  // 기타 onChange함수
  const etcContentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEtcContent(event.target.value);
  };

  // 시작날짜 onChange함수
  const startDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  // 종료날짜 onChange함수
  const endDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  // 이미지 파일 input onChange 함수
  const newStoreImgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.files)
    const target = event.currentTarget;
    // console.log('target', target);
    const theFile = (target.files as FileList)[0]; // 이벤트로부터 파일을 얻어와서 첫 번째 파일만 받음
    // console.log('theFile', theFile);
    setFileName(theFile.name);

    const reader = new FileReader();
    reader.readAsDataURL(theFile); // file 객체를 data url로 바꿔줌
    // console.log('reader.readAsDataURL(theFile)', reader.readAsDataURL(theFile));
    reader.onloadend = (finishedEvent: any) => {
      console.log('finishedEvent', finishedEvent);
      // url = finishedEvent.currentTarget.result;

      setImgFile(finishedEvent.currentTarget.result);
    };
  };

  // 제보하기 버튼 클릭 시 파이어베이스에 데이터 업로드
  const InfoAddHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // console.log('ImgFileName', ImgFileName);

    // const imgRef = ref(storage, `storeInfoImg/${uuidv4()}`);
    const imgRef = ref(storage, `storeInfoImg/${fileName}`);

    // console.log('imgref', imgRef);
    // console.log('imgFile', imgFile);
    let downloadImageUrl;
    if (imgFile) {
      const response = await uploadString(imgRef, imgFile, 'data_url');
      downloadImageUrl = await getDownloadURL(response.ref);
      // console.log('downloadImageUrl', downloadImageUrl);
    } else {
      downloadImageUrl = '';
      // console.log('downloadImageUrl', downloadImageUrl);
    }
    const newStoreInfo = {
      storeName,
      storePlace,
      etcContent,
      startDate,
      endDate,
      infoImg: downloadImageUrl,
    };

    // await addDoc(collection(db, 'NewStore'), newStoreInfo);
    try {
      await setDoc(doc(db, 'NewStore', uuidv4()), newStoreInfo);
      setStoreName('');
      setStorePlace('');
      setEtcContent('');
      setStartDate('');
      setEndDate('');
      setImgFile('');

      alert('제보 완료');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <NewStoreForm onSubmit={InfoAddHandler}>
        <div>
          <h4>1. 브랜드명 (스토어 이름)</h4>
          <input type="text" value={storeName} onChange={storeNameHandler} />
        </div>
        <div>
          <h4>2. 위치</h4>
          <input type="text" value={storePlace} onChange={storePlaceHandler} />
        </div>
        <div>
          <h4>3. 기간</h4>
          <p>시작 날짜</p>
          <input type="date" value={startDate} onChange={startDateHandler} />
          <p>종료 날짜</p>
          <input type="date" value={endDate} onChange={endDateHandler} />
        </div>
        <div>
          <h4>4. 기타</h4>
          <input type="text" value={etcContent} onChange={etcContentHandler} />
        </div>
        <div style={{ marginTop: 20 }}>
          <StoreImgLabel htmlFor="storeImg">
            <BiImageAdd />
            {imgFile && (
              <img src={imgFile} style={{ width: 150, height: 150 }} />
            )}
          </StoreImgLabel>
          <input
            type="file"
            accept="image/*"
            id="storeImg"
            onChange={newStoreImgHandler}
            style={{ display: 'none' }}
          />
        </div>
        <div>
          <button>취소</button>
          <button type="submit">제보하기</button>
        </div>
      </NewStoreForm>
    </>
  );
};

export default NewStore;
