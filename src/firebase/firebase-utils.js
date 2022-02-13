import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDG8UrwQEQ1j8RYfwsQYhYHpJfqXdHsrr0',
  authDomain: 'crwn-db-b3e68.firebaseapp.com',
  projectId: 'crwn-db-b3e68',
  storageBucket: 'crwn-db-b3e68.appspot.com',
  messagingSenderId: '700230082392',
  appId: '1:700230082392:web:81e2e305453a8017460f2d',
  measurementId: 'G-751W1EV9BK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
