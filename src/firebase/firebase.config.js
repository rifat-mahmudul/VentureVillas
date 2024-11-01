// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlCVNK-DU_K4e7_IItDZeh2enSW35AHR4",
    authDomain: "venturevillas-8a8fc.firebaseapp.com",
    projectId: "venturevillas-8a8fc",
    storageBucket: "venturevillas-8a8fc.appspot.com",
    messagingSenderId: "1062986838225",
    appId: "1:1062986838225:web:866dadebbb894d9e1215f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;