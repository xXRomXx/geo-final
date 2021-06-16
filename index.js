firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
  
      var user = firebase.auth().currentUser;
      window.alert("Inició sesión.")
  
    } else {
      // No user is signed in.
  
      console.log("Credenciales inválidas.")
  
    }
  });

function login() {

    var userEmail = document.getElementById("txtUsuario").value;
    var userPass = document.getElementById("txtPass").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }