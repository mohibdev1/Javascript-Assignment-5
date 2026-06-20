import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



window.signup = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup Successful");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

window.login = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert("Invalid Credentials");
    });
};


window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (document.getElementById("userEmail")) {
      document.getElementById("userEmail").innerText = user.email;
    }
  }
});