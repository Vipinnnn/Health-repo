
      // Initialize Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyBhF9aj9umJDhdZZ9utQZ1qPlAwDKfvTMU",
        authDomain: "health-repo.firebaseapp.com",
        projectId: "health-repo",
        storageBucket: "health-repo.appspot.com",
        messagingSenderId: "1025223757050",
        appId: "1:1025223757050:web:48b6be5d782d2f1096cd43",
        measurementId: "G-2GTNRFL9V5"
      };
            firebase.initializeApp(firebaseConfig);
            
            // make auth and firestore references
            const auth = firebase.auth();
            const db = firebase.firestore();
            
        
            // update firestore settings
            // db.settings({ timestampsInSnapshots: true });
      