import { atom } from 'recoil';
import { Store } from './types/data/storeInterface';

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
  id: string | null;
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
      id: '',
    },
  },
});

// map 관련 atom
export const mapCategoryValue = atom<MapCategoryValue>({
  key: 'category',
  default: '팝업스토어',
});

export const mapSearchValue = atom<MapSearchValue>({
  key: 'searchValue',
  default: '',
});

export const mapFoodSearchValue = atom<MapSearchValue>({
  key: 'foodSearchValue',
  default: '',
});

export const mapFoodData = atom<any>({
  key: 'mapFoodData',
  default: [],
});

export const popupList = atom<Store[]>({
  key: 'popupList',
  default: [],
});

export const mapModalStatus = atom<boolean>({
  key: 'mapModal',
  default: false,
});

export const mapDetailBoxPopup = atom<Store>({
  key: 'mapItem',
  default: {
    id: '',
    view: {
      '': 0,
    },
    title: '',
    address: '',
    open: '',
    close: '',
    location: '',
    item: '',
    openingTime: [],
    closeTime: [],
    significantContent: '',
    explain: '',
    sns: '',
    web: '',
    imgURL: [],
    lat: '',
    lon: '',
    category: '',
    reserveURL: '',
  },
});

export const mapLevel = atom<number>({
  key: 'mapLevel',
  default: 3,
});

export const isActiveMenu = atom<number>({
  key: 'isActiveMenu',
  default: 0,
});

export const footerActiveMenu = atom<number>({
  key: 'footerActiveMenu',
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

export const modalPage = atom<string>({
  key: 'modalPage',
  default: '',
});

export const profileState = atom<string>({
  key: 'profileState', // unique ID (with respect to other atoms/selectors)
  default: '', // 유저의 photoURL
});

export const userUrl = atom({
  key: 'userUrl',
  default: '',
});

export const kakaoAccessToken = atom({
  key: 'kakaoAccessToken',
  default: '',
});

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    age: '',
    email: '',
    nickName: '',
    id: '',
    gender: '',
    accessToken: '',
  },
});
