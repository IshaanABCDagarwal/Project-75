import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCLbmNd0rod6yrdxS9rVW0s9WhXLXKeUZc",
  authDomain: "e-ride-10-04-2022.firebaseapp.com",
  projectId: "e-ride-10-04-2022",
  storageBucket: "e-ride-10-04-2022.appspot.com",
  messagingSenderId: "333407646835",
  appId: "1:333407646835:web:408cc0d52fa0deb2542606"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
