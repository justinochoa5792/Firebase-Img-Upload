// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "file-upload-7b56e.firebaseapp.com",
  projectId: "file-upload-7b56e",
  storageBucket: "file-upload-7b56e.appspot.com",
  messagingSenderId: "167352256704",
  appId: "1:167352256704:web:44e99cf4b93e821455c525",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
