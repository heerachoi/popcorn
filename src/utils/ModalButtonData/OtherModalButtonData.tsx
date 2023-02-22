import { atom } from 'recoil';

export const OtherModalButtonData = atom({
  key: 'otherButtonState',
  default: [
    { id: 1, label: '전체', active: false },
    { id: 2, label: '10', active: false },
    { id: 3, label: '20', active: false },
    { id: 4, label: '30', active: false },
    { id: 5, label: '40+', active: false },
    { id: 6, label: '여성', active: false },
    { id: 7, label: '남성', active: false },
    { id: 8, label: '연령모름', active: false },
    { id: 9, label: '성별모름', active: false },
  ]
});

