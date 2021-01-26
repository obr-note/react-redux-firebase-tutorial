import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyA_7hKorO5lP9u4Pi3VH13ddG-_8MA8BMw",
  authDomain: "net-ninja-mario-plan-b3c07.firebaseapp.com",
  projectId: "net-ninja-mario-plan-b3c07",
  storageBucket: "net-ninja-mario-plan-b3c07.appspot.com",
  messagingSenderId: "189413715408",
  appId: "1:189413715408:web:93ad28fd6e122b16541dd5",
  measurementId: "G-DHRB93B51R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true })

export default firebase;