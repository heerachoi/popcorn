import { atom } from 'recoil';

// atom은 두 가지를 요구하는데 첫 번째는 key로 유니크해야한다.
// 두 번째는 default 값이 필요하다.

interface UserInfoState {
  isLogin: boolean;
  userInfomation: UserInfomation;
}

interface UserInfomation {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string | null;
}

export const userInfo = atom<UserInfoState>({
  key: 'user',
  default: {
    isLogin: false,
    userInfomation: {
      displayName: '',
      email: '',
      photoURL: '',
      uid: '',
    },
  },
});
