import React from 'react'
import data from '../data/popupStore.json';
import { getTodayDate } from './FormatDate';
import { Store } from '../types/data/storeInterface';

// 현재 진행중인 스토어
// export const CurrentlyOpen = () => {
//   const todayDate = getTodayDate();
//   let currentlyOpen = [];
//   const openStoreList = data.Store.filter((store) => {
//     const openDate = Number(store.open.split(".").join(""));
//     const closeDate = Number(store.close.split(".").join(""));
//     if (todayDate >= openDate && todayDate <= closeDate){
//       currentlyOpen.push(store); 
//     }
//   })
//   return currentlyOpen;
// }

// 뷰 많은 스토어 리스트
export const MostViews = () => {
  const SortByViews = data.Store.sort((a,b) => b.view.all - a.view.all);
  const ViewToThree = SortByViews.slice(0, 3);
  return ViewToThree;
}

// 여성 인기 팝업스토어
export const PopularToWomen = () => {
  // const open =  CurrentlyOpen();
  // console.log(open);
  const womenViewSort = data.Store.sort((a,b) => b.view.여성 - a.view.여성);
  const womenTopTwo = womenViewSort.slice(0, 2); 
  return womenTopTwo;
}

// 남성 인기 팝업스토어
export const PopularToMen = () => {
  const menViewSort = data.Store.sort((a,b) => b.view.남성 - a.view.남성);
  const menTopTwo = menViewSort.slice(0, 2); 
  return menTopTwo;
}