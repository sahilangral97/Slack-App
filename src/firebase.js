// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4v7j44x2FYR_mrIldCxV5WqU4COLkR7M",
    authDomain: "slack-app-4778.firebaseapp.com",
    databaseURL: "https://slack-app-4778.firebaseio.com",
    projectId: "slack-app-4778",
    storageBucket: "slack-app-4778.appspot.com",
    messagingSenderId: "731101465964",
    appId: "1:731101465964:web:d9c3279b788eef915f3749",
    measurementId: "G-QSYTT086KM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;