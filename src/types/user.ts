export interface UserInfoState {
  isLogin: boolean;
  userInfomation: UserInfomation;
}

export interface UserInfomation {
  nickName: string | null;
  email: string | null;
  photoURL: string | null;
  age: string;
  gender: string;
  phoneNumber: string | null;
  id: string | null;
}
