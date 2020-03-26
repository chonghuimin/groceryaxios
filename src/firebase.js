import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyBjBoccLaBJ_gXm9ompxxv8hN0zEen1QAY",
    authDomain: "grocerystore-67e31.firebaseapp.com",
    databaseURL: "https://grocerystore-67e31.firebaseio.com",
    projectId: "grocerystore-67e31"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;