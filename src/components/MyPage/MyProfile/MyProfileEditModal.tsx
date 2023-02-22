import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { auth, storage } from '../../../services/firebase';
import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import * as S from './style';
import UpdatePassword from '../../Authentication/UpdatePassword/UpdatePassword';
import { AnyARecord } from 'dns';
import { useRecoilState, useRecoilValue } from 'recoil';
import { editModal } from '../../../atoms';
import { userInfo } from '../../../atoms';

const MyProfileEditModal = () => {
  const [open, setOpen] = useRecoilState(editModal);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = useRecoilValue(userInfo);

  console.log('user', user);

  // const [nickname, setNickname] = useState<any>(''); // 닉네임
  // const [currentUser, setCurrentUser] = useState<any>('');
  // const [imgFile, setImgFile] = useState(''); // 이미지 파일 엄청 긴 이름
  // const [imgFileName, setImgFileName] = useState(''); // 이미지 파일 이름.jpg
  // const [imgUploadUrl, setImgUploadUrl] = useState<any>(
  //   auth.currentUser?.photoURL,
  // );
  // console.log('🔥🔥🔥🔥🔥🔥nickname🔥🔥🔥🔥🔥🔥', nickname);
  // // 변경할 이미지를 input창에 넣으면 변경됨
  // const saveNewProfileImg = (event: any) => {
  //   console.log('🔥🔥🔥🔥🔥🔥event🔥🔥🔥🔥🔥🔥', event);
  //   const target = event.currentTarget;

  //   // 이벤트로부터 파일을 얻어와서 첫번째 파일만 받음
  //   const theFile = (target.files as FileList)[0];
  //   console.log('theFile', theFile);
  //   setImgFileName(theFile.name);

  //   const reader = new FileReader();
  //   reader.readAsDataURL(theFile); // file객체를 data url로 바꿔줌

  //   // 파일 읽기를 끝내면 state로 만들어둔 setImgFile에 값을 넣어줌
  //   reader.onloadend = (finishedEvent: any) => {
  //     setImgFile(finishedEvent.currentTarget.result);
  //     console.log('❤️❤️❤️❤️❤️❤️finishedEvent', finishedEvent);
  //     console.log(
  //       '❤️❤️❤️❤️❤️❤️finishedEvent.currentTarget.result',
  //       finishedEvent.currentTarget.result,
  //     );
  //   };
  // };

  // console.log('❤️❤️❤️❤️❤️❤️imgFile', imgFile);

  // // 현재 로그인한 사용자 가져오기
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setCurrentUser(auth.currentUser);
  //       setImgUploadUrl(user.photoURL);
  //     } else {
  //       return console.log('로그인 안됨');
  //     }
  //   });
  // }, [currentUser]);

  // const submitNicknameImgChange = async (e: any) => {
  //   e.preventDefault();
  //   if (imgFile.length !== 0) {
  //     const imgRef = ref(storage, `profileUploadImg/${imgFileName + uuidv4()}`);

  //     const response = await uploadString(imgRef, imgFile, 'data_url');
  //     const downloadImageUrl = await getDownloadURL(response.ref);
  //     setImgUploadUrl(downloadImageUrl);

  //     await updateProfile(currentUser, {
  //       displayName: nickname,
  //       photoURL: downloadImageUrl,
  //     })
  //       .then(() => {
  //         alert('Profile updated!');
  //         setNickname('');
  //       })
  //       .catch((error: any) => {});
  //   } else {
  //     await updateProfile(currentUser, {
  //       displayName: nickname,
  //     })
  //       .then(() => {
  //         alert('Profile updated!');
  //         setNickname('');
  //       })
  //       .catch((error: any) => {});
  //   }
  // };

  // // 변경할 닉네임을 입력하면 실시간으로 받아오는 함수
  // const ToChangeNicknameInput = (event: any) => {
  //   setNickname(event.target.value);
  // };

  return (
    <div>
      <Button onClick={handleOpen}>
        <S.EditModalBtnText>회원정보수정</S.EditModalBtnText>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.EditModalAll>
          <Box sx={style}>
            {/* <S.NewProfileSubmitForm onSubmit={submitNicknameImgChange}>
              <S.EditModalTitleText>회원정보 수정</S.EditModalTitleText>
              <S.EditModalImgLabelInputWrapper>
                <S.EditModalProfileImgLabel htmlFor="modalProfileUploadImg">
                  {imgFile && <S.EditModalProfileImgShow src={imgFile} />}
                </S.EditModalProfileImgLabel>
                <S.EditModalProfileImgInput
                  type="file"
                  accept="image/*"
                  id="modalProfileUploadImg"
                  onChange={saveNewProfileImg}
                  style={{ display: 'none' }}
                />
              </S.EditModalImgLabelInputWrapper>

              <S.EditModalNicknameInputWrapper>
                <S.EditModalNicknameText>닉네임</S.EditModalNicknameText>
                <S.EditModalNicknameInput
                  type="text"
                  placeholder={currentUser.displayName}
                  onChange={ToChangeNicknameInput}
                  value={nickname}
                />
              </S.EditModalNicknameInputWrapper>
              <S.EditModalEmailInputWrpper>
                <S.EditModalEmailText>이메일(아이디)</S.EditModalEmailText>
                <S.EmailInput placeholder={currentUser.email} readOnly />
              </S.EditModalEmailInputWrpper>
              <UpdatePassword />
              <S.EditModalBtnWrapper>
                <S.EditModalCanceleButton onClick={handleClose}>
                  취소
                </S.EditModalCanceleButton>
                <S.EditModalCompleteButton type="submit">
                  수정완료
                </S.EditModalCompleteButton>
              </S.EditModalBtnWrapper>
            </S.NewProfileSubmitForm> */}
          </Box>
          {/* 북마크/내가 쓴 제보 */}
        </S.EditModalAll>
      </Modal>
    </div>
  );
};
export default MyProfileEditModal;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  height: '1000px',
  bgcolor: 'background.paper',
  border: '2px solid transparent',
  boxShadow: 24,
  p: 4,
};
