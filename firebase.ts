// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAUbL1bZQVHDbTw-PYGMwVM0HvLFaYry_o',
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
// export const provider = new GoogleAuthProvider();
// export const providerGithub = new GithubAuthProvider();
