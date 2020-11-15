import firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBChC7JthW64sZF3cJ0Jw5oGYhPqHNdY7I",
  authDomain: "bestrunnerapp.firebaseapp.com",
  databaseURL: "https://bestrunnerapp.firebaseio.com",
  projectId: "bestrunnerapp",
  storageBucket: "bestrunnerapp.appspot.com",
  messagingSenderId: "453313777475",
  appId: "1:453313777475:web:2607d8602f52b6434d69f6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
