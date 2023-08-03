// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5uaxQe1xjqU7SnFAXEwLoo6bnCFnoQB4",
  authDomain: "shopping-app-9d070.firebaseapp.com",
  projectId: "shopping-app-9d070",
  storageBucket: "shopping-app-9d070.appspot.com",
  messagingSenderId: "350013013623",
  appId: "1:350013013623:web:62621869a08424237d1072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage }