import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDl8VjUkZKWPKbPjvz5KZEU_zvuruJCljQ",
    authDomain: "crow-d1704.firebaseapp.com",
    projectId: "crow-d1704",
    storageBucket: "crow-d1704.appspot.com",
    messagingSenderId: "1095838761783",
    appId: "1:1095838761783:web:23e68ec3352c31bf2a10b2",
    measurementId: "G-LD3MN9J3NK"
  };
  
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export default firebase;
 