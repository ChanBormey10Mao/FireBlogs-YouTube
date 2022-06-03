import firebase from "firebase/app";
import "firebase/firebase-firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOGu0V__AltuBcrK46zdgZykbcGCGDKF8",
  authDomain: "fireblogs-d2079.firebaseapp.com",
  projectId: "fireblogs-d2079",
  storageBucket: "fireblogs-d2079.appspot.com",
  messagingSenderId: "961802685387",
  appId: "1:961802685387:web:5b4045ce9e88eb7f08c44e",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
