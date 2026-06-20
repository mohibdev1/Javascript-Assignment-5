
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBw1LRg8EOs0ikbns5Jc_ZkT_ZEz9YfxcQ",
  authDomain: "fir-auth-assignment-66c3a.firebaseapp.com",
  projectId: "fir-auth-assignment-66c3a",
  storageBucket: "fir-auth-assignment-66c3a.firebasestorage.app",
  messagingSenderId: "331363312993",
  appId: "1:331363312993:web:99e2af107e262e2407d120"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);