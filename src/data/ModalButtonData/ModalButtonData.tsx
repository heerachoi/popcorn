import { atom } from 'recoil';

export const ModalButtonData = atom({
  key: 'locationButtonState',
  default: [
    { id: 1, label: '전체', active: false },
    { id: 2, label: '서울', active: false },
    { id: 3, label: '인천광역시', active: false },
    { id: 4, label: '울산광역시', active: false },
    { id: 5, label: '대전광역시', active: false },
    { id: 6, label: '광주광역시', active: false },
    { id: 7, label: '대구광역시', active: false },
    { id: 8, label: '부산광역시', active: false },
    { id: 9, label: '경상도', active: false },
    { id: 10, label: '충청도', active: false },
    { id: 11, label: '전라도', active: false },
    { id: 12, label: '강원도', active: false },
    { id: 13, label: '제주도', active: false },
  ]
});