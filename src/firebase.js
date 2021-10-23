import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBGCuZBc2mmtsDUUaUcCVIEs-sZS4bcsVI",
    authDomain: "remedi-doc.firebaseapp.com",
    projectId: "remedi-doc",
    storageBucket: "remedi-doc.appspot.com",
    messagingSenderId: "685564620964",
    appId: "1:685564620964:web:a9e3c0ba507859ce9eb631",
    measurementId: "G-6D3BE0GXH3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore()
const auth=firebase.auth()
export {db,auth}