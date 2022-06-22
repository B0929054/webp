import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBs8AFFHHlBHERwIiqOE8Ev0yB01u0ZCfQ",
  authDomain: "bruceig.firebaseapp.com",
  projectId: "bruceig",
  storageBucket: "bruceig.appspot.com",
  messagingSenderId: "1059017996599",
  appId: "1:1059017996599:web:05c5c70e27ca96b94c42b2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;