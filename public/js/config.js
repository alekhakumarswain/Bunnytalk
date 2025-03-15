// js/config.js
var config = {
    apiKey: "AIzaSyB4PXatCRA7I0Uvc8O2IXs13mbfY8NK-gY",
    authDomain: "bunnytalk-db.firebaseapp.com",
    projectId: "bunnytalk-db",
    storageBucket: "bunnytalk-db.appspot.com",
    messagingSenderId: "79115378372",
    appId: "1:79115378372:web:e10a65a0f40b4a9448b391",
    measurementId: "G-G4MWQCPKER"
  };
  
  // Initialize Firebase
  firebase.initializeApp(config);
  
  // Initialize Firebase database reference
  var database = firebase.database();
  