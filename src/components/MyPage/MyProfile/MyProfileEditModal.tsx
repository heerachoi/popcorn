import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as S from './style';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid transparent',
  boxShadow: 24,
  p: 4,
};

const MyProfileEditModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>회원정보수정</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>회원정보수정</h1>
          <p>프로필 사진 수정</p> <p>닉네임</p> <p>이메일(아이디)</p>
          <p>현재 비밀번호</p>
          <p>비밀번호 (대문자, 소문자+숫자+특수문자 8자 이상)</p>
          <p>비밀번호 확인</p>
          <button>취소</button>
          <button>수정</button>
        </Box>
      </Modal>
    </div>
  );
};
export default MyProfileEditModal;
