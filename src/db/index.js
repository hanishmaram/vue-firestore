import firebase from 'firebase';
import 'firebase/firestore';


// Initialize Firebase
const config = {
    apiKey: "AIzaSyANq6K61or89r9xVJ0rQb1HmJVvoqsCVVc",
    authDomain: "vue-firestore-f92ed.firebaseapp.com",
    databaseURL: "https://vue-firestore-f92ed.firebaseio.com",
    projectId: "vue-firestore-f92ed",
    storageBucket: "vue-firestore-f92ed.appspot.com",
    messagingSenderId: "158377253127"
  };

  const settings={
    timestampsInSnapshots:true
  };


  
  const firebaseapp=firebase.initializeApp(config);

  //firebaseapp.settings(settings);

  const firestore=firebaseapp.firestore();
  firestore.settings(settings);

  export default firestore;
