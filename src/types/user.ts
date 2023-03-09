export interface UserInfoState {
  isLogin: boolean;
  userInfomation: UserInfomation;
}

export interface UserInfomation {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  age: string;
  gender: string;
  phoneNumber: string | null;
  id: string | null;
}
