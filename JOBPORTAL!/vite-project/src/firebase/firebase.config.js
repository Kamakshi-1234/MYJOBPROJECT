
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9RnxPGoxR-gXKnnQz-wmBB-rtn9OjcUM",
  authDomain: "job-provider-96b88.firebaseapp.com",
  projectId: "job-provider-96b88",
  storageBucket: "job-provider-96b88.appspot.com",
  messagingSenderId: "319261618301",
  appId: "1:319261618301:web:ecdd0a3a101ba9f5868114",
  measurementId: "G-B04K56MRHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};



// firebase.config.js
