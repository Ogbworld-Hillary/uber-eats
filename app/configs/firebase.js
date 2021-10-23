import firebase from "firebase"

const firebaseConfig = {
   apiKey: "AIzaSyBZ9-E1TxcGGqTT2h0MT8LSWv9ZCSxOjlo",
  authDomain: "uber-eats-329815.firebaseapp.com",
  projectId: "uber-eats-329815",
  storageBucket: "uber-eats-329815.appspot.com",
  messagingSenderId: "628585759711",
  appId: "1:628585759711:web:55e29d5c15c3621956ba6a",
  measurementId: "G-74SX6ZBGWE"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = app.auth()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, timestamp }
