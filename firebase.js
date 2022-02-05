import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyClvK5nncdgVsBQaW_yCrrJ3eGTGlSY_AU",
    authDomain: "qallix.firebaseapp.com",
    projectId: "qallix",
    storageBucket: "qallix.appspot.com",
    messagingSenderId: "138775017698",
    appId: "1:138775017698:web:17013b834fec0bc92046bb",
    measurementId: "G-M2TGQF4MRX",
};

const qallix = initializeApp(firebaseConfig);
export const auth = getAuth(qallix);
export const sr = getStorage(qallix);
