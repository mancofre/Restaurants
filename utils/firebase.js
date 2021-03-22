import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoYoxEnquBlBTLa2BPngsoiORmlZorcs4",
    authDomain: "restaurante-6c2f1.firebaseapp.com",
    projectId: "restaurante-6c2f1",
    storageBucket: "restaurante-6c2f1.appspot.com",
    messagingSenderId: "215084558597",
    appId: "1:215084558597:web:a99ec8a9702cb8ec7d2f6c"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);