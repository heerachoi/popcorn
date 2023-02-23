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
  age: string;
  gender: string;
  phoneNumber: string | null;
}

interface ModalStatus {
  [key: string]: boolean;
}

type MapSearchValue = string;
type MapCategoryValue = string | null;

// userInfo.id uid가 같으면? 현재유저!
export const userInfo = atom<UserInfoState>({
  key: 'user',
  default: {
    isLogin: false,
    userInfomation: {
      displayName: '',
      email: '',
      photoURL: '',
      uid: '',
      age: '',
      gender: '',
      phoneNumber: '',
    },
  },
});

export const mapCategoryValue = atom<MapCategoryValue>({
  key: 'category',
  default: ' ',
});

export const mapSearchValue = atom<MapSearchValue>({
  key: 'searchValue',
  default: '',
});

export const mapFoodData = atom<any>({
  key: 'mapFoodData',
  default: [],
});

export const popupList = atom<any>({
  key: 'popupList',
  default: [],
});

export const isActiveMenu = atom<number>({
  key: 'isActiveMenu',
  default: 0,
});

export const globalBtn = atom<boolean>({
  key: 'globalBtn',
  default: false,
});

export const modalStatus = atom<ModalStatus>({
  key: 'modal',
  default: {
    master: false,
    logout: false,
    singout: false,
    validPhoneNumber: false,
    phoneValidComplete: false,
    invalidVerificationCode: false,
    codeExpired: false,
    signUpComplete: false,
    emailAlreadyInUse: false,
    signoutComplete: false,
    login: false,
    loginError: false,
    userNotFound: false,
    wrongPassword: false,
    globalBtn: false,
    newStoreReport: false,
  },
});

export const editModal = atom<boolean>({
  key: 'editModalStatus',
  default: false,
});

export const likeCount = atom<number>({
  key: 'likeCount',
  default: 0,
});

export const hateCount = atom<number>({
  key: 'hateCount',
  default: 0,
});

export const modalPage = atom<string>({
  key: 'modalPage',
  default: '',
});

// export const mapCategorySelector = selector<any>({
//   key: 'mapCategorySelector',
//   get: async ({ get }) => {
//     const category = get(mapCategoryValue);
//     const data = await getPopupData();

//     return data;
//   },
// });

export const profileState = atom({
  key: 'profileState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
