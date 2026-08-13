// Firebase Configuration
// =====================
// IMPORTANT: Replace the values below with your Firebase project credentials
// Get these from Firebase Console: https://console.firebase.google.com/
//
// Steps to get your Firebase config:
// 1. Go to https://console.firebase.google.com/
// 2. Select your project
// 3. Click Settings icon (gear) > Project settings
// 4. Scroll to "Your apps" section
// 5. Find your Web app and copy the config values
// 6. Replace the values below

const firebaseConfig = {
    apiKey: "AIzaSyDnfcNAD9Pu8N1Ir2eTR0NFk9igACkOvPs",
    authDomain: "https://shakthi-portfolio-95fe1.firebaseapp.com",
    projectId: "shakthi-portfolio-95fe1",
    storageBucket: "https://shakthi-portfolio-95fe1.firebasestorage.app",
    messagingSenderId: "666282654768",
    appId: "1:666282654768:web:8997796607e2880b01c1f5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Initialize Auth
const auth = firebase.auth();

// Optional: Enable Firestore offline persistence
db.enablePersistence()
    .catch((err) => {
        if (err.code == 'failed-precondition') {
            console.warn('Multiple tabs open, persistence disabled');
        } else if (err.code == 'unimplemented') {
            console.warn('Browser does not support offline persistence');
        }
    });

console.log('Firebase initialized successfully');
