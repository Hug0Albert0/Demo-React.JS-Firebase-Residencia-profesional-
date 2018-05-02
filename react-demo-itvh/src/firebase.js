import * as firebase from 'firebase';
var config = {
   apiKey: "AIzaSyB6f-L9f_hI9Il_Yb4rtxAB8izk13u1Teo",
   authDomain: "ejemplofirebasejs.firebaseapp.com",
   databaseURL: "https://ejemplofirebasejs.firebaseio.com",
   projectId: "ejemplofirebasejs",
   storageBucket: "ejemplofirebasejs.appspot.com",
   messagingSenderId: "488372682736"
 };

 firebase.initializeApp(config);
 const dbRef=firebase.database().ref();

 export default dbRef;
 