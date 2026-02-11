// Firebase Configuration for RebuyOps
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAp4AKqeI8igpvGczB2TrpoXN2Wqg_cgFI",
    authDomain: "rebuyops.firebaseapp.com",
    projectId: "rebuyops",
    storageBucket: "rebuyops.firebasestorage.app",
    messagingSenderId: "1018585479885",
    appId: "1:1018585479885:web:d8ff14ff3a3ce88b698784"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
