import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyBFAWr8an66lrZBRd-CBF9YD_4or45qBsE",
  authDomain: "myapp-b93d2.firebaseapp.com",
  databaseURL: "https://myapp-b93d2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myapp-b93d2",
  storageBucket: "myapp-b93d2.appspot.com",
  messagingSenderId: "278778863124",
  appId: "1:278778863124:web:a8b359190c5d15391ad101"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.database();
