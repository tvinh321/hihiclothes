import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBK8ivYtYV49YHmt1Cvp1jyzEwngId9lc4",
    authDomain: "ecommerce-e2e84.firebaseapp.com",
    projectId: "ecommerce-e2e84",
    storageBucket: "ecommerce-e2e84.appspot.com",
    messagingSenderId: "779286133819",
    appId: "1:779286133819:web:e015fee2dd3862909bb01e",
    measurementId: "G-6SYVPNK8NP"
};

// Initiallize Firebase
firebase.initializeApp(firebaseConfig);

// Use Firebase authentication & firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;