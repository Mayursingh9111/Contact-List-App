// firebase.jsx
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBhf2CN3Fn8CKq__C1shMmfQN9iIp7YWF4",
  authDomain: "login-practice-70db0.firebaseapp.com",
  projectId: "login-practice-70db0",
  storageBucket: "login-practice-70db0.appspot.com",
  messagingSenderId: "365283923558",
  appId: "1:365283923558:web:ed49f2e345c8ef5ddaffa7",
};

// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
