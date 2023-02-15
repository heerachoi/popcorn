import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../services/firebase';
import {
  MyProfileWrapper,
  MyProfileNickname,
  NicknameModifyBox,
  ModifyButton,
  NicknameInput,
  ImgModifyButton,
  ProfileImgLabel,
  ProfileImgInput,
  NewImageForm,
} from './style';
import { updateProfile } from 'firebase/auth';
import { storage } from '../../../src/services/firebase';
import {
  getDownloadURL,
  ref,
  uploadString,
  listAll,
  uploadBytes,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const MyProfile = () => {
  const [nickname, setNickname] = useState<any>('');
  const [currentUser, setCurrentUser] = useState<any>('');

  const [imgFile, setImgFile] = useState(''); // 이미지 파일
  const [fileName, setFileName] = useState(''); // 이미지 파일 이름.확장자
  const [imgUploadUrl, setImgUploadUrl] = useState<any>(
    auth.currentUser?.photoURL,
  );
  console.log('aewklfjewkfwjfklweafjkewfjweklfjwf', auth);
  console.log('================================');
  console.log('imgUploadUrl ', imgUploadUrl);

  // 이미지 파일 input onChange 함수
  const newProfileImgOnChangeHandler = (
    // event : currentTarget과 target이 들어있는 객체
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // ❓target이랑 currentTarget이랑 똑같은데 currentTarget을 쓴 이유는 무엇인가?
    // target : 이미지를 넣으면 input type, id, class명을 받아와줌
    // target에는 인풋태그 자체가 들어오고 input file 타입은 내부적으로 FileList를 가지고 있다.
    // 그래서 theFile에는 추가한 파일 하나가 들어온다.
    // 우리는 이 파일을 읽어야하기 때문에 FileReader라는 API를 사용하면 된다.
    const target = event.currentTarget;
    const theFile = (target.files as FileList)[0]; // 이벤트로부터 파일을 얻어와서 첫번째 파일만 받음
    console.log('theFile', theFile);

    setFileName(theFile.name);

    const reader = new FileReader();
    reader.readAsDataURL(theFile); // file객체를 data url로 바꿔줌

    // 파일 읽기를 끝내면 state로 만들어둔 setImgFile에 값을 넣어줌
    reader.onloadend = (finishedEvent: any) => {
      console.log('finishedEvent', finishedEvent);
      setImgFile(finishedEvent.currentTarget.result);
    };
  };
  // 첫 랜딩시 로그인 확인
  // getImage useEffect, set으로 string값
  //
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user', user);
        // updateProfile(user )
        setCurrentUser(auth.currentUser);
        console.log('fewklfjwelfwef', currentUser);
        setImgUploadUrl(user.photoURL);
        // setNickname(auth.currentUser?.displayName);

        // setImgFile(user?.photoURL);
      } else {
        return console.log('로그인 안됨');
      }
    });
  }, [currentUser]);

  useEffect(() => {}, [imgUploadUrl]);

  // 닉네임 바꿔주는 함수
  const submitHandle = async (e: any) => {
    console.log('currentUser', currentUser);
    e.preventDefault();

    // Firebase storage에 이미지 업로드
    const imgRef = ref(storage, `profileUploadImg/${fileName + uuidv4()}`);

    // console.log('imgRef', imgRef);

    // let downloadImageUrl;

    // if (imgFile) {
    // imgFile : imgFile data 링크?같은 거임
    // console.log('imgFile', imgFile);
    // imgRef : FirebaseStorageImpl 파이어베이스 스토리지 관련

    const response = await uploadString(imgRef, imgFile, 'data_url');
    const downloadImageUrl = await getDownloadURL(response.ref);
    setImgUploadUrl(downloadImageUrl);
    console.log('downloadImageUrl', downloadImageUrl);
    // } else {
    // downloadImageUrl : firebasestorage링크가 생성됨
    // USER한테 이미지 URL로 setDoc
    // }
    // 저장한걸 get해와서 밑에 뿌려줘야 함
    await updateProfile(currentUser, {
      displayName: nickname,
      photoURL: downloadImageUrl,
    })
      .then(() => {
        alert('Profile updated!');
        setNickname('');
        console.log('imgUploadUrl', imgUploadUrl);

        // setImgUploadUrl('');
      })
      .catch((error) => {});
  };
  const NicknameChangeInput = (event: any) => {
    setNickname(event.target.value);
  };

  // 이미지 수정완료버튼 onSubmit 함수(json db 추가)

  // // db에 올라가는 데이터 구조
  //     const newProfile = {
  //       id: uuidv4(),
  //       UploadImg: downloadImageUrl,
  //     }
  // // db에 추가
  // try {
  //   axios.post('http://localhost:3001/newProfiles', newProfile)
  //   setNewImgInput(initImgInput);
  //   setImgFile('')
  // } catch(err) {
  //   console.log(err);
  // }

  // useEffect(() => {
  //   listAll(imageListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImgCall((prev: any) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);
  // console.log('imgFile', imgFile);

  return (
    <NewImageForm onSubmit={submitHandle}>
      <MyProfileWrapper>
        <div>
          {/* // label태그와 input태그를 연결함으로써 label만 눌러도 프로필 업데이트가 되게 연결시킴 */}
          <ProfileImgLabel htmlFor="profileUploadImg">
            <img src={imgUploadUrl} style={{ width: 150, height: 150 }} />
          </ProfileImgLabel>
          {/* // 인풋에서 열기버튼을 누르면 파이어베이스에 올라가게 */}
          <ProfileImgInput
            type="file"
            accept="image/*"
            id="profileUploadImg"
            onChange={newProfileImgOnChangeHandler}
            // style={{ display: 'none' }}
          />
        </div>
        {/* <ImgModifyButton>이미지 수정완료</ImgModifyButton> */}
        <MyProfileNickname>{currentUser?.displayName}</MyProfileNickname>
        <NicknameModifyBox>
          <NicknameInput
            placeholder="닉네임을 입력해주세요"
            onChange={NicknameChangeInput}
            value={nickname}
          />

          <ModifyButton type="submit">수정</ModifyButton>
        </NicknameModifyBox>
      </MyProfileWrapper>
    </NewImageForm>
  );
};

export default MyProfile;
