import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCrTDJ-odyiljRa6nPTgO1JTTP1FznZ-Wo",
  authDomain: "tiktok-jornada-9a546.firebaseapp.com",
  projectId: "tiktok-jornada-9a546",
  storageBucket: "tiktok-jornada-9a546.appspot.com",
  messagingSenderId: "840248767168",
  appId: "1:840248767168:web:9d27cf1efb62cd4e6f7325",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
