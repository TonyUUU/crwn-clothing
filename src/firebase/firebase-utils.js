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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();
  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
