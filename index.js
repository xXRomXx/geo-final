firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
  
      //var user = firebase.auth().currentUser;
      document.getElementById("mapa").style.display = "block";
      document.getElementById("Logeado").style.display = "block";
      document.getElementById("noLogeado").style.display = "none";
      console.log("abierto")
  
    } else {
      // No user is signed in.
  
      document.getElementById("mapa").style.display = "none";
      document.getElementById("Logeado").style.display = "none";
      document.getElementById("noLogeado").style.display = "block";
      
  
    }
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
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

  function logout() {
    firebase.auth().signOut();
    console.log("cerrado")
  }