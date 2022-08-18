import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_LBl7pvaW4Haj3eVdDLQzwXPo82f08j8",
  authDomain: "whatsapp-clone-8901a.firebaseapp.com",
  projectId: "whatsapp-clone-8901a",
  storageBucket: "whatsapp-clone-8901a.appspot.com",
  messagingSenderId: "1012365765503",
  appId: "1:1012365765503:web:8e43933f9cfb17119a484a",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//   export default firebase;

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
