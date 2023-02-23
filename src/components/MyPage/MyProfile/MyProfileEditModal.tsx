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
import { profileState } from '../../../atoms';

const MyProfileEditModal = () => {
  const [profileUrl, setProfileUrl] = useRecoilState(profileState);

  // 모달 관련
  const [open, setOpen] = useRecoilState(editModal);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 닉네임 관련
  const currentUserInfos = auth.currentUser; // 현재 로그인한 사용자의 정보들(파이어베이스)
  const [nickname, setNickname] = useState<any>(''); // 현재 닉네임 상태변경
  const [currentUser, setCurrentUser] = useState<any>(''); // 현재 로그인한 사용자 가져오기 및 변경 전 데이터
  // console.log('nickname🏃🏻‍♀️', nickname);
  // console.log('currentUser❤️', currentUser);
  // console.log('currentUserInfos❤️', currentUserInfos);
  // console.log(
  //   'currentUserInfos.displayName❤️🐣',
  //   currentUserInfos?.displayName,
  // );

  // 이미지 관련
  const [imgFile, setImgFile] = useState<any>(''); // 이미지 파일 엄청 긴 이름
  const [imgFileName, setImgFileName] = useState<any>(''); // 이미지 파일 이름.jpg
  const [imgUploadUrl, setImgUploadUrl] = useState<any>('');
  console.log('modal imgUploadUrl', imgUploadUrl);
  // console.log('imgFile🏃🏻‍♀️🌃', imgFile);
  // console.log('currentUserInfos❤️🌃', currentUserInfos);
  // console.log('currentUserInfos?.photoURL❤️🌃🐣', currentUserInfos?.photoURL);

  // 현재 로그인한 사용자 가져오기
  // 파베에서 이미지url 가져와서 set해줌
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log('user❤️', user);
      if (user) {
        setCurrentUser(currentUserInfos);
        // setImgUploadUrl(currentUserInfos?.photoURL); // 인풋창 만들고나서 확인제대로 해보기
        // console.log(
        //   'currentUserInfos?.photoURL❤️🌃🐣',
        //   currentUserInfos?.photoURL,
        // );
      } else {
        return console.log('로그인 안됨');
      }
    });
  }, [currentUser]);

  // 수정이 일어나면 알아서 닉네임 업뎃
  // useEffect(() => {}, [nickname]);

  // 변경할 닉네임 받아오는 함수
  // 변경눌렀을 때 마이페이지 업뎃되면 닉네임은 끝난거
  const ToChangeNicknameInput = (event: any) => {
    setNickname(event.target.value);
  };
  console.log('nickname🏃🏻‍♀️', nickname);

  // 수정완료 버튼 누를 때 유효성 검사 확인만
  const nicknameChangeOnClick = async (e: any) => {
    if (nickname.length < 2 || nickname.length > 5) {
      alert('2글자 이상 5글자 이하로 입력해주세요.');
      return;
    }
    if (imgFile.length === 0) {
      setImgUploadUrl(
        'https://firebasestorage.googleapis.com/v0/b/popcorn1-4b47e.appspot.com/o/basic_profile.png?alt=media&token=d58d0f49-79bd-400a-a4ae-ceca444734ae',
      );
    } else if (imgFile.length !== 0) {
      const imgRef = ref(storage, `profileUploadImg/${imgFileName + uuidv4()}`);
      const response = await uploadString(imgRef, imgFile, 'data_url');
      const downloadImageUrl = await getDownloadURL(response.ref);
      setImgUploadUrl(downloadImageUrl);
      setProfileUrl(downloadImageUrl);
      console.log('downloadImageUrl', downloadImageUrl);
    }

    // console.log('downloadImageUrl🌃🌃🌃🌃🌃🖥️🖥️🖥️🖥️🖥️', downloadImageUrl);
    await updateProfile(currentUser, {
      displayName: nickname,
      photoURL: imgUploadUrl,
    })
      .then(() => {
        setNickname(nickname);
        alert('이미지 수정 완료!');
        setOpen(false);
        // setNickname('');
      })
      .catch((error: any) => {});
  };

  // 모달키면 이미지가 켜있는데
  // 유저가 클릭하면 업데이트
  const saveNewProfileImg = (event: any) => {
    const target = event.currentTarget;
    const theFile = (target.files as FileList)[0]; // 이미지 인풋창에서 클릭하면 이미지
    console.log('theFile🌃🏃🏻‍♀️', theFile);
    setImgFile(theFile.name);
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent: any) => {
      setImgFile(finishedEvent.currentTarget.result);
      console.log('finishedEvent❓❓❓❓❓', finishedEvent);
    };
  };

  // 저장하기를 누르면 화면에도 파베에 업뎃이 돼야함
  const imgChangeSubmit = async (e: any) => {};
  // 사진을 변경하지 않고 닉네임만 변경하게 되면? 원래 사진이 날라가지 않고 들어감

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          width: '33%;',
          height: '40px',
        }}
      >
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
            {/* <S.NewProfileSubmitForm> */}
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
                placeholder={'닉네임을 입력해주세요'}
                onChange={ToChangeNicknameInput}
                value={nickname}
              />
            </S.EditModalNicknameInputWrapper>
            <S.EditModalEmailInputWrpper>
              <S.EditModalEmailText>이메일(아이디)</S.EditModalEmailText>
              <S.EditModalEmailInput placeholder={currentUser.email} readOnly />
            </S.EditModalEmailInputWrpper>
            <UpdatePassword />
            <S.EditModalBtnWrapper>
              <S.EditModalCanceleButton onClick={handleClose}>
                취소
              </S.EditModalCanceleButton>

              <S.EditModalCompleteButton
                onClick={nicknameChangeOnClick}
                type="submit"
              >
                수정완료
              </S.EditModalCompleteButton>
            </S.EditModalBtnWrapper>
            {/* </S.NewProfileSubmitForm> */}
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
  height: '800px',
  bgcolor: 'background.paper',
  border: '2px solid transparent',
  boxShadow: 24,
  p: 4,
};
