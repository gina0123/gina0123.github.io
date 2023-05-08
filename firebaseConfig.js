const firebaseConfig = {
    apiKey: "AIzaSyA4w3MzVKm5K9JGY2Mp787INNQS8PpnlfI",
    authDomain: "softwareprojekt2023-872a2.firebaseapp.com",
    databaseURL: "https://softwareprojekt2023-872a2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "softwareprojekt2023-872a2",
    storageBucket: "softwareprojekt2023-872a2.appspot.com",
    messagingSenderId: "966682542609",
    appId: "1:966682542609:web:d78df29731250d745fa7b0",
    measurementId: "G-L4YN03THG6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var userRegistration = firebase.database().ref("users");
  var userRef = firebase.database().ref("users/" + window.userId);


const database = firebase.database();
  
 