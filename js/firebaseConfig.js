// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhF9aj9umJDhdZZ9utQZ1qPlAwDKfvTMU",
  authDomain: "health-repo.firebaseapp.com",
  projectId: "health-repo",
  storageBucket: "health-repo.appspot.com",
  messagingSenderId: "1025223757050",
  appId: "1:1025223757050:web:48b6be5d782d2f1096cd43",
  measurementId: "G-2GTNRFL9V5",
};
firebase.initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
// var storage = firebase.storage;

// Create a storage reference from our storage service
// var storageRef = storage.ref();
