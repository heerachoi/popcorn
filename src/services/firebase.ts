// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'popcorn1-4b47e.firebaseapp.com',
  projectId: 'popcorn1-4b47e',
  storageBucket: 'popcorn1-4b47e.appspot.com',
  messagingSenderId: '833591756301',
  appId: '1:833591756301:web:8d87811bac1791e966b744',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
