import React from 'react';
import { useState } from 'react';
import { InfoErrorForm, ErrorImgLabel } from './style';
import { BiImageAdd } from 'react-icons/bi';
import { db, storage } from '../../../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const InfoError: any = () => {
  const [errorStoreName, setErrorStoreName] = useState<string>(''); // 브랜드명
  const [errorContent, setErrorContent] = useState<string>(''); // 오류수정건의
  const [errImgFile, setErrImgFile] = useState(''); // 이미지 파일
  const [errFileName, setErrFileName] = useState(''); //이미지 파일 이름

  // 브랜드명 onChange함수
  const ErrStoreNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorStoreName(event.target.value);
  };

  // 오류 수정 건의 onChange함수
  const ErrContentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorContent(event.target.value);
  };

  // 이미지 파일 input onChange 함수
  const errImgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const theFile = (target.files as FileList)[0]; // 이벤트로부터 파일을 얻어와서 첫 번째 파일만 받음

    setErrFileName(theFile.name);

    const reader = new FileReader();
    reader.readAsDataURL(theFile); // file 객체를 data url로 바꿔줌
    reader.onloadend = (finishedEvent: any) => {
      setErrImgFile(finishedEvent.currentTarget.result);
    };
  };

  // 제보하기 버튼 클릭 시 파이어베이스에 데이터 업로드
  const errInfoAddHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errImgRef = ref(storage, `errInfoImg/${errFileName}`);

    let downloadImgUrl;
    if (errImgFile) {
      const response = await uploadString(errImgRef, errImgFile, 'data_url');
      downloadImgUrl = await getDownloadURL(response.ref);
    } else {
      downloadImgUrl = '';
    }

    const newErrorInfo = {
      errorStoreName,
      errorContent,
      errInfoImg: downloadImgUrl,
    };

    try {
      await setDoc(doc(db, 'newError', uuidv4()), newErrorInfo);
      setErrorStoreName('');
      setErrorContent('');
      setErrImgFile('');

      alert('제보 완료');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <InfoErrorForm onSubmit={errInfoAddHandler}>
        <div>
          <h4>1. 브랜드명 (스토어 이름)</h4>
          <input
            type="text"
            value={errorStoreName}
            onChange={ErrStoreNameHandler}
          />
        </div>
        <div>
          <h4>2. 오류 수정 건의</h4>
          <input
            type="text"
            value={errorContent}
            onChange={ErrContentHandler}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <ErrorImgLabel htmlFor="errorImg">
            <BiImageAdd />
            {errImgFile && (
              <img src={errImgFile} style={{ width: 150, height: 150 }} />
            )}
          </ErrorImgLabel>
          <input
            type="file"
            accept="image/*"
            id="errorImg"
            onChange={errImgHandler}
            style={{ display: 'none' }}
          />
        </div>
        <div>
          <button>취소</button>
          <button type="submit">제보하기</button>
        </div>
      </InfoErrorForm>
    </>
  );
};

export default InfoError;
