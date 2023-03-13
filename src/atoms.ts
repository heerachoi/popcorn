import { atom } from 'recoil';
import { Store } from './types/data/storeInterface';
import { FoodData } from './types/map';
import { UserInfoState } from './types/user';

// atom은 두 가지를 요구하는데 첫 번째는 key로 유니크해야한다.
// 두 번째는 default 값이 필요하다.

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
      nickName: '',
      email: '',
      photoURL: '',
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

export const mapFoodData = atom<FoodData[]>({
  key: 'mapFoodData',
  default: [],
});

export const popupList = atom<Store[]>({
  key: 'popupList',
  default: [],
});

export const bookmarkStoreList = atom({
  key: 'bookmarkStoreList',
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
    imgURL: [],
    lat: '',
    lon: '',
    category: '',
  },
});

export const mapLevel = atom<number>({
  key: 'mapLevel',
  default: 3,
});

export const mapLoading = atom<boolean>({
  key: 'mapLoading',
  default: true,
});
//

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

export const kakaoAccessToken = atom<string | undefined | null>({
  key: 'kakaoAccessToken',
  default: localStorage.getItem('token_for_kakaotalk'),
});

export const kakaoRefreshToken = atom<string | undefined | null>({
  key: 'kakaoRefreshToken',
  default: localStorage.getItem('refresh_token_for_kakaotalk'),
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


export const SearchKey = atom({
  key: 'searchKey',
  default: {
    keyword: '',
    date: '',
    duration: '',
    location: '',
    item: '',
    other: '',
  },
});