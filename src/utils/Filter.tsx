import React from 'react'
import data from '../data/popupStore.json';
import { getTodayDate } from './FormatDate';
import { Store, View } from '../types/data/storeInterface';
// 현재 진행중인 스토어
export const CurrentlyOpen = () => {
  const todayDate = getTodayDate();
  let currentlyOpen:any[] = [];
  const openStoreList = data.Store.filter((store) => {
    const openDate = Number(store.open.split(".").join(""));
    const closeDate = Number(store.close.split(".").join(""));
    if (todayDate >= openDate && todayDate <= closeDate){
      console.log()
      currentlyOpen.push(store); 
    }
  })
  console.log('currentlyOpen', currentlyOpen);
  return currentlyOpen;
}

// 뷰 많은 스토어 리스트
export const MostViews = () => {
  const currentlyOpen = CurrentlyOpen();
  const SortByViews = currentlyOpen.sort((a,b) => b.view.all - a.view.all);
  const ViewToThree = SortByViews.slice(0, 3);
  return ViewToThree;
}

// 여성 인기 팝업스토어
export const PopularToWomen = () => {
  const currentlyOpen = CurrentlyOpen();
  // 여성 조회 많은 순
  const womenViewSort = currentlyOpen.sort((a,b) => b.view.women - a.view.women);
  // 마감 순
  const closingSoon = womenViewSort.sort((a,b) => Number(a.close.split(".").join("")) - Number(b.close.split(".").join("")));
  const womenTopTwo = closingSoon.slice(0, 2); 
  return womenTopTwo;
}

// 남성 인기 팝업스토어
export const PopularToMen = () => {
  const currentlyOpen = CurrentlyOpen();
  // 남성 조회 많은 순
  const menViewSort = currentlyOpen.sort((a,b) => b.view.men - a.view.men);
  // 마감 순
  const closingSoon = menViewSort.sort((a,b) => Number(a.close.split(".").join("")) - Number(b.close.split(".").join("")));
  const menTopTwo = menViewSort.slice(0, 2); 
  return menTopTwo;
}