import React from 'react'
import data from '../data/popupStore.json';
import { getTodayDate } from './FormatDate';
import { Store } from '../types/data/storeInterface';

// 현재 진행중인 스토어
export const CurrentlyOpen = () => {
  const todayDate = getTodayDate();
  const currentlyOpen = [];
  const openStoreList = data.Store.filter((store) => {
    const openDate = Number(store.open.split(".").join(""));
    const closeDate = Number(store.close.split(".").join(""));
    if (todayDate >= openDate && todayDate <= closeDate){
      currentlyOpen.push(store); 
    }
  })
}

// 뷰 많은 스토어 리스트
export const MostViews = () => {
  const currentlyOpenStoreList = CurrentlyOpen();
  const SortByViews = data.Store.sort((a,b) => b.view.all - a.view.all);
  const ViewToThree = SortByViews.slice(0, 3);
  return ViewToThree;
}

// 여성 인기 팝업스토어
export const PopularToWomen = () => {
  // const open =  CurrentlyOpen();
  // console.log(open);
  const womenViewSort = data.Store.sort((a,b) => b.view.women - a.view.women);
  const womenTopTwo = womenViewSort.slice(0, 2); 
  return womenTopTwo;
}

// 남성 인기 팝업스토어
export const PopularToMen = () => {
  const menViewSort = data.Store.sort((a,b) => b.view.men - a.view.men);
  const menTopTwo = menViewSort.slice(0, 2); 
  return menTopTwo;
}