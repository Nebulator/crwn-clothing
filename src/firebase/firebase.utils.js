import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAjmrPcy9bQcEiodJgXz9gnhtDa3iBTCVM",
    authDomain: "crwn-db-b4fe3.firebaseapp.com",
    projectId: "crwn-db-b4fe3",
    storageBucket: "crwn-db-b4fe3.appspot.com",
    messagingSenderId: "345931628636",
    appId: "1:345931628636:web:3f45934d3c05bc90bea699",
    measurementId: "G-JJNN67E6B1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;