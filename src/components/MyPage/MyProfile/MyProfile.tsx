// library
import { useEffect, useState } from 'react';
import { userInfo } from '../../../atoms';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  editModal,
  profileState,
  userInfoState,
  kakaoAccessToken,
} from '../../../atoms';
// firebase
import { auth } from '../../../services/firebase';
// component
import MyPageTab from '../MyPageTab/MyPageTab';
import DeleteAccount from '../../Authentication/DeleteAccount/DeleteAccount';
import MyProfileEditModal from './MyProfileEditModal';
// style
import * as S from './style';
import MyProfileStar1 from '../../../assets/Img/MyProfileStar1.svg';
import MyProfileStar2 from '../../../assets/Img/MyProfileStar2.svg';
import basicProfileImg from '../../../assets/Img/basicProfileImg.svg';
import { User } from 'firebase/auth';

type CurrentUserProfile = User | null;
const MyProfile = () => {
  const user = useRecoilValue(userInfo);
  const userInfos = user.userInfomation;
  const currentUserProfile: CurrentUserProfile = auth.currentUser;
  const [open, setOpen] = useRecoilState(editModal);
  const handleOpen = () => setOpen(true);
  const [currentUser, setCurrentUser] = useState<any>('');
  const [imgUploadUrl, setImgUploadUrl] = useState<string | null>(); // 업로드한 이미지 url
  const [imgProfileUrl, setImgProfileUrl] = useRecoilState(profileState);
  const currentUserInfos: User | null = auth.currentUser;
  const accessToken = useRecoilValue(kakaoAccessToken);
  const [kakaoUserInfo, setKakaoUserInfo] = useRecoilState(userInfoState);

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

  useEffect(() => {
    if (currentUserInfos?.photoURL !== undefined) {
      setImgProfileUrl(currentUserInfos?.photoURL || '');
    }
  }, [currentUserInfos?.photoURL]);
  console.log('kakaoUser', kakaoUserInfo.nickName);
  return (
    <S.MyPageAll>
      <S.MyProfileBox>
        <S.ProfileImgLabelInputWrapper>
          <S.MyProfileStar1 src={MyProfileStar1} />
          <S.ProfileImgShow
            src={
              currentUserProfile?.photoURL
                ? currentUserProfile?.photoURL
                : basicProfileImg
            }
            onClick={handleOpen}
          />
          <S.MyProfileStar2 src={MyProfileStar2} />
        </S.ProfileImgLabelInputWrapper>
        <S.MyProfileNickname>
          {currentUser.displayName
            ? currentUser.displayName
            : user.userInfomation.nickName}
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
          {accessToken ? (
            ''
          ) : (
            <S.ModifyCompleteButton type="button">
              <MyProfileEditModal />
            </S.ModifyCompleteButton>
          )}
          {accessToken ? '' : <DeleteAccount />}
        </S.ButtonContainer>
      </S.MyProfileBox>
      <S.TabContainer>
        <MyPageTab />
      </S.TabContainer>
    </S.MyPageAll>
  );
};

export default MyProfile;
