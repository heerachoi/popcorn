import React, { useState } from 'react';
import * as S from './style';
import { BiImageAdd } from 'react-icons/bi';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { storage } from '../../services/firebase';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Store } from '../../types/data/storeInterface';
import datas from '../../data/popupStore.json';
import { useNavigate } from 'react-router-dom';

const MasterNewPost = () => {
  const navigate = useNavigate();
  const initialState: Store = {
    id: '',
    view: {},
    like: 0,
    hate: 0,
    title: '',
    address: '',
    open: '',
    close: '',
    location: '',
    item: '',
    openingTime: [],
    closeTime: [],
    significantContent: '',
    explain: '',
    sns: '',
    web: '',
    imgURL: [],
    lat: '',
    lon: '',
    category: '',
    reserveURL: '',
  };
  const [newPostInput, setNewPostInput] = useState<Store>(initialState);
  const [imgFile, setImgFile] = useState(''); // 이미지 파일
  const [fileName, setFileName] = useState(''); // 이미지 파일 이름

  const newPostInputChangeHandler: any = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewPostInput({
      ...newPostInput,
      [event.target.name]: event.target.value,
    });
  };

  // 이미지 파일 input onChange 함수
  const newPostImgOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const target = event.currentTarget;

    const theFile = (target.files as FileList)[0]; // 이벤트로부터 파일을 얻어와서 첫 번째 파일만 받음
    setFileName(theFile.name);

    const reader = new FileReader();
    reader.readAsDataURL(theFile); // file 객체를 data url로 바꿔줌

    reader.onloadend = (finishedEvent: any) => {
      setImgFile(finishedEvent.currentTarget.result);
    };
  };

  // 작성하기 버튼 클릭 시 새 게시물 db에 추가
  const newPostAddHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // firebase storage에 이미지 업로드
    const imgRef = ref(storage, `masterNewPostImg/${fileName}`);

    let downloadImageUrl;
    if (imgFile) {
      const response = await uploadString(imgRef, imgFile, 'data_url');
      downloadImageUrl = await getDownloadURL(response.ref);
    } else {
      downloadImageUrl = '';
    }

    // 월~일 오픈 시간
    const openingTime = [newPostInput.openingTime];
    for (let i = 0; i < 7; i++) {
      openingTime[i] = newPostInput.openingTime;
    }

    // 월~일 마감 시간
    const closeTime = [newPostInput.closeTime];
    for (let i = 0; i < 7; i++) {
      closeTime[i] = newPostInput.closeTime;
    }

    // popupStore.json db에 올라가는 데이터 구조
    const NewPost = {
      id: '',
      view: {
        '10': 0,
        '20': 0,
        '30': 0,
        '40+': 0,
        women: 0,
        men: 0,
        연령모름: 0,
        성별모름: 0,
        all: 0,
      },
      like: 0,
      hate: 0,
      title: newPostInput.title,
      address: newPostInput.address,
      open: newPostInput.open,
      close: newPostInput.close,
      location: newPostInput.location,
      item: newPostInput.item,
      openingTime: openingTime,
      closeTime: closeTime,
      significantContent: newPostInput.significantContent,
      explain: newPostInput.explain,
      sns: newPostInput.sns,
      web: newPostInput.web,
      imgURL: [downloadImageUrl],
      lat: '',
      lon: '',
      category: '팝업스토어',
      reserveURL: '',
    };

    //db에 추가
    // try {
    //   axios.post('http://localhost:3010/Store', NewPost);
    //   setNewPostInput(initialState);
    //   setImgFile('');

    //   alert('작성 완료!');
    //   navigate('/master');
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <S.NewPostWrap>
      <S.TitleBackground />
      <S.NewPostTitle>새 게시물 작성</S.NewPostTitle>
      <S.NewPostContainer onSubmit={newPostAddHandler}>
        <S.PostGrid>
          <S.PostTitle>팝업스토어 이름</S.PostTitle>
          <S.TitleInput
            type="text"
            placeholder="팝업스토어 이름"
            name="title"
            onChange={newPostInputChangeHandler}
            value={newPostInput.title}
          />
        </S.PostGrid>
        <S.PostGrid>
          <S.PostTitle>주소</S.PostTitle>
          <S.TitleInput
            type="text"
            placeholder="(ex: 서울특별시 성동구 성수동)"
            name="address"
            onChange={newPostInputChangeHandler}
            value={newPostInput.address}
          />
        </S.PostGrid>
        <S.TreeGridBox>
          <S.PostTitle>기간</S.PostTitle>
          <S.TitleInput
            style={{ width: 200, marginRight: '50px' }}
            type="date"
            data-placeholder="시작 일자"
            required
            name="open"
            onChange={newPostInputChangeHandler}
            value={newPostInput.open}
          />
          <S.TitleInput
            style={{ width: 200 }}
            type="date"
            data-placeholder="종료 일자"
            required
            name="close"
            onChange={newPostInputChangeHandler}
            value={newPostInput.close}
          />
        </S.TreeGridBox>
        <S.TreeGridBox>
          <S.PostTitle>영업시간</S.PostTitle>
          <S.TitleInput
            style={{ width: 200 }}
            type="text"
            placeholder="오픈시간"
            name="openingTime"
            onChange={newPostInputChangeHandler}
            value={newPostInput.openingTime}
          />
          <S.TitleInput
            style={{ width: 200 }}
            type="text"
            placeholder="마감시간"
            name="closeTime"
            onChange={newPostInputChangeHandler}
            value={newPostInput.closeTime}
          />
        </S.TreeGridBox>
        <S.PostGrid>
          <S.PostTitle>특이사항</S.PostTitle>
          <S.TitleInput
            type="text"
            placeholder="특이사항 (ex:월요일 휴무, 금요일만 20시 마감)"
            name="significantContent"
            onChange={newPostInputChangeHandler}
            value={newPostInput.significantContent}
          />
        </S.PostGrid>
        <S.PostGrid>
          <S.PostTitle>팝업스토어 설명</S.PostTitle>
          <S.TextArea
            style={{ height: 100 }}
            placeholder="팝업스토어에 대한 설명을 입력해 주세요."
            name="explain"
            onChange={newPostInputChangeHandler}
            value={newPostInput.explain}
          />
        </S.PostGrid>
        <S.TreeGridBox>
          <S.PostTitle>SNS</S.PostTitle>
          <S.TitleInput
            style={{ width: 300 }}
            type="text"
            placeholder="공식 SNS나 웹사이트 주소를 입력해 주세요."
            name="sns"
            onChange={newPostInputChangeHandler}
            value={newPostInput.sns}
          />
          <S.TitleInput
            style={{ width: 300 }}
            type="text"
            placeholder="공식 SNS나 웹사이트 주소를 입력해 주세요."
            name="web"
            onChange={newPostInputChangeHandler}
            value={newPostInput.web}
          />
        </S.TreeGridBox>
        <S.PostGrid>
          <S.PostTitle>카테고리</S.PostTitle>
          <S.TitleInput
            style={{ width: 300 }}
            type="text"
            placeholder="카테고리를 입력해 주세요. (ex:의류, 식음료 등)"
            name="item"
            onChange={newPostInputChangeHandler}
            value={newPostInput.item}
          />
        </S.PostGrid>
        <S.PostGrid>
          <S.PostTitle>이미지</S.PostTitle>
          <S.ImgLabel htmlFor="newPostImg">
            <BiImageAdd style={{ fontSize: '60px' }} />
            {imgFile && (
              <img src={imgFile} style={{ width: 150, height: 150 }} />
            )}
          </S.ImgLabel>
          <input
            type="file"
            accept="image/*"
            id="newPostImg"
            onChange={newPostImgOnChangeHandler}
            style={{ display: 'none' }}
          />
        </S.PostGrid>
        <S.BtnBox>
          <S.CancleAddBtn
            style={{ backgroundColor: 'white', color: '#9B9B9B' }}
            onClick={() => navigate('/master')}
          >
            취소
          </S.CancleAddBtn>
          <S.CancleAddBtn type="submit">작성하기</S.CancleAddBtn>
        </S.BtnBox>
      </S.NewPostContainer>
    </S.NewPostWrap>
  );
};

export default MasterNewPost;
