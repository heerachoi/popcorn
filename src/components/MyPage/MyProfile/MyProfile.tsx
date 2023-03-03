import { useEffect, useState } from 'react';
import { auth, storage } from '../../../services/firebase';
import * as S from './style';
import MyPageTab from '../MyPageTab/MyPageTab';
import DeleteAccount from '../../Authentication/DeleteAccount/DeleteAccount';
import MyProfileEditModal from './MyProfileEditModal';
import { useRecoilState } from 'recoil';
import {
  editModal,
  profileState,
  userInfoState,
  kakaoAccessToken,
} from '../../../atoms';
import { useRecoilValue } from 'recoil';
import { userInfo } from '../../../atoms';
import basicProfileImg from '../../../assets/Img/basicProfileImg.svg';
import { useNavigate } from 'react-router-dom';

type CurrentUserProfile = any;
const MyProfile = () => {
  const user = useRecoilValue(userInfo);
  const userInfos = user.userInfomation;
  const currentUserProfile: CurrentUserProfile = auth.currentUser;
  console.log('currentUserProfile', currentUserProfile);

  const [open, setOpen] = useRecoilState(editModal);
  const handleOpen = () => setOpen(true);
  const [currentUser, setCurrentUser] = useState<any>('');
  const [nickname, setNickname] = useState<any>(currentUser.displayName); // 닉네임
  const [imgUploadUrl, setImgUploadUrl] = useState<any>(); // 업로드한 이미지 url
  const [imgProfileUrl, setImgProfileUrl] = useRecoilState(profileState);
  const navigate = useNavigate();
  const currentUserInfos: any = auth.currentUser;
  const [kakaoUserInfo, setKakaoUserInfo] = useRecoilState(userInfoState);
  const accessToken = useRecoilValue(kakaoAccessToken);

  // user가 없거나 accessToken이 없을 때 로그아웃 - 재창님이 하셔서 일단 주석
  // useEffect(() => {
  //   if (!user && !accessToken) {
  //     navigate('/');
  //   }
  // }, [user, accessToken]);

  // 현재 로그인한 사용자 가져오기
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(auth.currentUser);
        setImgUploadUrl(user.photoURL);
      } else {
        return console.log('로그인 안됨');
      }
    });
  }, [auth.currentUser]);

  // user가 없거나 accessToken이 없을 때 navigate('/')로 이동시켜주는 코드 작성해줘
  // 바뀔 때마다 실행해달라
  useEffect(() => {
    if (currentUserInfos?.photoURL !== undefined) {
      setImgProfileUrl(currentUserInfos?.photoURL);
    }
  }, [currentUserInfos?.photoURL]);

  return (
    <S.MyPageAll>
      <S.MyProfileBox>
        <S.ProfileImgLabelInputWrapper>
          <S.ProfileImgShow
            src={
              currentUserProfile?.photoURL
                ? currentUserProfile?.photoURL
                : basicProfileImg
            }
            onClick={handleOpen}
          />
        </S.ProfileImgLabelInputWrapper>
        <S.MyProfileNickname>
          {currentUser.displayName
            ? currentUser.displayName
            : kakaoUserInfo.nickName}
          님
        </S.MyProfileNickname>
        <S.WelcomeText>환영합니다!</S.WelcomeText>
        <S.InfoWrapper>
          <S.InfoTitle>이메일</S.InfoTitle>
          <S.InfoHolder>{userInfos.email}</S.InfoHolder>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InfoTitle>휴대전화</S.InfoTitle>
          <S.InfoHolder>{userInfos.phoneNumber}</S.InfoHolder>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InfoTitle>성별</S.InfoTitle>
          <S.InfoHolder>
            {userInfos.gender ? userInfos.gender : kakaoUserInfo.gender}
          </S.InfoHolder>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InfoTitle>{accessToken ? '연령' : '생일'}</S.InfoTitle>
          <S.InfoHolder>{userInfos.age}</S.InfoHolder>
        </S.InfoWrapper>
        <S.ButtonContainer>
          <S.ModifyCompleteButton type="button">
            <MyProfileEditModal />
          </S.ModifyCompleteButton>
          <DeleteAccount />
        </S.ButtonContainer>
      </S.MyProfileBox>
      <S.TabContainer>
        <MyPageTab />
      </S.TabContainer>
    </S.MyPageAll>
  );
};

export default MyProfile;
