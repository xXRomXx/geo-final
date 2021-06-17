firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
  
      //var user = firebase.auth().currentUser;
      document.getElementById("txtCargando").style.display = "none";
      document.getElementById("btnAbrir").style.display = "none";
      document.getElementById("btnCerrar").style.display = "block";
      document.getElementById("mapa").style.display = "block";
      document.getElementById("Logeado").style.display = "block";
      document.getElementById("noLogeado").style.display = "none";
      console.log("abierto")
      iniciarSesion(true)

    } else {
      // No user is signed in.
      document.getElementById("txtCargando").style.display = "none";
      document.getElementById("btnCerrar").style.display = "none";
      document.getElementById("btnAbrir").style.display = "block";
      document.getElementById("mapa").style.display = "none";
      document.getElementById("Logeado").style.display = "none";
      document.getElementById("noLogeado").style.display = "block";
      iniciarSesion(false)

    }
  });

function login() {

    var userEmail = document.getElementById("txtUsuario").value;
    var userPass = document.getElementById("txtPass").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Credenciales inválidas.");
  
      // ...
    });
  
  }

  function logout() {
    firebase.auth().signOut();
    console.log("cerrado")
  }

  function guardarDatos(data){
    db.collection("datos").add({
        clima: data.clima,
        hora: data.hora,
        temperatura: data.temperatura,
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error añadiendo el clima a Firebase: ", error);
    });
  }
  