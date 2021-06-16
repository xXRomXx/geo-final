
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLPEmmJjilnFL38QRxHrMbTrgNR3waA-Q",
    authDomain: "geos-final.firebaseapp.com",
    projectId: "geos-final",
    storageBucket: "geos-final.appspot.com",
    messagingSenderId: "136623187885",
    appId: "1:136623187885:web:6b0785b275a79c799c2324"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  var db = firebase.firestore();