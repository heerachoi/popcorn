import { useState } from 'react';
import * as S from './style';
import MyPageTab from '../MyPageTab/MyPageTab';
import DeleteAccount from '../../Authentication/DeleteAccount/DeleteAccount';
import MyProfileEditModal from './MyProfileEditModal';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';

const MyProfile = () => {
  // 휴대전화, 성별, 생일
  const user = useRecoilValue(userInfo);
  const userInfos = user.userInfomation;
  // 프로필 수정 모달창
  const [isModalOpen, setIsModalOpen] = useState<any>(false);

  return (
    <S.MyPageAll>
      <S.MyPageContainer>
        {/* {isModalOpen && <MyProfileEditModal setIsModalOpen={setIsModalOpen} />} */}
        <S.MyProfileBox>
          <S.EmailInputWrpper>
            <S.EmailText>이메일</S.EmailText>
            <S.EmailInputDiv>{userInfos.email}</S.EmailInputDiv>
          </S.EmailInputWrpper>
          <S.PhoneNumInputWrpper>
            <S.PhoneNumText>휴대전화</S.PhoneNumText>
            <S.PhoneNumInputDiv>{userInfos.phoneNumber}</S.PhoneNumInputDiv>
          </S.PhoneNumInputWrpper>
          <S.GenderInputWrpper>
            <S.GenderText>성별</S.GenderText>
            <S.GenderInputDiv>{userInfos.gender}</S.GenderInputDiv>
          </S.GenderInputWrpper>
          <S.AgeInputWrpper>
            <S.AgeText>생일</S.AgeText>
            <S.AgeInputDiv>{userInfos.age}</S.AgeInputDiv>
          </S.AgeInputWrpper>
          <button onClick={() => setIsModalOpen(true)}>회원정보 수정</button>
          <DeleteAccount />
        </S.MyProfileBox>
      </S.MyPageContainer>
      <MyPageTab />
    </S.MyPageAll>
  );
};

export default MyProfile;
