// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCeMjbI-9cRxDl7XTENDK1R_jurvzMgvAM',
  authDomain: 'popcorn2-2efc6.firebaseapp.com',
  projectId: 'popcorn2-2efc6',
  storageBucket: 'popcorn2-2efc6.appspot.com',
  messagingSenderId: '680184002592',
  appId: '1:680184002592:web:5811bb9a4ec3423b262445',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
