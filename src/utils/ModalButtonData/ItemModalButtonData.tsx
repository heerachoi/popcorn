import { atom } from 'recoil';

export const ItemModalButtonData = atom({
  key: 'itemButtonState',
  default: [
    { id: 1, label: '전체', active: false },
    { id: 2, label: '패션', active: false },
    { id: 3, label: '식음료', active: false },
    { id: 4, label: '캐릭터', active: false },
    { id: 5, label: '소품', active: false },
    { id: 6, label: '주류', active: false },
    { id: 7, label: '기타', active: false },
  ]
});